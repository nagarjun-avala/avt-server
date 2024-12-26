import { db } from "../lib/db";

const orderProductCtrl = {
  createOrderProduct: async (req, res) => {
    try {
      const data = await db.orderProduct.create(req.body);
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
      const data = await db.orderProduct.findAll();
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
      const data = await db.orderProduct.findByPk(req.params.id);
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
      const [updated] = await db.orderProduct.update(req.body, {
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
      const deleted = await db.orderProduct.destroy({
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
