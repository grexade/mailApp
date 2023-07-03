const routes = require("express").Router();
const messageRoute = require("./messageRoutes");

// use routes
routes.use("/messages", messageRoute);

module.exports = routes;
