const router = require("express").Router();
const inventoryadjustmentCtrl = require("../controllers/inventoryadjustmentCtrl");

router.get("/", inventoryadjustmentCtrl.getAllInventoryAdjustments); // Fetch all InventoryAdjustments
router.get("/:id", inventoryadjustmentCtrl.getInventoryAdjustmentById); // Fetch a specific InventoryAdjustment by ID
router.post("/", inventoryadjustmentCtrl.createInventoryAdjustment); // Create a new InventoryAdjustment
router.put("/:id", inventoryadjustmentCtrl.updateInventoryAdjustment); // Update a InventoryAdjustment by ID
router.delete("/:id", inventoryadjustmentCtrl.deleteInventoryAdjustment); // Delete a InventoryAdjustment by ID

module.exports = router;
