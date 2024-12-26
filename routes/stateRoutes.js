const router = require("express").Router();
const stateCtrl = require("../controllers/stateCtrl");

router.get("/", stateCtrl.getAllStates); // Fetch all States
router.get("/:id", stateCtrl.getStateById); // Fetch a specific State by ID
router.post("/", stateCtrl.createState); // Create a new State
router.put("/:id", stateCtrl.updateState); // Update a State by ID
router.delete("/:id", stateCtrl.deleteState); // Delete a State by ID

module.exports = router;
