const router = require("express").Router();
const reportCtrl = require("../controllers/reportCtrl");

router.get("/", reportCtrl.getAllReports); // Fetch all Reports
router.get("/:id", reportCtrl.getReportById); // Fetch a specific Report by ID
router.post("/", reportCtrl.createReport); // Create a new Report
router.put("/:id", reportCtrl.updateReport); // Update a Report by ID
router.delete("/:id", reportCtrl.deleteReport); // Delete a Report by ID

module.exports = router;
