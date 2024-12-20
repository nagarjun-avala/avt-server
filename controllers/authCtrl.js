const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const prisma = new PrismaClient();

const {
  validateUsername,
  validateFullname,
  validateEmail,
  validateMobile,
  validatePassword,
  validateRoleId,
} = require("../helpers/validator");

const authCtrl = {
  register: async (req, res) => {
    try {
      var errors = [];
      const { username, fullname, email, mobile, password, roleId } = req.body;
      let newUsername = username.replace(/\s/g, "_").toLowerCase();
      errors = errors.concat(validateUsername(newUsername));
      errors = errors.concat(validateFullname(fullname));
      errors = errors.concat(validateEmail(email));
      errors = errors.concat(validateMobile(mobile));
      errors = errors.concat(validatePassword(password));
      errors = errors.concat(validateRoleId(roleId));

      const existingAdmin = await prisma.admin.findFirst({
        where: {
          username: newUsername,
        },
      });

      if (existingAdmin) {
        errors.push({
          field: "username",
          message: `This username isn't available. Please try another.`,
        });
      }

      if (errors.length > 0) {
        return res.status(400).json({
          status: "error",
          errors,
        });
      }

      const hashedPassword = await bcrypt.hash(password, 12);

      const newAdmin = await prisma.admin.create({
        data: {
          username: newUsername,
          fullname,
          email,
          mobile,
          password: hashedPassword,
          roleId,
        },
      });
      const { password: trash, ...adminWithoutPassword } = newAdmin;
      res.status(201).send({
        status: "success",
        message: "Admin Created successfully",
        admin: adminWithoutPassword,
      });
      return; // Ensure no further code is executed
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: "error",
        message: "Internal Server Error",
        error,
      });
    }
  },
  login: async (req, res) => {
    try {
      var errors = [];
      const { username, password } = req.body;
      if (!username)
        errors.push({
          field: "username",
          message: "This username is required.",
        });
      if (!password)
        errors.push({
          field: "password",
          message: "This password is required.",
        });

      const admin = await prisma.admin.findFirst({
        where: {
          username,
        },
        include: {
          role: true,
        },
      });

      if (!admin) {
        return res.status(400).json({
          status: "error",
          message: "Invalid username or password",
        });
      }

      const isMatch = await bcrypt.compare(password, admin.password);

      if (!isMatch) {
        return res.status(400).json({
          status: "error",
          message: "Invalid username or password",
        });
      }

      if (errors.length > 0) {
        return res.status(400).json({
          status: "error",
          errors,
        });
      }

      const access_token = await createAccessToken({
        id: admin.id,
      });
      const refresh_token = await createRefreshToken({
        id: admin.id,
      });

      res.cookie("refreshtoken", refresh_token, {
        httpOnly: true,
        path: "/api/refresh_token",
        maxAge: 24 * 60 * 60 * 1000, // 1 day
      });

      const { password: trash, ...adminWithoutPassword } = admin;
      return res.status(200).json({
        status: "success",
        message: "Login Success",
        access_token,
        admin: adminWithoutPassword,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: "error",
        message: "Internal Server Error",
        error,
      });
    }
  },
  logout: async (req, res) => {
    try {
      res.clearCookie("refreshtoken", {
        path: "/api/refresh_token",
      });
      return res.status(200).json({
        status: "success",
        message: "Logouted Out",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: "error",
        message: "Internal Server Error",
        error,
      });
    }
  },
  generateAccessToken: async (req, res) => {
    try {
      const rf_token = req.cookies.refreshtoken;
      if (!rf_token)
        return res.status(400).json({
          status: "error",
          message: "Please login now!",
        });
      jwt.verify(
        rf_token,
        process.env.REFRESH_TOKEN_SECRET,
        async (error, result) => {
          if (error)
            return res.status(400).json({
              status: "error",
              message: "Please login now!",
            });

          const admin = await prisma.admin.findFirst({
            where: {
              id: result.id,
            },
            include: {
              role: true,
              password: false,
            },
          });

          const access_token = await createAccessToken({
            id: admin.id,
          });
          
          res.status(200).send({
            access_token,
            admin,
          });
        }
      );
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: "error",
        message: "Internal Server Error",
      });
    }
  },
};

const createAccessToken = async (payload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1h",
  });
};

const createRefreshToken = async (payload) => {
  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "1d",
  });
};

module.exports = authCtrl;
