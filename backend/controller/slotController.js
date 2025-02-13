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
    return res.status(200).json({Message:"Slot Updated"})

    } catch (err) {
        console.log("Error In slotController's assignSlot");
        console.log(err);
        res.status(500).json({ error: "Internal Server Error In slotController's assignSlot" })
    }
} 

