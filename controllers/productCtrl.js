const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const prisma = new PrismaClient();

const {
  validateUsername,
  validateFullname,
  validateEmail,
  validateMobile,
  validatePassword,
  validateRoleId,
} = require("../helpers/validator");

const productCtrl = {
  create: async (req, res) => {
    try {
      let errors = [];
      
      res.status(200).json({
        status: "success",
        message: "Product created successfully",
        info:"This is a placeholder response,The Route is undre development",
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
      const products = await prisma.product.findMany({
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
  }
};

module.exports = productCtrl;
