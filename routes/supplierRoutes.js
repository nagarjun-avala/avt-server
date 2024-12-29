const router = require("express").Router();
const supplierCtrl = require("../controllers/supplierCtrl");

router.get("/", supplierCtrl.getAllSuppliers); // Fetch all Suppliers
router.get("/:id", supplierCtrl.getSupplierById); // Fetch a specific Supplier by ID
router.post("/", supplierCtrl.createSupplier); // Create a new Supplier
router.put("/:id", supplierCtrl.updateSupplier); // Update a Supplier by ID
router.delete("/:id", supplierCtrl.deleteSupplier); // Delete a Supplier by ID

module.exports = router;
