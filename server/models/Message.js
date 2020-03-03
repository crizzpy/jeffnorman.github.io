const mongoose = require("mongoose");
const uuid = require('uuid')
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
        required: true,
        default: uuid.v4()
    },
    date: {
        type: Date,
        required: true,
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
