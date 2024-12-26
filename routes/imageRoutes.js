const router = require("express").Router();
const imageCtrl = require("../controllers/imageCtrl");

router.get("/", imageCtrl.getAllImages); // Fetch all Images
router.get("/:id", imageCtrl.getImageById); // Fetch a specific Image by ID
router.post("/", imageCtrl.createImage); // Create a new Image
router.put("/:id", imageCtrl.updateImage); // Update a Image by ID
router.delete("/:id", imageCtrl.deleteImage); // Delete a Image by ID

module.exports = router;
