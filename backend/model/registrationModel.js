import mongoose from "mongoose";
import { user } from "./userModel.js";

const registrationSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: user,
        unique:true,
        require:true
    },
    rollNo: {
        type: String,
        require: true,
        unique: true
    },
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
    pic:{
        type: String,
        require:true,
    },
    marksheet12:{
        type: String,
        require:true
    },
    marksheetLatest:{
        type: String,
        require:true
    },
    studentAadhar:{
        type: String,
        require:true
    },
    fatherAadhar:{
        type: String,
        require:true
    },
    samagraId:{
        type: String,
        require:true
    },
    incomeCertificate:{
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
    },
    isVerified:{
        type: String,
        enum:["Pending", "Verified","Rejected"],
        default:"Pending"
    }
})
export const registration = mongoose.model("registration",registrationSchema) 