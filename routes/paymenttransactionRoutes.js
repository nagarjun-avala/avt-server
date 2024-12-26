const router = require("express").Router();
const paymenttransactionCtrl = require("../controllers/paymenttransactionCtrl");

router.get("/", paymenttransactionCtrl.getAllPaymentTransactions); // Fetch all PaymentTransactions
router.get("/:id", paymenttransactionCtrl.getPaymentTransactionById); // Fetch a specific PaymentTransaction by ID
router.post("/", paymenttransactionCtrl.createPaymentTransaction); // Create a new PaymentTransaction
router.put("/:id", paymenttransactionCtrl.updatePaymentTransaction); // Update a PaymentTransaction by ID
router.delete("/:id", paymenttransactionCtrl.deletePaymentTransaction); // Delete a PaymentTransaction by ID

module.exports = router;
