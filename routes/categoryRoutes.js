const router = require("express").Router();
const categoryCtrl = require("../controllers/categoryCtrl");

router.get("/", categoryCtrl.getAll); // Fetch all Categorys
router.get("/:id", categoryCtrl.getById); // Fetch a specific Category by ID
router.post("/", categoryCtrl.create); // Create a new Category
router.put("/:id", categoryCtrl.update); // Update a Category by ID
router.delete("/:id", categoryCtrl.delete); // Delete a Category by ID

module.exports = router;
