import mongoose from "mongoose";

const slotSchema = new mongoose.Schema({
    location:{
        type:String,
        require:true
    },
    date:{
        type:String,
        require:true
    },
    reportingTime:{
        type:String,
        require:true
    },
    type:{
        type:String,
        require:true,
        enum:["ITEP","BREP"]
    },
    capacity:{
        type:Number,
        require:true
    },
    isActive: {
        type: Boolean,
        default: true
    }
})

export const slot = mongoose.model("slot", slotSchema);
