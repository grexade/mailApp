const messageRoute = require("express").Router();
const messageController = require("../controllers/MessageController");

messageRoute.get("/", messageController.getMessages);
messageRoute.get("/:id", messageController.getMessage);
messageRoute.post("/create", messageController.createMessage);
messageRoute.post("/:id", messageController.updateMessage);

module.exports = messageRoute;
