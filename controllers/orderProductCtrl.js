import { db } from "../lib/db";

const orderProductCtrl = {
  createOrderProduct: async (req, res) => {
    try {
      const data = await db.OrderProduct.create(req.body);
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
  getAllOrderProducts: async (req, res) => {
    try {
      const data = await db.OrderProduct.findAll();
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
  getOrderProductById: async (req, res) => {
    try {
      const data = await db.OrderProduct.findByPk(req.params.id);
      if (!data)
        return res.status(404).json({ message: "OrderProduct not found" });
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
  updateOrderProduct: async (req, res) => {
    try {
      const [updated] = await db.OrderProduct.update(req.body, {
        where: { id: req.params.id },
      });
      if (!updated)
        return res.status(404).json({ message: "OrderProduct not found" });
      res.status(200).json({ message: "OrderProduct updated successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: "error",
        message: "Internal Server Error",
        error: error.message,
      });
    }
  },
  deleteOrderProduct: async (req, res) => {
    try {
      const deleted = await db.OrderProduct.destroy({
        where: { id: req.params.id },
      });
      if (!deleted)
        return res.status(404).json({ message: "OrderProduct not found" });
      res.status(200).json({ message: "OrderProduct deleted successfully" });
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
module.exports = orderProductCtrl;
