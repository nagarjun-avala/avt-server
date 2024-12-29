const router = require("express").Router();
const returnCtrl = require("../controllers/returnCtrl");

router.get("/", returnCtrl.getAllReturns); // Fetch all Returns
router.get("/:id", returnCtrl.getReturnById); // Fetch a specific Return by ID
router.post("/", returnCtrl.createReturn); // Create a new Return
router.put("/:id", returnCtrl.updateReturn); // Update a Return by ID
router.delete("/:id", returnCtrl.deleteReturn); // Delete a Return by ID

module.exports = router;
