import mongoose from "mongoose";

const FormSchema = new mongoose.Schema({
    userId: { type: String, required: true }, 
    password: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    age: { type: Number, required: true },
    phoneNo: { type: String, required: true },
    complaintType: { type: String, required: true },
    electricityIssue: { type: String },
    waterIssue: { type: String },
    contaminationLevel: { type: String },
    waterImage: { type: Buffer },
    roadIssue: { type: String },
    location: { type: String },
    severity: { type: String },
    roadImage: { type: Buffer },
    healthIssue: { type: String },
    symptoms: { type: String },
    medicalHistory: { type: String },
    medications: { type: String },
    allergies: { type: String },
    issue: { type: String },
    wasteType: { type: String },
    wasteDescription: { type: String },
    dateNoticed: { type: Date },
    recurring: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    isDone: Boolean
});
export const Form = mongoose.model('Form', FormSchema);