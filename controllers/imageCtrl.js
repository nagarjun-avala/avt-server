import { db } from "../lib/db";

const imageCtrl = {
  createImage: async (req, res) => {
    try {
      const data = await db.image.create(req.body);
      res.status(201).json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: "error",
        message: "Internal Server Error",
        error: error.message,
      });
    }
  },
  getAllImages: async (req, res) => {
    try {
      const data = await db.image.findAll();
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: "error",
        message: "Internal Server Error",
        error: error.message,
      });
    }
  },
  getImageById: async (req, res) => {
    try {
      const data = await db.image.findByPk(req.params.id);
      if (!data) return res.status(404).json({ message: "Image not found" });
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: "error",
        message: "Internal Server Error",
        error: error.message,
      });
    }
  },
  updateImage: async (req, res) => {
    try {
      const [updated] = await db.image.update(req.body, {
        where: { id: req.params.id },
      });
      if (!updated) return res.status(404).json({ message: "Image not found" });
      res.status(200).json({ message: "Image updated successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: "error",
        message: "Internal Server Error",
        error: error.message,
      });
    }
  },
  deleteImage: async (req, res) => {
    try {
      const deleted = await db.image.destroy({
        where: { id: req.params.id },
      });
      if (!deleted) return res.status(404).json({ message: "Image not found" });
      res.status(200).json({ message: "Image deleted successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: "error",
        message: "Internal Server Error",
        error: error.message,
      });
    }
  },
};

module.exports = imageCtrl;
