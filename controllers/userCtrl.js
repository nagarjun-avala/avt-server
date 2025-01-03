const { db } = require("../lib/db");

const userCtrl = {
  createUser: async (req, res) => {
    try {
      const data = await db.user.create(req.body);
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getAllUsers: async (req, res) => {
    try {
      const data = await db.user.findAll();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getUserById: async (req, res) => {
    try {
      const data = await db.user.findByPk(req.params.id);
      if (!data) return res.status(404).json({ message: "User not found" });
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updateUser: async (req, res) => {
    try {
      const [updated] = await db.user.update(req.body, {
        where: { id: req.params.id },
      });
      if (!updated) return res.status(404).json({ message: "User not found" });
      res.status(200).json({ message: "User updated successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const deleted = await db.user.destroy({
        where: { id: req.params.id },
      });
      if (!deleted) return res.status(404).json({ message: "User not found" });
      res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
module.exports = userCtrl;
