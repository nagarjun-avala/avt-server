const { db } = require("../lib/db");

const { validateSupplier } = require("../helpers/validator");

const supplierCtrl = {
  createSupplier: async (req, res) => {
    try {
      const { name, mobile, email, website, addressId, isActive } = req.body;

      const errors = validateSupplier(name, mobile, email, website);

      if (errors.length > 0) {
        return res.status(400).json({
          status: "error",
          message: "Validation errors",
          errors,
        });
      }

      const newSupplier = await db.supplier.create({
        data: {
          name,
          mobile,
          email,
          website,
          addressId,
          isActive,
        },
      });
      res.status(201).json({
        status: "success",
        message: "Supplier created successfully",
        supplier: newSupplier,
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
  getAllSuppliers: async (req, res) => {
    try {
      const suppliers = await db.supplier.findAll({
        include: {
          products: true,
        },
      });

      res.status(200).json({
        status: "success",
        suppliers,
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
  getSupplierById: async (req, res) => {
    try {
      const data = await db.supplier.findByPk(req.params.id);
      if (!data) return res.status(404).json({ message: "Supplier not found" });
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
  updateSupplier: async (req, res) => {
    try {
      const [updated] = await db.supplier.update(req.body, {
        where: { id: req.params.id },
      });
      if (!updated)
        return res.status(404).json({ message: "Supplier not found" });
      res.status(200).json({ message: "Supplier updated successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: "error",
        message: "Internal Server Error",
        error: error.message,
      });
    }
  },
  deleteSupplier: async (req, res) => {
    try {
      const deleted = await db.supplier.destroy({
        where: { id: req.params.id },
      });
      if (!deleted)
        return res.status(404).json({ message: "Supplier not found" });
      res.status(200).json({ message: "Supplier deleted successfully" });
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

module.exports = supplierCtrl;
