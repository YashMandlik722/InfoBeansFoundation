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
    dob:{
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
        enum: ['unmarried',"married"]
    },
    qualification:{
        type: String,
        require:true
    },
    annualIncome:{
        type: String,
        require:true,
        enum: ["0-3L","3-6L","6-10L","10-15L","More Than 15 LPA"]
    },
    preferredCity:{
        type: String,
        require:true,
        enum: ["Indore","Pune"]
    },
    reference:{
        type: String,
        require:true,
        enum: ["LinkedIn","Instagram","Facebook","Print Media", "Other"]
    },
    passportPhoto:{
        type: String,
        require:true,
    },
    marksheet12:{
        type: String,
        require:true
    },
    latestMarksheet:{
        type: String,
        require:true
    },
    aadhar:{
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
        default:"DummyId"
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