import mongoose from "mongoose";
import { user } from "./userModel.js";

const registrationSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: user,
        require:true
    },
    rollno: String,
    email:{
        type: String,
        require:true,
        unique: true
    },
    name:{
        type: String,
        require:true
    },
    fatherName:{
        type: String,
        require:true
    },
    DOB:{
        type: String,
        require:true
    },
    localAddress:{
        type: String,
        require:true
    },
    permanentAddress:{
        type: String,
        require:true
    },
    gender:{
        type: String,
        require:true,
        enum: ["male","female"]
    },
    contact:{
        type: String,
        require:true
    },
    maritalStatus:{
        type: String,
        require:true,
        enum: ['single',"married"]
    },
    qualification:{
        type: String,
        require:true
    },
    AnnualIncome:{
        type: Number,
        require:true,
        enum: [1,2,3]
    },
    preferredCity:{
        type: String,
        require:true,
        enum: ["Indore","Pune"]
    },
    referrence:{
        type: String,
        require:true,
        enum: ["LinkedIn","Instagram","FaceBook","Print media", "Other"]
    },
    photo_url:{
        type: String,
        require:true,
    },
    marksheet_12_url:{
        type: String,
        require:true
    },
    marksheet_latest_url:{
        type: String,
        require:true
    },
    aadhar_url:{
        type: String,
        require:true
    },
    fatherAadhar_url:{
        type: String,
        require:true
    },
    samagraId_url:{
        type: String,
        require:true
    },
    incomeCertificate_url:{
        type: String,
        require:true
    },
    transactionId:{
        type: String,
        require:true,
        unique: true
    },
    courseType:{
        type: String,
        require:true,
        enum:["ITEP", "BREP"]
    }
})
export const registration = mongoose.model("registration",registrationSchema) 