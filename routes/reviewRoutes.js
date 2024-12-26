const router = require("express").Router();
const reviewCtrl = require("../controllers/reviewCtrl");

router.get("/", reviewCtrl.getAllReviews); // Fetch all Reviews
router.get("/:id", reviewCtrl.getReviewById); // Fetch a specific Review by ID
router.post("/", reviewCtrl.createReview); // Create a new Review
router.put("/:id", reviewCtrl.updateReview); // Update a Review by ID
router.delete("/:id", reviewCtrl.deleteReview); // Delete a Review by ID

module.exports = router;
