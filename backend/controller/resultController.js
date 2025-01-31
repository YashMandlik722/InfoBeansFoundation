import { result } from "../model/resultModel.js";
import convertExcelToJson from "convert-excel-to-json";


export const bulkResult = async(req,res)=>{
    const excelData = req.file.buffer;
    const json = convertExcelToJson({
        source: excelData,
        header: { rows: 1 },
        columnToKey: {
            A: 'rollNo',
            B: 'userID',
            C: 'written_result',
            D: 'interview_result',
            E: 'houseVisit_result'
        }
    }).Sheet1;
    
    result.insertMany(json)
    .then(() =>{
        return res.status(200).json({ Message: "Result Uploaded In DB"});
    })   
    .catch(err => res.status(400).send('Error inserting data: ' + err));
}

export const getResultById = async (request, response) => {
    let id = request.params.id;
    result.findOne({ _id: id })
    .then(result => {
        if (result) {
            return response.status(200).json({ message: result });
        } else {
            return response.status(404).json({ error: "Result not found" });
        }
    })
    .catch(err => {
        console.log("Error In resultController's getResultById");
        console.log(err);
        res.status(500).json({ error: "Internal Server Error In resultController's getResultById" })
    });
} 

export const getResultList = async (request, response) => {
    try{
        const list = await result.find();
        if (list.length) {
            return response.status(200).json({ Message: list });
        }
        else {
            console.log("No result found (In resultController's getResultList)");
            return response.status(404).json({ error: "No result Found" });
        }
    }catch(err){
        console.log("Error In resultController's getResultList");
        console.log(err);
        response.status(500).json({ error: "Internal Server Error In resultController's getResultList" })
    }
} 