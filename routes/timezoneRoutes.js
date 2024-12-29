const router = require("express").Router();
const timezoneCtrl = require("../controllers/timezoneCtrl");

router.get("/", timezoneCtrl.getAllTimezones); // Fetch all Timezones
router.get("/:id", timezoneCtrl.getTimezoneById); // Fetch a specific Timezone by ID
router.post("/", timezoneCtrl.createTimezone); // Create a new Timezone
router.put("/:id", timezoneCtrl.updateTimezone); // Update a Timezone by ID
router.delete("/:id", timezoneCtrl.deleteTimezone); // Delete a Timezone by ID

module.exports = router;
