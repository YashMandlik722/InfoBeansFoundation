import mongoose from "mongoose";

const staffSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true
    },
    name: {
        type: String,
        require: true
    },
    
    DOB: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        require: true,
        enum: ["male", "female"]
    },
    contact: {
        type: String,
        require: true
    },
    maritalStatus: {
        type: String,
        require: true,
        enum: ['single', "married"]
    },
    qualification: {
        type: String,
        require: true
    },
    salary: {
        type: Number,
        require: true
    },
    photo_url: {
        type: String,
        require: true,
    },
    aadhar_url: {
        type: String,
        require: true
    },
    role: {
        type: String,
        enum: ["management","trainer"]
    }
})

export const staff = mongoose.model("staff", staffSchema)