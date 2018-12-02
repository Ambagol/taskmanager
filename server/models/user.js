var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    name: {type:String, required:true, default:""},
    email: {type:String, required:true, unique: true},
    password: {type:String, required:true},
    cpassword: {type:String, required:true}
})




mongoose.model('User', UserSchema); 
