import mongoose from "mongoose";
const feed=new mongoose.Schema({
    userId:String,
    name:String,
    email:String,
    message:String
})
export const feedback=mongoose.model('UserFeedbacks',feed);