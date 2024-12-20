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
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

/* ROUTEs & its IMPORTS */
app.use("/api", require("./routes/authRoutes"));
app.use("/api/role", require("./routes/roleRoutes"));
app.use("/api/test", require("./routes/testRoute"));

const port = process.env.PORT || 2000;
app.listen(port, () => {
  console.log({
    port,
    link: `http://localhost:${port}/api`,
    testRoutes: [`http://localhost:${port}/api/test`],
  });
});
