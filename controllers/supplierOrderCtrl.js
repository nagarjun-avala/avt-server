const { db } = require("../lib/db");

const supplierOrderCtrl = {
  createSupplierOrder: async (req, res) => {
    try {
      const data = await db.supplierOrder.create(req.body);
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getAllSupplierOrders: async (req, res) => {
    try {
      const data = await db.supplierOrder.findAll();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getSupplierOrderById: async (req, res) => {
    try {
      const data = await db.supplierOrder.findByPk(req.params.id);
      if (!data)
        return res.status(404).json({ message: "SupplierOrder not found" });
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updateSupplierOrder: async (req, res) => {
    try {
      const [updated] = await db.supplierOrder.update(req.body, {
        where: { id: req.params.id },
      });
      if (!updated)
        return res.status(404).json({ message: "SupplierOrder not found" });
      res.status(200).json({ message: "SupplierOrder updated successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  deleteSupplierOrder: async (req, res) => {
    try {
      const deleted = await db.supplierOrder.destroy({
        where: { id: req.params.id },
      });
      if (!deleted)
        return res.status(404).json({ message: "SupplierOrder not found" });
      res.status(200).json({ message: "SupplierOrder deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
module.exports = supplierOrderCtrl;
