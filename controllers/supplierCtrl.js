const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const { validateSupplier } = require("../helpers/validator");

const supplierCtrl = {
  create: async (req, res) => {
    try {
      let errors = [];
      const { name, mobile, email, website, addressId, isActive } = req.body;
      errors = validateSupplier(name, mobile, email, website);

      if (errors.length > 0) {
        return res.status(400).json({
          status: "error",
          message: "Validation errors",
          errors,
        });
      }

      const newSupplier = await prisma.supplier.create({
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
      const suppliers = await prisma.supplier.findMany({
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
};

module.exports = supplierCtrl;
