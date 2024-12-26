const router = require("express").Router();
const addressCtrl = require("../controllers/addressCtrl");

router.get("/", addressCtrl.getAllAddresss); // Fetch all Addresss
router.get("/:id", addressCtrl.getAddressById); // Fetch a specific Address by ID
router.post("/", addressCtrl.createAddress); // Create a new Address
router.put("/:id", addressCtrl.updateAddress); // Update a Address by ID
router.delete("/:id", addressCtrl.deleteAddress); // Delete a Address by ID

module.exports = router;
