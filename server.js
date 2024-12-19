require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");

/* ROUTE IMPORTS */
const indexRoute = require("./routes/indexRoute");

/* CONFIGURATIONS */
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use("/api", indexRoute);

const port = process.env.PORT || 2000;
app.listen(port, () => {
  console.log({
    port,
    link: `http://localhost:${port}/api`,
    testRoutes: [`http://localhost:${port}/api/test`],
  });
});
