import { db } from "../lib/db";

const cityCtrl = {
  createCity: async (req, res) => {
    try {
      const data = await db.city.create(req.body);
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getAllCities: async (req, res) => {
    try {
      const data = await db.city.findAll();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getCityById: async (req, res) => {
    try {
      const data = await db.city.findByPk(req.params.id);
      if (!data) return res.status(404).json({ message: "City not found" });
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updateCity: async (req, res) => {
    try {
      const [updated] = await db.city.update(req.body, {
        where: { id: req.params.id },
      });
      if (!updated) return res.status(404).json({ message: "City not found" });
      res.status(200).json({ message: "City updated successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  deleteCity: async (req, res) => {
    try {
      const deleted = await db.city.destroy({
        where: { id: req.params.id },
      });
      if (!deleted) return res.status(404).json({ message: "City not found" });
      res.status(200).json({ message: "City deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
module.exports = cityCtrl;
