const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
const userSchema = new Schema({
    email: {
        type: String,
        required: true
    }
})
userSchema.plugin(passportLocalMongoose);
// plugin will implement username, salting,hashing, password ;
// will add many methods in model. these method will help to to do task like username,password
module.exports = mongoose.model("User",userSchema)