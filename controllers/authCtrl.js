const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const prisma = new PrismaClient();

const authCtrl = {
  register: async (req, res) => {
    try {
      var errors = [];
      const { username, fullname, email, mobile, password, roleId } = req.body;
      if (!username)
        errors = [
          ...errors,
          {
            field: "username",
            message: "This username is required.",
          },
        ];
      if (!fullname)
        errors = [
          ...errors,
          {
            field: "fullname",
            message: "This fullname is required.",
          },
        ];
      if (!password)
        errors = [
          ...errors,
          { field: "password", message: "This password is required." },
        ];
      if (!roleId)
        errors = [
          ...errors,
          { field: "roleId", message: "This roleId is required." },
        ];
      const existingAdmin = await prisma.admin.findFirst({
        where: {
          username,
        },
      });

      if (existingAdmin)
        errors = [
          ...errors,
          {
            field: "username",
            message: `This username isn't available. Please try another.`,
          },
        ];

      if (errors.length > 0)
        return res.status(400).json({
          status: "error",
          errors,
        });

      const hashedPassword = await bcrypt.hash(password, 10);

      const admin = await prisma.admin.create({
        data: {
          username,
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
          ...admin,
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
        errors = [
          ...errors,
          {
            field: "username",
            message: "This username is required.",
          },
        ];
      if (!password)
        errors = [
          ...errors,
          {
            field: "password",
            message: "This password is required.",
          },
        ];

      const admin = await prisma.admin.findFirst({
        where: {
          username,
        },
        include: {
          role: true,
        },
      });

      if (!admin)
        errors = [
          ...errors,
          { field: "username", message: "Invalid username or password" },
          { field: "password", message: "Invalid username or password" },
        ];

      const isMatch = await bcrypt.compare(password, admin.password);

      if (!isMatch)
        errors = [
          ...errors,
          { field: "username", message: "Invalid username or password" },
          { field: "password", message: "Invalid username or password" },
        ];

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
    } catch (error) {}
  },
};

module.exports = authCtrl;
