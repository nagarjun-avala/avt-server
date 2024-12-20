const { Router } = require("express");
/** Routes import */
const authRoutes = require("./authRoutes");
const roleRoutes = require("./roleRoutes");
const testRoute = require("./testRoute");

const router = Router();

router.use("/", authRoutes); // http://localhost:8080/api/
router.use("/role", roleRoutes); // http://localhost:8080/api/role

/**Testing Routes */
router.use("/test",testRoute); /**  http://localhost:8080/api/role/create */

module.exports = router;
