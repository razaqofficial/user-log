const mongoose = require('mongoose');

//create user schema
const UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
});

module.exports = mongoose.model('users', UserSchema);