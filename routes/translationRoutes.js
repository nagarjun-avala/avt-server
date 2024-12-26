const router = require("express").Router();
const translationCtrl = require("../controllers/translationCtrl");

router.get("/", translationCtrl.getAllTranslations); // Fetch all Translations
router.get("/:id", translationCtrl.getTranslationById); // Fetch a specific Translation by ID
router.post("/", translationCtrl.createTranslation); // Create a new Translation
router.put("/:id", translationCtrl.updateTranslation); // Update a Translation by ID
router.delete("/:id", translationCtrl.deleteTranslation); // Delete a Translation by ID

module.exports = router;
