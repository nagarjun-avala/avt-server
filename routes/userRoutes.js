const router = require("express").Router();
const userCtrl = require("../controllers/userCtrl");

router.get("/", userCtrl.getAllUsers); // Fetch all Users
router.get("/:id", userCtrl.getUserById); // Fetch a specific User by ID
router.post("/", userCtrl.createUser); // Create a new User
router.put("/:id", userCtrl.updateUser); // Update a User by ID
router.delete("/:id", userCtrl.deleteUser); // Delete a User by ID

module.exports = router;
