import { db } from "../lib/db";

const discountCtrl = {
  createDiscount: async (req, res) => {
    try {
      const data = await db.discount.create(req.body);
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getAllDiscounts: async (req, res) => {
    try {
      const data = await db.discount.findAll();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getDiscountById: async (req, res) => {
    try {
      const data = await db.discount.findByPk(req.params.id);
      if (!data) return res.status(404).json({ message: "Discount not found" });
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updateDiscount: async (req, res) => {
    try {
      const [updated] = await db.discount.update(req.body, {
        where: { id: req.params.id },
      });
      if (!updated)
        return res.status(404).json({ message: "Discount not found" });
      res.status(200).json({ message: "Discount updated successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  deleteDiscount: async (req, res) => {
    try {
      const deleted = await db.discount.destroy({
        where: { id: req.params.id },
      });
      if (!deleted)
        return res.status(404).json({ message: "Discount not found" });
      res.status(200).json({ message: "Discount deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
module.exports = discountCtrl;
