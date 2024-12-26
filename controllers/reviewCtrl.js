import { db } from "../lib/db";

const reviewCtrl = {
  createReview: async (req, res) => {
    try {
      const data = await db.Review.create(req.body);
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getAllReviews: async (req, res) => {
    try {
      const data = await db.Review.findAll();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getReviewById: async (req, res) => {
    try {
      const data = await db.Review.findByPk(req.params.id);
      if (!data) return res.status(404).json({ message: "Review not found" });
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updateReview: async (req, res) => {
    try {
      const [updated] = await db.Review.update(req.body, {
        where: { id: req.params.id },
      });
      if (!updated)
        return res.status(404).json({ message: "Review not found" });
      res.status(200).json({ message: "Review updated successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  deleteReview: async (req, res) => {
    try {
      const deleted = await db.Review.destroy({
        where: { id: req.params.id },
      });
      if (!deleted)
        return res.status(404).json({ message: "Review not found" });
      res.status(200).json({ message: "Review deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
module.exports = reviewCtrl;
