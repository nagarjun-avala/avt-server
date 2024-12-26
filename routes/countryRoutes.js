const router = require("express").Router();
const countryCtrl = require("../controllers/countryCtrl");

router.get("/", countryCtrl.getAllCountrys); // Fetch all Countrys
router.get("/:id", countryCtrl.getCountryById); // Fetch a specific Country by ID
router.post("/", countryCtrl.createCountry); // Create a new Country
router.put("/:id", countryCtrl.updateCountry); // Update a Country by ID
router.delete("/:id", countryCtrl.deleteCountry); // Delete a Country by ID

module.exports = router;
