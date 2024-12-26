const router = require("express").Router();
const roleCtrl = require("../controllers/roleCtrl");

router.get("/", roleCtrl.getAllRoles); // Fetch all Roles
router.get("/:id", roleCtrl.getRoleById); // Fetch a specific Role by ID
router.post("/", roleCtrl.createRole); // Create a new Role
router.put("/:id", roleCtrl.updateRole); // Update a Role by ID
router.delete("/:id", roleCtrl.deleteRole); // Delete a Role by ID

module.exports = router;
