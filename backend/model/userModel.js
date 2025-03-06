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
//{
// name: 'Vishal',
// password: '$2a$10$qvFl06w7Jc4p8j90HgLAXuWmbN1fw/aRmwLMPnRANc7zVh.xiRvrW',(Hashed keep passwerd - 12345 for every user but in hashed)
// email: 'v@gmail.com',
// contact: '1231231234',
// isAdmin: false
// }

export const user = mongoose.model("user", userSchema);
