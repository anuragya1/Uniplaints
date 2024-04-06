import mongoose, { Mongoose } from "mongoose";
const signInSchema=new mongoose.Schema({
    userName:String,
    email:String,
    password:String
});
export const Signin = mongoose.model('SignInDetails', signInSchema);