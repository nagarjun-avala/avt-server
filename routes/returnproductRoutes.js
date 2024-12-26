const router = require("express").Router();
const returnproductCtrl = require("../controllers/returnproductCtrl");

router.get("/", returnproductCtrl.getAllReturnProducts); // Fetch all ReturnProducts
router.get("/:id", returnproductCtrl.getReturnProductById); // Fetch a specific ReturnProduct by ID
router.post("/", returnproductCtrl.createReturnProduct); // Create a new ReturnProduct
router.put("/:id", returnproductCtrl.updateReturnProduct); // Update a ReturnProduct by ID
router.delete("/:id", returnproductCtrl.deleteReturnProduct); // Delete a ReturnProduct by ID

module.exports = router;
