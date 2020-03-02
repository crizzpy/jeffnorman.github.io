const mongoose = require("mongoose");
const PostSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  userFirstName: {
    type: String,
    required: true
  },
  userLastName: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  adminsOnly: {
    type: Boolean,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  },
  content: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Post", PostSchema);
