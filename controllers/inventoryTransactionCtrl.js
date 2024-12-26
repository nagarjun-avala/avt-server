import { db } from "../lib/db";

const inventoryTransactionCtrl = {
  createInventoryTransaction: async (req, res) => {
    try {
      const data = await db.inventoryTransaction.create(req.body);
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
  getAllInventoryTransactions: async (req, res) => {
    try {
      const data = await db.inventoryTransaction.findAll();
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
  getInventoryTransactionById: async (req, res) => {
    try {
      const data = await db.inventoryTransaction.findByPk(req.params.id);
      if (!data)
        return res
          .status(404)
          .json({ message: "InventoryTransaction not found" });
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
  updateInventoryTransaction: async (req, res) => {
    try {
      const [updated] = await db.inventoryTransaction.update(req.body, {
        where: { id: req.params.id },
      });
      if (!updated)
        return res
          .status(404)
          .json({ message: "InventoryTransaction not found" });
      res
        .status(200)
        .json({ message: "InventoryTransaction updated successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: "error",
        message: "Internal Server Error",
        error: error.message,
      });
    }
  },
  deleteInventoryTransaction: async (req, res) => {
    try {
      const deleted = await db.inventoryTransaction.destroy({
        where: { id: req.params.id },
      });
      if (!deleted)
        return res
          .status(404)
          .json({ message: "InventoryTransaction not found" });
      res
        .status(200)
        .json({ message: "InventoryTransaction deleted successfully" });
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
module.exports = inventoryTransactionCtrl;
