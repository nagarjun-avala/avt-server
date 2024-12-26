const router = require("express").Router();
const categoryCtrl = require("../controllers/categoryCtrl");

router.get("/", categoryCtrl.getAllCategorys); // Fetch all Categorys
router.get("/:id", categoryCtrl.getCategoryById); // Fetch a specific Category by ID
router.post("/", categoryCtrl.createCategory); // Create a new Category
router.put("/:id", categoryCtrl.updateCategory); // Update a Category by ID
router.delete("/:id", categoryCtrl.deleteCategory); // Delete a Category by ID

module.exports = router;
