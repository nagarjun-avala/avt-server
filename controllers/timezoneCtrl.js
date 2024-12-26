import { db } from "../lib/db";

const timezoneCtrl = {
  createTimezone: async (req, res) => {
    try {
      const data = await db.Timezone.create(req.body);
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getAllTimezones: async (req, res) => {
    try {
      const data = await db.Timezone.findAll();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getTimezoneById: async (req, res) => {
    try {
      const data = await db.Timezone.findByPk(req.params.id);
      if (!data) return res.status(404).json({ message: "Timezone not found" });
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updateTimezone: async (req, res) => {
    try {
      const [updated] = await db.Timezone.update(req.body, {
        where: { id: req.params.id },
      });
      if (!updated)
        return res.status(404).json({ message: "Timezone not found" });
      res.status(200).json({ message: "Timezone updated successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  deleteTimezone: async (req, res) => {
    try {
      const deleted = await db.Timezone.destroy({
        where: { id: req.params.id },
      });
      if (!deleted)
        return res.status(404).json({ message: "Timezone not found" });
      res.status(200).json({ message: "Timezone deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
module.exports = timezoneCtrl;
