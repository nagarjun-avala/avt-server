const { Router } = require("express");
/** Routes import */
const roleRoutes = require("./roleRoutes");
const testRoute = require("./testRoute");

const router = Router();

router.use("/role", roleRoutes); // http://localhost:8080/api/

/**Testing Routes */
router.use("/test",testRoute); /**  http://localhost:8080/api/role/create */

module.exports = router;
