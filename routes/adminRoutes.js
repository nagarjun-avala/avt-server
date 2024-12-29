const router = require("express").Router();
const adminCtrl = require("../controllers/adminCtrl");

router.get("/", adminCtrl.getAllAdmins); // Fetch all Admins
router.get("/:id", adminCtrl.getAdminById); // Fetch a specific Admin by ID
router.post("/", adminCtrl.createAdmin); // Create a new Admin
router.put("/:id", adminCtrl.updateAdmin); // Update a Admin by ID
router.delete("/:id", adminCtrl.deleteAdmin); // Delete a Admin by ID

module.exports = router;
