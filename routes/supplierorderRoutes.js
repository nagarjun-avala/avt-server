const router = require("express").Router();
const supplierorderCtrl = require("../controllers/supplierorderCtrl");

router.get("/", supplierorderCtrl.getAllSupplierOrders); // Fetch all SupplierOrders
router.get("/:id", supplierorderCtrl.getSupplierOrderById); // Fetch a specific SupplierOrder by ID
router.post("/", supplierorderCtrl.createSupplierOrder); // Create a new SupplierOrder
router.put("/:id", supplierorderCtrl.updateSupplierOrder); // Update a SupplierOrder by ID
router.delete("/:id", supplierorderCtrl.deleteSupplierOrder); // Delete a SupplierOrder by ID

module.exports = router;
