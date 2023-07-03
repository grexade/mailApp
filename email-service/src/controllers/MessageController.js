const messageService = require("../services/MessageService");

const MessageController = {
  getMessages: async (req, res) => {
    try {
      res.header("Access-Control-Allow-Origin", "*");
      const messages = await messageService.retrieveAllMessages(req);
      return res.status(200).send(messages);
    } catch (error) {
      return res.status(400).send({
        message: `Something went wrong: ${JSON.stringify(error)} (${
          error.message
        })`,
      });
    }
  },
  getMessage: async (req, res) => {
    try {

      const message = await messageService.retrieveSingleMessage(req);
      return res.status(200).send(message);
    } catch (error) {
      return res.status(400).send({
        message: `Something went wrong: ${JSON.stringify(error)} (${
          error.message
        })`,
      });
    }
  },

  createMessage: async (req, res) => {
    try {
      const message = await messageService.createNewMesage(req);
      return res.status(200).send(message);
    } catch (error) {
      return res.status(400).send({
        message: `Something went wrong: ${JSON.stringify(error)} (${
          error.message
        })`,
      });
    }
  },

  updateMessage: async (req, res) => {
    try {
      const message = await messageService.updateMessageRead(req);
      return res.status(200).send(message);
    } catch (error) {
      return res.status(400).send({
        message: `Something went wrong: ${JSON.stringify(error)} (${
          error.message
        })`,
      });
    }
  },
};

module.exports = MessageController;
