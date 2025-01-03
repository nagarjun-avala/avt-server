const { db } = require("../lib/db");

const returnProductCtrl = {
  createReturnProduct: async (req, res) => {
    try {
      const data = await db.returnProduct.create(req.body);
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getAllReturnProducts: async (req, res) => {
    try {
      const data = await db.returnProduct.findAll();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getReturnProductById: async (req, res) => {
    try {
      const data = await db.returnProduct.findByPk(req.params.id);
      if (!data)
        return res.status(404).json({ message: "ReturnProduct not found" });
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updateReturnProduct: async (req, res) => {
    try {
      const [updated] = await db.returnProduct.update(req.body, {
        where: { id: req.params.id },
      });
      if (!updated)
        return res.status(404).json({ message: "ReturnProduct not found" });
      res.status(200).json({ message: "ReturnProduct updated successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  deleteReturnProduct: async (req, res) => {
    try {
      const deleted = await db.returnProduct.destroy({
        where: { id: req.params.id },
      });
      if (!deleted)
        return res.status(404).json({ message: "ReturnProduct not found" });
      res.status(200).json({ message: "ReturnProduct deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
module.exports = returnProductCtrl;
