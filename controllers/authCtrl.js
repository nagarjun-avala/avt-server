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

      if (existingAdmin)
        errors.push({
          field: "username",
          message: `This username isn't available. Please try another.`,
        });

      if (errors.length > 0)
        return res.status(400).json({
          status: "error",
          errors,
        });

      const hashedPassword = await bcrypt.hash(password, 10);

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

      res.send({
        status: "success",
        message: "Admin Created successfully",
        admin: {
          ...newAdmin,
          password: "",
        },
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

      if (!admin)
        errors.push(
          {
            field: "username",
            message: "Invalid username or password",
          },
          {
            field: "password",
            message: "Invalid username or password",
          }
        );

      const isMatch = await bcrypt.compare(password, admin.password);

      if (!isMatch)
        errors.push(
          {
            field: "username",
            message: "Invalid username or password",
          },
          {
            field: "password",
            message: "Invalid username or password",
          }
        );

      if (errors.length > 0)
        return res.status(400).json({
          status: "error",
          errors,
        });

      return res.status(200).json({
        status: "success",
        message: "Login Success",
        data: {
          admin: { ...admin, password: "" },
        },
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
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: "error",
        message: "Internal Server Error",
        error,
      });
    }
  },
};

const createAccessToken = async (payload) => {
  return await jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "10h",
  });
};

const createRefreshToken = async (payload) => {
  return await jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "24h",
  });
};

module.exports = authCtrl;
