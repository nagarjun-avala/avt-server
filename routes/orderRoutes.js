const router = require("express").Router();
const orderCtrl = require("../controllers/orderCtrl");

router.get("/", orderCtrl.getAllOrders); // Fetch all Orders
router.get("/:id", orderCtrl.getOrderById); // Fetch a specific Order by ID
router.post("/", orderCtrl.createOrder); // Create a new Order
router.put("/:id", orderCtrl.updateOrder); // Update a Order by ID
router.delete("/:id", orderCtrl.deleteOrder); // Delete a Order by ID

module.exports = router;
