const { db } = require("../lib/db");

const translationCtrl = {
  createTranslation: async (req, res) => {
    try {
      const data = await db.translation.create(req.body);
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getAllTranslations: async (req, res) => {
    try {
      const data = await db.translation.findAll();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getTranslationById: async (req, res) => {
    try {
      const data = await db.translation.findByPk(req.params.id);
      if (!data)
        return res.status(404).json({ message: "Translation not found" });
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updateTranslation: async (req, res) => {
    try {
      const [updated] = await db.translation.update(req.body, {
        where: { id: req.params.id },
      });
      if (!updated)
        return res.status(404).json({ message: "Translation not found" });
      res.status(200).json({ message: "Translation updated successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  deleteTranslation: async (req, res) => {
    try {
      const deleted = await db.translation.destroy({
        where: { id: req.params.id },
      });
      if (!deleted)
        return res.status(404).json({ message: "Translation not found" });
      res.status(200).json({ message: "Translation deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
module.exports = translationCtrl;
