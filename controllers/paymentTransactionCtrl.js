const { db } = require("../lib/db");

const paymentTransactionCtrl = {
  createPaymentTransaction: async (req, res) => {
    try {
      const data = await db.paymentTransaction.create(req.body);
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
  getAllPaymentTransactions: async (req, res) => {
    try {
      const data = await db.paymentTransaction.findAll();
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
  getPaymentTransactionById: async (req, res) => {
    try {
      const data = await db.paymentTransaction.findByPk(req.params.id);
      if (!data)
        return res
          .status(404)
          .json({ message: "PaymentTransaction not found" });
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
  updatePaymentTransaction: async (req, res) => {
    try {
      const [updated] = await db.paymentTransaction.update(req.body, {
        where: { id: req.params.id },
      });
      if (!updated)
        return res
          .status(404)
          .json({ message: "PaymentTransaction not found" });
      res
        .status(200)
        .json({ message: "PaymentTransaction updated successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: "error",
        message: "Internal Server Error",
        error: error.message,
      });
    }
  },
  deletePaymentTransaction: async (req, res) => {
    try {
      const deleted = await db.paymentTransaction.destroy({
        where: { id: req.params.id },
      });
      if (!deleted)
        return res
          .status(404)
          .json({ message: "PaymentTransaction not found" });
      res
        .status(200)
        .json({ message: "PaymentTransaction deleted successfully" });
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
module.exports = paymentTransactionCtrl;
