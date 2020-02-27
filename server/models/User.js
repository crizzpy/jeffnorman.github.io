const mongoose = require('mongoose')
const UserSchema = mongoose.Schema({
    id: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    hasAdmin:{
        type: Boolean,
        required: true,
        default: false
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
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
        required: false
    },
    role: {
        type: String,
        required: false
    },
    tasks: {
        type: Object,
        required: false
    },
    aboutMe: {
        type: String,
        required: false
    }

})

module.exports = mongoose.model('User', UserSchema)