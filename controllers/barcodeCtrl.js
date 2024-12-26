import { db } from "../lib/db";

const barcodeCtrl = {
  createBarcode: async (req, res) => {
    try {
      const data = await db.Barcode.create(req.body);
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getAllBarcodes: async (req, res) => {
    try {
      const data = await db.Barcode.findAll();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getBarcodeById: async (req, res) => {
    try {
      const data = await db.Barcode.findByPk(req.params.id);
      if (!data) return res.status(404).json({ message: "Barcode not found" });
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updateBarcode: async (req, res) => {
    try {
      const [updated] = await db.Barcode.update(req.body, {
        where: { id: req.params.id },
      });
      if (!updated)
        return res.status(404).json({ message: "Barcode not found" });
      res.status(200).json({ message: "Barcode updated successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  deleteBarcode: async (req, res) => {
    try {
      const deleted = await db.Barcode.destroy({
        where: { id: req.params.id },
      });
      if (!deleted)
        return res.status(404).json({ message: "Barcode not found" });
      res.status(200).json({ message: "Barcode deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = barcodeCtrl;
