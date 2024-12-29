const { db } = require("../lib/db");

const auditLogCtrl = {
  createAuditLog: async (req, res) => {
    try {
      const data = await db.auditLog.create(req.body);
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getAllAuditLogs: async (req, res) => {
    try {
      const data = await db.auditLog.findAll();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getAuditLogById: async (req, res) => {
    try {
      const data = await db.auditLog.findByPk(req.params.id);
      if (!data) return res.status(404).json({ message: "AuditLog not found" });
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updateAuditLog: async (req, res) => {
    try {
      const [updated] = await db.auditLog.update(req.body, {
        where: { id: req.params.id },
      });
      if (!updated)
        return res.status(404).json({ message: "AuditLog not found" });
      res.status(200).json({ message: "AuditLog updated successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  deleteAuditLog: async (req, res) => {
    try {
      const deleted = await db.auditLog.destroy({
        where: { id: req.params.id },
      });
      if (!deleted)
        return res.status(404).json({ message: "AuditLog not found" });
      res.status(200).json({ message: "AuditLog deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = auditLogCtrl;
