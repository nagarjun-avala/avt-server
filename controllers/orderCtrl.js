import { db } from "../lib/db";

const orderCtrl = {
  createOrder: async (req, res) => {
    try {
      const data = await db.order.create(req.body);
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
  getAllOrders: async (req, res) => {
    try {
      const data = await db.order.findAll();
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
  getOrderById: async (req, res) => {
    try {
      const data = await db.order.findByPk(req.params.id);
      if (!data) return res.status(404).json({ message: "Order not found" });
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
  updateOrder: async (req, res) => {
    try {
      const [updated] = await db.order.update(req.body, {
        where: { id: req.params.id },
      });
      if (!updated) return res.status(404).json({ message: "Order not found" });
      res.status(200).json({ message: "Order updated successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: "error",
        message: "Internal Server Error",
        error: error.message,
      });
    }
  },
  deleteOrder: async (req, res) => {
    try {
      const deleted = await db.order.destroy({
        where: { id: req.params.id },
      });
      if (!deleted) return res.status(404).json({ message: "Order not found" });
      res.status(200).json({ message: "Order deleted successfully" });
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
module.exports = orderCtrl;
