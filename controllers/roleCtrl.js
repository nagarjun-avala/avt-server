const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const roleCtrl = {
  create: async (req, res) => {
    const { code, label, short } = req.body;

    res.send({
      data: {
        code,
        label,
        short,
      },
    });
  },
  getAllRoles: async (req, res) => {
    try {
      const roles = await prisma.role.findMany();

      return res.status(200).json({
        success: true,
        message: "All Roles",
        roles,
      });
    } catch (error) {}
  },
};

module.exports = roleCtrl;
