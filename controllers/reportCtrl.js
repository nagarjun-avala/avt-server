import { db } from "../lib/db";

const reportCtrl = {
  createReport: async (req, res) => {
    try {
      const data = await db.report.create(req.body);
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getAllReports: async (req, res) => {
    try {
      const data = await db.report.findAll();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getReportById: async (req, res) => {
    try {
      const data = await db.report.findByPk(req.params.id);
      if (!data) return res.status(404).json({ message: "Report not found" });
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updateReport: async (req, res) => {
    try {
      const [updated] = await db.report.update(req.body, {
        where: { id: req.params.id },
      });
      if (!updated)
        return res.status(404).json({ message: "Report not found" });
      res.status(200).json({ message: "Report updated successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  deleteReport: async (req, res) => {
    try {
      const deleted = await db.report.destroy({
        where: { id: req.params.id },
      });
      if (!deleted)
        return res.status(404).json({ message: "Report not found" });
      res.status(200).json({ message: "Report deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
module.exports = reportCtrl;
