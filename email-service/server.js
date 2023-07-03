require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const { BASE_PATH } = require("./src/config/server");
const routes = require("./src/routes");
let app = express();

app.use(bodyParser.json({ type: "application/json" }));
app.use(bodyParser.urlencoded({ extended: true }));

const cors = require("cors");
app.use(cors());

app.use(BASE_PATH, routes);
app.use(
  BASE_PATH + "doc",
  swaggerUi.serve,
  swaggerUi.setup("./swagger_output.json")
);

app.use((err, req, res, next) => {
  if (err) {
    res.status(400).json({
      message: "wrong request data!",
    });
  } else {
    next();
  }
});

app.use(
  cors({
    origin: "*",
  })
);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

module.exports = app;
