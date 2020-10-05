const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const commentsSchema = new Schema({
  comment: String,
  receiver: { type: Schema.Types.ObjectId, ref: "User" },
  sender: { type: Schema.Types.ObjectId, ref: "User" }
});

const Comments = mongoose.model('Comments', commentsSchema);
module.exports = Comments;
