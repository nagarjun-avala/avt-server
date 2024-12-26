const { db } = require("../lib/db");

const returnCtrl = {
  createReturn: async (req, res) => {
    try {
      const data = await db.return.create(req.body);
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getAllReturns: async (req, res) => {
    try {
      const data = await db.return.findAll();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getReturnById: async (req, res) => {
    try {
      const data = await db.return.findByPk(req.params.id);
      if (!data) return res.status(404).json({ message: "Return not found" });
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updateReturn: async (req, res) => {
    try {
      const [updated] = await db.return.update(req.body, {
        where: { id: req.params.id },
      });
      if (!updated)
        return res.status(404).json({ message: "Return not found" });
      res.status(200).json({ message: "Return updated successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  deleteReturn: async (req, res) => {
    try {
      const deleted = await db.return.destroy({
        where: { id: req.params.id },
      });
      if (!deleted)
        return res.status(404).json({ message: "Return not found" });
      res.status(200).json({ message: "Return deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
module.exports = returnCtrl;
