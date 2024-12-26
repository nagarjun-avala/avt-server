const { db } = require("../lib/db");

const countryCtrl = {
  createCountry: async (req, res) => {
    try {
      const data = await db.country.create(req.body);
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getAllCountries: async (req, res) => {
    try {
      const data = await db.country.findAll();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getCountryById: async (req, res) => {
    try {
      const data = await db.country.findByPk(req.params.id);
      if (!data) return res.status(404).json({ message: "Country not found" });
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updateCountry: async (req, res) => {
    try {
      const [updated] = await db.country.update(req.body, {
        where: { id: req.params.id },
      });
      if (!updated)
        return res.status(404).json({ message: "Country not found" });
      res.status(200).json({ message: "Country updated successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  deleteCountry: async (req, res) => {
    try {
      const deleted = await db.country.destroy({
        where: { id: req.params.id },
      });
      if (!deleted)
        return res.status(404).json({ message: "Country not found" });
      res.status(200).json({ message: "Country deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
module.exports = countryCtrl;
