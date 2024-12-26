import { db } from "../lib/db";

const supplierOrderProductCtrl = {
  createSupplierOrderProduct: async (req, res) => {
    try {
      const data = await db.supplierOrderProduct.create(req.body);
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getAllSupplierOrderProducts: async (req, res) => {
    try {
      const data = await db.supplierOrderProduct.findAll();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getSupplierOrderProductById: async (req, res) => {
    try {
      const data = await db.supplierOrderProduct.findByPk(req.params.id);
      if (!data)
        return res
          .status(404)
          .json({ message: "SupplierOrderProduct not found" });
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updateSupplierOrderProduct: async (req, res) => {
    try {
      const [updated] = await db.supplierOrderProduct.update(req.body, {
        where: { id: req.params.id },
      });
      if (!updated)
        return res
          .status(404)
          .json({ message: "SupplierOrderProduct not found" });
      res
        .status(200)
        .json({ message: "SupplierOrderProduct updated successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  deleteSupplierOrderProduct: async (req, res) => {
    try {
      const deleted = await db.supplierOrderProduct.destroy({
        where: { id: req.params.id },
      });
      if (!deleted)
        return res
          .status(404)
          .json({ message: "SupplierOrderProduct not found" });
      res
        .status(200)
        .json({ message: "SupplierOrderProduct deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
module.exports = supplierOrderProductCtrl;
