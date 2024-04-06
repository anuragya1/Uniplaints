import mongoose from "mongoose";

const FormSchema = new mongoose.Schema({
    userId:String,
    password:String,
    name: String,
    phoneNo: Number,
    description:String,
    email:String,
    Age:Number,
     
    isDone: Boolean
});
export const Form = mongoose.model('Form', FormSchema);