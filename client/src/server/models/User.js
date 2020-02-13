const mongoose = require('mongoose')
const UserSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true
    },
    profileImg: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now()
    },
    email: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('User', UserSchema)