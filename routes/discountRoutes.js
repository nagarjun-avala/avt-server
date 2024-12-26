const router = require("express").Router();
const discountCtrl = require("../controllers/discountCtrl");

router.get("/", discountCtrl.getAllDiscounts); // Fetch all Discounts
router.get("/:id", discountCtrl.getDiscountById); // Fetch a specific Discount by ID
router.post("/", discountCtrl.createDiscount); // Create a new Discount
router.put("/:id", discountCtrl.updateDiscount); // Update a Discount by ID
router.delete("/:id", discountCtrl.deleteDiscount); // Delete a Discount by ID

module.exports = router;
