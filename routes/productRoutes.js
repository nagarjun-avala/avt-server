const router = require("express").Router();
const productCtrl = require("../controllers/productCtrl")

router.post("/create", productCtrl.create); 
router.get("/", productCtrl.getAllProducts);

module.exports = router;