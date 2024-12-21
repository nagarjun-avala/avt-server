const router = require("express").Router();
const adminCtrl = require("../controllers/adminCtrl")

router.get("/", adminCtrl.getAllAdmins);

module.exports = router;