const router = require("express").Router();
const inventorytransactionCtrl = require("../controllers/inventorytransactionCtrl");

router.get("/", inventorytransactionCtrl.getAllInventoryTransactions); // Fetch all InventoryTransactions
router.get("/:id", inventorytransactionCtrl.getInventoryTransactionById); // Fetch a specific InventoryTransaction by ID
router.post("/", inventorytransactionCtrl.createInventoryTransaction); // Create a new InventoryTransaction
router.put("/:id", inventorytransactionCtrl.updateInventoryTransaction); // Update a InventoryTransaction by ID
router.delete("/:id", inventorytransactionCtrl.deleteInventoryTransaction); // Delete a InventoryTransaction by ID

module.exports = router;
