const { db } = require("../lib/db");

const inventoryAdjustmentCtrl = {
  createInventoryAdjustment: async (req, res) => {
    try {
      const data = await db.inventoryAdjustment.create(req.body);
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
  getAllInventoryAdjustments: async (req, res) => {
    try {
      const data = await db.inventoryAdjustment.findAll();
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
  getInventoryAdjustmentById: async (req, res) => {
    try {
      const data = await db.inventoryAdjustment.findByPk(req.params.id);
      if (!data)
        return res
          .status(404)
          .json({ message: "InventoryAdjustment not found" });
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
  updateInventoryAdjustment: async (req, res) => {
    try {
      const [updated] = await db.inventoryAdjustment.update(req.body, {
        where: { id: req.params.id },
      });
      if (!updated)
        return res
          .status(404)
          .json({ message: "InventoryAdjustment not found" });
      res
        .status(200)
        .json({ message: "InventoryAdjustment updated successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: "error",
        message: "Internal Server Error",
        error: error.message,
      });
    }
  },
  deleteInventoryAdjustment: async (req, res) => {
    try {
      const deleted = await db.inventoryAdjustment.destroy({
        where: { id: req.params.id },
      });
      if (!deleted)
        return res
          .status(404)
          .json({ message: "InventoryAdjustment not found" });
      res
        .status(200)
        .json({ message: "InventoryAdjustment deleted successfully" });
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
module.exports = inventoryAdjustmentCtrl;
