const mongoose = require("mongoose");
const MsgSchema = mongoose.Schema({
    originId: {
        type: String,
        required: true
    },
    destinationId: {
        type: String,
        required: true
    },
    messageId: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    content: {
        type: String,
        required: true
    },
    isRead: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model("Message", MsgSchema);
