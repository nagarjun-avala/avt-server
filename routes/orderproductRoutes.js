const router = require("express").Router();
const orderproductCtrl = require("../controllers/orderproductCtrl");

router.get("/", orderproductCtrl.getAllOrderProducts); // Fetch all OrderProducts
router.get("/:id", orderproductCtrl.getOrderProductById); // Fetch a specific OrderProduct by ID
router.post("/", orderproductCtrl.createOrderProduct); // Create a new OrderProduct
router.put("/:id", orderproductCtrl.updateOrderProduct); // Update a OrderProduct by ID
router.delete("/:id", orderproductCtrl.deleteOrderProduct); // Delete a OrderProduct by ID

module.exports = router;
