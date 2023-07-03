let mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  ObjectId = mongoose.Types.ObjectId;

let MessageSchema = Schema({
  subject: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: false,
  },
  is_read: {
    type: Boolean,
    required: true,
    default: false,
  },
});
let MessageModel = mongoose.model("message", MessageSchema);
module.exports = MessageModel;
