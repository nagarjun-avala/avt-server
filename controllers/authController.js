const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { db } = require("../lib/db");
const SECRET_KEY = "your-secret-key"; // Replace with your actual secret key

const authController = {
  login: async (req, res) => {
    try {
      const { username, password } = req.body;
      const admin = await db.admin.findUnique({ where: { username } });
      if (!admin) {
        return res.status(404).json({ error: "Admin not found" });
      }
      const isPasswordValid = await bcrypt.compare(password, admin.password);
      if (!isPasswordValid) {
        return res.status(401).json({ error: "Invalid credentials" });
      }
      const token = jwt.sign({ id: admin.id, role: admin.roleId }, SECRET_KEY, {
        expiresIn: "1h",
      });
      return res.status(200).json({ token, admin });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  register: async (req, res) => {
    try {
      const { username, password, fullname, email, mobile, roleId } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const newAdmin = await db.admin.create({
        data: {
          username,
          password: hashedPassword,
          fullname,
          email,
          mobile,
          roleId,
        },
      });
      return res.status(201).json(newAdmin);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = authController;
