const router = require("express").Router();
const auditlogCtrl = require("../controllers/auditlogCtrl");

router.get("/", auditlogCtrl.getAllAuditLogs); // Fetch all AuditLogs
router.get("/:id", auditlogCtrl.getAuditLogById); // Fetch a specific AuditLog by ID
router.post("/", auditlogCtrl.createAuditLog); // Create a new AuditLog
router.put("/:id", auditlogCtrl.updateAuditLog); // Update a AuditLog by ID
router.delete("/:id", auditlogCtrl.deleteAuditLog); // Delete a AuditLog by ID

module.exports = router;
