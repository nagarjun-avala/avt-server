require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

/* CONFIGURATIONS */
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/* ROUTEs & its IMPORTS */
app.use("/api", require("./routes/authRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));
app.use("/api/role", require("./routes/roleRoutes"));
app.use("/api/category", require("./routes/categoryRoutes"));
app.use("/api/supplier", require("./routes/supplierRoutes"));
app.use("/api/product", require("./routes/productRoutes"));

/** TEST ROUTE */
app.use("/api/test", require("./routes/testRoute"));
app.get("/set-cookie", (req, res) => {
  // Set a cookie with HttpOnly flag
  res.cookie("tokenr", "Example cookie", {
    httpOnly: true, // Prevents JavaScript from accessing the cookie
    secure: false, // Ensures cookie is sent only over HTTPS (use false for local dev if not using HTTPS)
    path: "/get-cookie",
    sameSite: "lax", // Prevents cross-site request forgery
    maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
  });
  res.send("Cookie set successfully!");
});
app.get("/get-cookie", (req, res) => {
  // Set a cookie with HttpOnly flag
  const token = req.cookies.tokenr;
  if (token) {
    res.send(`Cookie value: ${token}`);
  } else {
    res.status(401).send("No token cookie found!");
  }
});

// edited

const port = process.env.PORT || 2000;
app.listen(port, () => {
  console.log(
    `Server is running on port ${port}`
    //   {
    //   port,
    //   link: `http://localhost:${port}/api`,
    //   testRoutes: [`http://localhost:${port}/api/test`],
    // }
  );
});
