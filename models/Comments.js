const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const commentsSchema = new Schema({
  comment: String,
  receiver: String,
  sender: { type: Schema.Types.ObjectId, ref: "User" },
  receiverUsername: String,
  senderUsername: String,
  roomGenerated: Boolean
});

const Comments = mongoose.model('Comments', commentsSchema);
module.exports = Comments;
