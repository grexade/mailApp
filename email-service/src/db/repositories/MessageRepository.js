const MessageModel = require("../models/Message");
let mongoose = require("mongoose");

class MessageRepository {
  /**
   * get all messages
   */
  static async getAll(req) {
    const messages = await MessageModel.find();
    return messages;
  }

  /**
   * get a message by id
   */
  static async getMessageById(req) {
    let { id } = req.params;
    if (id != null) {
      id = new mongoose.Types.ObjectId(id);
    }
    const message = await MessageModel.findOne({
      _id: id,
    });
    return message;
  }

  /**
   * create new message
   */
  static async createMessage(req) {
    const { subject, content } = req.body;
    const data = {
      subject,
      content,
    };
    const newMessage = new MessageModel(data);
    return await newMessage.save();
  }

  /**
   * update read
   */
  static async updateRead(req) {
    const { id } = req.params;
    let query = {};
    if (id) {
      query["_id"] = new mongoose.Types.ObjectId(id);
    }
    const result = await MessageModel.updateOne(query, {
      $set: {
        is_read: true,
      },
    });
    return {
      result: result,
      query: query,
    };
  }
}

module.exports = MessageRepository;
