import mongoose from "mongoose";

const loginSchema = new mongoose.Schema({
    user: String,
    password: String,
    isDone: Boolean
});
export const Login = mongoose.model('Login', loginSchema);
