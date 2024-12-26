import { db } from "../lib/db";

const addressCtrl = {
  createAddress: async (req, res) => {
    try {
      const data = await db.Address.create(req.body);
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getAllAddresss: async (req, res) => {
    try {
      const data = await db.Address.findAll();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getAddressById: async (req, res) => {
    try {
      const data = await db.Address.findByPk(req.params.id);
      if (!data) return res.status(404).json({ message: "Address not found" });
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updateAddress: async (req, res) => {
    try {
      const [updated] = await db.Address.update(req.body, {
        where: { id: req.params.id },
      });
      if (!updated)
        return res.status(404).json({ message: "Address not found" });
      res.status(200).json({ message: "Address updated successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  deleteAddress: async (req, res) => {
    try {
      const deleted = await db.Address.destroy({
        where: { id: req.params.id },
      });
      if (!deleted)
        return res.status(404).json({ message: "Address not found" });
      res.status(200).json({ message: "Address deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = addressCtrl;
