import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    contact: {
        type: String,
        unique : true
    },
    isAdmin :{
        type:  Boolean,
        default: false
    }
})

export const user = mongoose.model("user", userSchema);
