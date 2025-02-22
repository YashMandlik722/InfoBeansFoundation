import { slot } from "../model/slotModel.js";
import { result } from "../model/resultModel.js";

export const assignSlot = async (req,res) => {
    try {
    const {location,date,reportingTime,type,capacity,examPhase} = req.body;
    
    let phase = "";
    if(examPhase == "Written"){
        phase = "Applied";
    }else if(examPhase == "Interview"){
        phase = "Written Done"
    }else{
        console.log("Only Written and Interview should be in examPhase");
        return res.status(400).json({error : "Bad Request | Invalid exam type"})
    }    

    const allResults = await result.find({phase:phase,isSlotAssigned:false,courseType:  type})//2025ITEP0002

    let studentsForSlot = allResults.slice(0,capacity);
    

    let slotCreated = await slot.create({location,date,type,reportingTime,capacity});

    studentsForSlot.map(async (student)=>{
        const updatedSlot = await result.updateOne({},{isSlotAssigned:true,slotId:slotCreated._id})
        console.log(updatedSlot);
        
        if(!updatedSlot){
            return res.status(400).send("Error in inserting data")
        }
    })
    return res.status(200).json({Message:"Slot Updated",slot:slotCreated})

    } catch (err) {
        console.log("Error In slotController's assignSlot");
        console.log(err);
        res.status(500).json({ error: "Internal Server Error In slotController's assignSlot" })
    }
} 
export const updateSlots = async(req,res,next)=>{
    try {
        let id = req.body["_id"];
        delete req.body["_id"];
        await slot.findByIdAndUpdate(id,{$set: req.body})
        next()
    } catch (error) {
        res.statis(500).json({msg: "Internal server error"})
    }
}

export const getActiveSlot = async(req,res)=>{
    try {
        const slots = await slot.find({isActive: true}); 
        res.status(200).json({msg: "All active slots",slots})
    } catch (error) {
        res.statis(500).json({msg: "Internal server error"})
    }
}

export const getAllSlot = async(req,res)=>{
    try {
        const slots = await slot.find(); 
        res.status(200).json({msg: "All active slots",slots})
    } catch (error) {
        res.statis(500).json({msg: "Internal server error"})
    }
}

export const deletSlots = async(req,res,next)=>{
    try {
        const result = await slot.findByIdAndUpdate(req.body.id, {$set: {isActive: false}}, {new: true});
        next();
    } catch (error) {
        res.status(500).json({msg: "Internal server error"})
    }
}