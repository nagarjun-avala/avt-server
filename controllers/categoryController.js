const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const generateSlug = (name) => name.replace(/\s+/g, "-").toLowerCase();

const categoryController = {
  create: async (req, res) => {
    try {
      const { name, parentId, level, displayOrder, isActive, description } = req.body;
      if (!name) {
        return res.status(400).json({ error: "Name is required" });
      }
      const slug = generateSlug(name);
      const newCategory = await prisma.category.create({
        data: { name, slug, parentId, level, displayOrder, isActive, description },
      });
      return res.status(201).json(newCategory);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  getAll: async (req, res) => {
    try {
      const { page = 1, limit = 10 } = req.query;
      const categories = await prisma.category.findMany({
        skip: (page - 1) * limit,
        take: parseInt(limit),
        include: { parent: true, children: true },
      });
      const total = await prisma.category.count();
      return res.status(200).json({ data: categories, total });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const category = await prisma.category.findUnique({ where: { id } });
      if (!category) {
        return res.status(404).json({ error: "Category not found" });
      }
      return res.status(200).json(category);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, parentId, level, displayOrder, isActive, description } = req.body;
      const updatedCategory = await prisma.category.update({
        where: { id },
        data: { name, parentId, level, displayOrder, isActive, description },
      });
      return res.status(200).json(updatedCategory);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      await prisma.category.delete({ where: { id } });
      return res.status(200).json({ message: "Category deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = categoryController;
