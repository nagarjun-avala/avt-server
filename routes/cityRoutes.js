const router = require("express").Router();
const cityCtrl = require("../controllers/cityCtrl");

router.get("/", cityCtrl.getAllCitys); // Fetch all Citys
router.get("/:id", cityCtrl.getCityById); // Fetch a specific City by ID
router.post("/", cityCtrl.createCity); // Create a new City
router.put("/:id", cityCtrl.updateCity); // Update a City by ID
router.delete("/:id", cityCtrl.deleteCity); // Delete a City by ID

module.exports = router;
