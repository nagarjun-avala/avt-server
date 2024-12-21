const router = require("express").Router();
const supplierCtrl = require("../controllers/supplierCtrl")

router.post("/create", supplierCtrl.create); 
router.get("/", supplierCtrl.getAllSuppliers);

module.exports = router;