import mongoose from "mongoose";
import { user } from "./userModel.js";

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