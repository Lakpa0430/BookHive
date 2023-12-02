const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const bycrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type : String,
        required: true,
        trim: true,
    },
    email: {
        type : String,
        required: true,
        trim: true,
    },
    skills: {
        type : [],
        required: true,
        trim: true,
    },
    password: {
        type : String,
        required: true,
        trim: true,
    },
    cpassword: {
        type: String,
        required: true,
      },
    tokens : [
        {
            token: {
                type : String,
                required :true,
            }
        }
    ]
})

userSchema.pre('save',async function (next) {
    console.log("i am insite the psw");
    if(this.isModified('password')){
        this.password =await bycrypt.hash(this.password,12);
        this.cpassword =await bycrypt.hash(this.cpassword,12);
    }
    next();
});

userSchema.methods.generateAuthToken = async function () {
    try{
        let token1 = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token: token1});
        await this.save();
        return token1;
    } catch (err){
        console.log(err);
    }
}

const User = mongoose.model("User", userSchema);
module.exports = User;