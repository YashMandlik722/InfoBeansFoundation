import { result } from "../model/resultModel.js";
import convertExcelToJson from "convert-excel-to-json";

export const myresult = async (req, res) => {
    
    res.end("result router work")
} 

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