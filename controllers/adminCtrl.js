const { db } = require("../lib/db");

const adminCtrl = {
  createAdmin: async (req, res) => {
    try {
      const data = await db.Admin.create(req.body);
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getAllAdmins: async (req, res) => {
    try {
      const admins = await db.admin.findAll({
        include: {
          role: true,
          createdRoles: true,
          updatedRoles: true,
          createdAdmins: {
            include: {
              password: false,
            },
          },
          updatedAdmins: {
            include: {
              password: false,
            },
          },
          password: false,
        },
      });

      res.status(200).json({
        status: "success",
        admins,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: "error",
        message: "Internal Server Error",
        error: error.message,
      });
    }
  },
  getAdminById: async (req, res) => {
    try {
      const data = await db.Admin.findByPk(req.params.id);
      if (!data) return res.status(404).json({ message: "Admin not found" });
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updateAdmin: async (req, res) => {
    try {
      const [updated] = await db.Admin.update(req.body, {
        where: { id: req.params.id },
      });
      if (!updated) return res.status(404).json({ message: "Admin not found" });
      res.status(200).json({ message: "Admin updated successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  deleteAdmin: async (req, res) => {
    try {
      const deleted = await db.Admin.destroy({
        where: { id: req.params.id },
      });
      if (!deleted) return res.status(404).json({ message: "Admin not found" });
      res.status(200).json({ message: "Admin deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = adminCtrl;
