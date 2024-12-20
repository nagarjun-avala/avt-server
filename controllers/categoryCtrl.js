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

const categoryCtrl = {
  create: async (req, res) => {
    try {
      let errors = [];
      const {
        name,
        slug,
        parentId,
        level,
        displayOrder,
        isActive,
        description,
        createdBy,
        updatedBy,
      } = req.body;

      // Validate name
      if (!name || typeof name !== "string" || name.trim().length === 0) {
        errors.push({
          field: "name",
          message: "Category name is required and must be a non-empty string.",
        });
      }

      // Check for unique name
      const existingCategory = await prisma.category.findFirst({
        where: { name },
      });

      if (existingCategory) {
        errors.push({
          field: "name",
          message: `A category with the name "${name}" already exists.`,
        });
      }

      // Validate parentId if provided
      if (parentId) {
        const parentCategory = await prisma.category.findUnique({
          where: { id: parentId },
        });

        if (!parentCategory) {
          errors.push({
            field: "parentId",
            message: `Parent category with ID "${parentId}" does not exist.`,
          });
        }
      }

      // If there are errors, return a 400 response
      if (errors.length > 0) {
        return res.status(400).json({
          status: "error",
          errors,
        });
      }

      // Create the new category
      const newCategory = await prisma.category.create({
        data: {
          name,
          slug,
          parentId: parentId || null,
          level,
          displayOrder,
          isActive,
          description,
          createdBy,
          updatedBy,
        },
      });

      res.status(201).json({
        status: "success",
        message: "Category created successfully",
        category: newCategory,
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
  getAllCategories: async (req, res) => {
    try {
      const categories = await prisma.category.findMany({
        include: {
          parent: true,
          children: true,
        },
      });

      res.status(200).json({
        status: "success",
        categories,
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

module.exports = categoryCtrl;
