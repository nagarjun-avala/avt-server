const { db } = require("../lib/db");
const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token)
      return res.status(401).json({
        status: "error",
        message: "Unathorized",
      });

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    if (decoded)
      return res.status(401).json({
        status: "error",
        message: "Please login now!",
      });

    const admin = await db.admin.findUnique({
      where: {
        id: decoded.id,
      },
      include: {
        role: true,
        password: false,
      },
    });

    req.admin = admin;
    next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};

export default auth;
