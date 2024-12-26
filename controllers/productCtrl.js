const { db } = require("../lib/db");

const productCtrl = {
  createProduct: async (req, res) => {
    try {
      const newProduct = await db.product.create(req.body);
      res.status(201).json({
        status: "success",
        message: "Product created successfully",
        newProduct,
      });
      return; // Ensure no further code is executed
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: "error",
        message: "Internal Server Error",
        error: error.message,
      });
    }
  },
  getAllProducts: async (req, res) => {
    try {
      const products = await db.product.findAll({
        include: {
          category: true,
        },
      });
      res.status(200).json({
        status: "success",
        products,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: "error",
        message: "Internal Server Error",
        error: error.message,
      });
    }
  },
  getProductById: async (req, res) => {
    try {
      const data = await db.product.findByPk(req.params.id);
      if (!data) return res.status(404).json({ message: "Product not found" });
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
  updateProduct: async (req, res) => {
    try {
      const [updated] = await db.product.update(req.body, {
        where: { id: req.params.id },
      });
      if (!updated)
        return res.status(404).json({ message: "Product not found" });
      res.status(200).json({ message: "Product updated successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: "error",
        message: "Internal Server Error",
        error: error.message,
      });
    }
  },
  deleteProduct: async (req, res) => {
    try {
      const deleted = await db.product.destroy({
        where: { id: req.params.id },
      });
      if (!deleted)
        return res.status(404).json({ message: "Product not found" });
      res.status(200).json({ message: "Product deleted successfully" });
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
module.exports = productCtrl;
