const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const roleCtrl = {
  create: async (req, res) => {
    try {
      var errors = [];
      const { code, label, short } = req.body;
      if (!code)
        errors = [
          ...errors,
          {
            field: "code",
            message: "This code is required.",
          },
        ];
      if (!label)
        errors = [
          ...errors,
          {
            field: "label",
            message: "This label is required.",
          },
        ];
      if (!short)
        errors = [
          ...errors,
          { field: "short", message: "This short is required." },
        ];
      const existingRole = await prisma.role.findFirst({
        where: {
          code,
        },
      });

      if (existingRole)
        errors = [
          ...errors,
          { field: "code", message: "Role with access code alredy exists" },
        ];

      if (errors.length > 0)
        return res.status(400).json({
          status: "error",
          errors,
        });

      const role = await prisma.role.create({
        data: {
          code,
          label,
          short,
        },
      });

      res.send({
        status:"success",
        message:"Role Created successfully",
        role,
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
  getAllRoles: async (req, res) => {
    try {
      const roles = await prisma.role.findMany();

      return res.status(200).json({
        status: "success",
        message: "Roles data fetched successfully",
        data: {
          len:roles.length,
          roles,
        },
      });
    } catch (error) {}
  },
};

module.exports = roleCtrl;
