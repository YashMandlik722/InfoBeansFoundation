import mongoose from "mongoose";
import { user } from "./userModel.js";
import { slot } from "./slotModel.js";

const resultSchema = new mongoose.Schema({
    rollNo: {
        type: String,
        require: true,
        unique: true
    },
    userID: {
        type : mongoose.Schema.Types.ObjectId,
        ref: user,
        require: true
    },
    courseType:{
        type: String,
        require:true,
        enum:["ITEP", "BREP"]
    },
    isSlotAssigned:{
        type : Boolean,
        default : false
    },
    slotId:{
        type : mongoose.Schema.Types.ObjectId,
        ref : slot,
        default : null
    },
    phase:{
        type: String,
        enum: ["Applied", "Written Done", "Interview Done", "House Visit Done"],
        default : "Applied" 
    },
    written_result: {
        type: String,
        enum: ["Pending", "Absent", "Passed", "Failed"],
        default : "Pending"
    },
    interview_result: {
        type: String,
        enum: ["Pending", "Absent", "Passed", "Failed"],
        default : "Pending"
    },
    houseVisit_result: {
        type: String,
        enum: ["Pending", "Absent", "Passed", "Failed"],
        default : "Pending"
    }
})
export const result = mongoose.model("result", resultSchema)