const router = require("express").Router();
const roleCtrl = require("../controllers/roleCtrl")


router.get("/", roleCtrl.getAllRoles); // http://localhost:8080/api/role
router.post("/create", roleCtrl.create); // http://localhost:8080/api/role/create

module.exports = router;
