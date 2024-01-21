const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim : true,
        minlength: 8
    },
    cpassword: {
        type: password,
        required: true,
        trim : true
    }
})
const user = mongoose.model('User',userModel);