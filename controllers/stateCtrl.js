import { db } from "../lib/db";

const stateCtrl = {
  createState: async (req, res) => {
    try {
      const data = await db.state.create(req.body);
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getAllStates: async (req, res) => {
    try {
      const data = await db.state.findAll();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getStateById: async (req, res) => {
    try {
      const data = await db.state.findByPk(req.params.id);
      if (!data) return res.status(404).json({ message: "State not found" });
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updateState: async (req, res) => {
    try {
      const [updated] = await db.state.update(req.body, {
        where: { id: req.params.id },
      });
      if (!updated) return res.status(404).json({ message: "State not found" });
      res.status(200).json({ message: "State updated successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  deleteState: async (req, res) => {
    try {
      const deleted = await db.state.destroy({
        where: { id: req.params.id },
      });
      if (!deleted) return res.status(404).json({ message: "State not found" });
      res.status(200).json({ message: "State deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
module.exports = stateCtrl;
