const messageRepository = require("../db/repositories/MessageRepository");

const messageService = {
  async retrieveAllMessages(req) {
    const messages = await messageRepository.getAll(req);
    return messages;
  },

  async retrieveSingleMessage(req) {
    return await messageRepository.getMessageById(req);
  },

  async createNewMesage(req) {
    const message = await messageRepository.createMessage(req);
    return message;
  },

  async updateMessageRead(req) {
    return await messageRepository.updateRead(req);
  },
};

module.exports = messageService;
