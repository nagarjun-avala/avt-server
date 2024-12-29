const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { db } = require("../lib/db");

const { validateAdminRegister } = require("../helpers/validator");

const authCtrl = {
  register: async (req, res) => {
    try {
      const {
        username,
        fullname,
        email,
        mobile,
        password,
        roleId,
        isActive,
        createdBy,
      } = req.body;

      let newUsername = username.replace(/\s/g, "_").toLowerCase();

      const errors = validateAdminRegister(
        newUsername,
        fullname,
        email,
        mobile,
        password,
        roleId
      );

      if (errors.length > 0) {
        return res.status(400).json({
          status: "error",
          errors,
        });
      }

      const existingAdmin = await db.admin.findUnique({
        where: {
          username: newUsername,
        },
      });

      if (existingAdmin) {
        return res.status(400).json({
          status: "error",
          errors: {
            field: "username",
            message: "This username isn't available. Please try another.",
          },
        });
      }

      const hashedPassword = await bcrypt.hash(password, 12);

      const newAdmin = await db.admin.create({
        data: {
          username: newUsername,
          fullname,
          email,
          mobile,
          password: hashedPassword,
          roleId,
          isActive,
          createdBy,
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

      const admin = await db.admin.findUnique({
        where: {
          username,
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
        secure: false,
        sameSite: "lax",
        path: "/api/refresh_token",
        maxAge: 24 * 60 * 60 * 1000, // 1 day
      });

      const updatedAdmin = await db.admin.update({
        where: {
          id: admin.id,
        },
        data: {
          ...admin,
          lastLoginAt: new Date(),
        },
        include: {
          role: true,
        },
      });
      const { password: trash, ...adminWithoutPassword } = updatedAdmin;
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
      // TODO: Find a way to authenticate using refreshtoken
      // const rf_token = req.cookies.refreshtoken;
      const access_token = req.headers.authorization;

      if (!access_token)
        return res.status(401).json({
          status: "error",
          message: "Unathorized",
        });
      jwt.verify(
        access_token,
        process.env.ACCESS_TOKEN_SECRET,
        async (error, result) => {
          if (error)
            return res.status(401).json({
              status: "error",
              message: "Please login now!",
            });

          const admin = await db.admin.findUnique({
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
