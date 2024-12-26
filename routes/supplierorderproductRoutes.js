const router = require("express").Router();
const supplierorderproductCtrl = require("../controllers/supplierorderproductCtrl");

router.get("/", supplierorderproductCtrl.getAllSupplierOrderProducts); // Fetch all SupplierOrderProducts
router.get("/:id", supplierorderproductCtrl.getSupplierOrderProductById); // Fetch a specific SupplierOrderProduct by ID
router.post("/", supplierorderproductCtrl.createSupplierOrderProduct); // Create a new SupplierOrderProduct
router.put("/:id", supplierorderproductCtrl.updateSupplierOrderProduct); // Update a SupplierOrderProduct by ID
router.delete("/:id", supplierorderproductCtrl.deleteSupplierOrderProduct); // Delete a SupplierOrderProduct by ID

module.exports = router;
