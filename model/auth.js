const mongoose = require("mongoose");

const obj = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role : {
        type: String,
        required: true
    }
})

const userDataModel = mongoose.model("user", obj);
module.exports = userDataModel