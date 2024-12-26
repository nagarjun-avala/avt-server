import { validatorCreateRole } from "../helpers/validator";
import { db } from "../lib/db";

const roleCtrl = {
  createRole: async (req, res) => {
    try {
      const {
        code,
        label,
        short,
        isActive,
        type,
        priority,
        canDelete,
        canUpdate,
        activatedAt,
        description,
        createdById,
      } = req.body;
      const errors = validatorCreateRole(
        code,
        label,
        short,
        isActive,
        type,
        priority,
        canDelete,
        canUpdate,
        activatedAt,
        description,
        createdById
      );

      if (errors.length > 0)
        return res.status(400).json({
          status: "error",
          errors,
        });
      const existingRole = await db.role.findFirst({
        where: {
          code,
        },
      });

      if (existingRole)
        return res.status(400).json({
          status: "error",
          errors: {
            field: "code",
            message: "Role with access code alredy exists",
          },
        });

      const newRole = await db.role.create({
        data: {
          code,
          label,
          short,
          isActive,
          type,
          priority,
          canDelete,
          canUpdate,
          activatedAt,
          description,
          createdById,
        },
      });
      res.status(201).json({
        status: "success",
        message: "Role Created successfully",
        role,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: "error",
        message: "Internal Server Error",
        error,
      });
    }
  },
  getAllRoles: async (req, res) => {
    try {
      const roles = await db.role.findAll();
      return res.status(200).json({
        status: "success",
        message: "Roles data fetched successfully",
        data: {
          len: roles.length,
          roles,
        },
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: "error",
        message: "Internal Server Error",
        error,
      });
    }
  },
  getRoleById: async (req, res) => {
    try {
      const data = await db.role.findByPk(req.params.id);
      if (!data) return res.status(404).json({ message: "Role not found" });
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: "error",
        message: "Internal Server Error",
        error,
      });
    }
  },
  updateRole: async (req, res) => {
    try {
      const [updated] = await db.role.update(req.body, {
        where: { id: req.params.id },
      });
      if (!updated) return res.status(404).json({ message: "Role not found" });
      res.status(200).json({ message: "Role updated successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: "error",
        message: "Internal Server Error",
        error,
      });
    }
  },
  deleteRole: async (req, res) => {
    try {
      const deleted = await db.role.destroy({
        where: { id: req.params.id },
      });
      if (!deleted) return res.status(404).json({ message: "Role not found" });
      res.status(200).json({ message: "Role deleted successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: "error",
        message: "Internal Server Error",
        error,
      });
    }
  },
};
module.exports = roleCtrl;
