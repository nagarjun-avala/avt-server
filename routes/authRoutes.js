const { Router } = require("express");
const authCtrl = require("../controllers/authCtrl")

const router = Router();


router.post("/login", authCtrl.login); // http://localhost:8080/api/login
router.post("/register", authCtrl.register); // http://localhost:8080/api/role/register
/**
 * TODO: Create logout,refresh_token pages here
 */

module.exports = router;
