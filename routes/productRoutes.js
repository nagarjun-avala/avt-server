const router = require("express").Router();
const productCtrl = require("../controllers/productCtrl");

router.get("/", productCtrl.getAllProducts); // Fetch all Products
router.get("/:id", productCtrl.getProductById); // Fetch a specific Product by ID
router.post("/", productCtrl.createProduct); // Create a new Product
router.put("/:id", productCtrl.updateProduct); // Update a Product by ID
router.delete("/:id", productCtrl.deleteProduct); // Delete a Product by ID

module.exports = router;
