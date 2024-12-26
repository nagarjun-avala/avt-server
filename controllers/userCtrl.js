import { db } from "../lib/db";

const userCtrl = {
  createUser: async (req, res) => {
    try {
      const data = await db.User.create(req.body);
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getAllUsers: async (req, res) => {
    try {
      const data = await db.User.findAll();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getUserById: async (req, res) => {
    try {
      const data = await db.User.findByPk(req.params.id);
      if (!data) return res.status(404).json({ message: "User not found" });
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updateUser: async (req, res) => {
    try {
      const [updated] = await db.User.update(req.body, {
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
      const deleted = await db.User.destroy({
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
