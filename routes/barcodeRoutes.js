const router = require("express").Router();
const barcodeCtrl = require("../controllers/barcodeCtrl");

router.get("/", barcodeCtrl.getAllBarcodes); // Fetch all Barcodes
router.get("/:id", barcodeCtrl.getBarcodeById); // Fetch a specific Barcode by ID
router.post("/", barcodeCtrl.createBarcode); // Create a new Barcode
router.put("/:id", barcodeCtrl.updateBarcode); // Update a Barcode by ID
router.delete("/:id", barcodeCtrl.deleteBarcode); // Delete a Barcode by ID

module.exports = router;
