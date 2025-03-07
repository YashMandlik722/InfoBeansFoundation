import mongoose from "mongoose";
import { registration } from "../model/registrationModel.js";
import { result } from "../model/resultModel.js";
import convertExcelToJson from "convert-excel-to-json";

//For Testing
export const bulkResult = async (req, res) => {
    const excelData = req.file.buffer;
    const json = convertExcelToJson({
        source: excelData,
        header: { rows: 1 },
        columnToKey: {
            A: 'rollNo',
            B: 'written_result',
            C: 'interview_result',
            D: 'houseVisit_result'
        }
    }).Sheet1;


    const resultData = json.map((data) => {
        const reg = registration.findOne({ rollno: data.rollNo });
        data.userID = reg.userID;
    })

    result.insertMany(resultData)
        .then(() => {
            return res.status(200).json({ Message: "Result Uploaded In DB" });
        })
        .catch(err => res.status(400).send('Error inserting data: ' + err));
}

//Getting Result by Id (User)
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

//Getting All Results (Admin)
export const getResultList = async (request, response) => {
    try {
        const list = await result.find();
        if (list.length) {
            return response.status(200).json({ message: list });
        }
        else {
            console.log("No result found (In resultController's getResultList)");
            return response.status(404).json({ error: "No result Found" });
        }
    } catch (err) {
        console.log("Error In resultController's getResultList");
        console.log(err);
        response.status(500).json({ error: "Internal Server Error In resultController's getResultList" })
    }
}

//Marking Results (Admin)
export const resultMarking = async (req, res) => {
    try {
        const excelData = req.file.buffer;
        const json = convertExcelToJson({
            source: excelData,
            header: { rows: 1 },
            columnToKey: {
                A: 'rollNo',
                B: 'result'
            }
        }).Sheet1;

        // console.log(json)
        let phase = req.body.phase;
        
        for (let obj of json) {
            let objResult = await result.findOne({ rollNo: obj.rollNo, phase: req.body.phase });
            if (!objResult)
                return res.status(400).json({ error: `Bad Request | One of the student does not exist` })
        }
                                    
        let resultType;
        if (phase == "Applied") {
            resultType = "written_result";
            phase = "Written Done";
        }else if (phase == "Written Done"){
            resultType = "interview_result";
            phase = "Interview Done";
        } 
        else if (phase == "Interview Done"){
            resultType = "houseVisit_result";
            phase = "House Visit Done";
        }else{
            return res.status(400).json({ error: `Bad Request | Incorrect Phase` });
        }

        json.map(async (student) => {
            const updatedResult = await result.updateOne({ rollNo: student.rollNo }, { [resultType]: student.result, phase: phase, isSlotAssigned: false });
            if (!updatedResult) {
                return res.status(400).send("Error in inserting data")
            }
        })


        return res.status(200).json({ message: "Result Updated" })

    } catch (err) {
        console.log("Error In resultController's resultMarking");
        console.log(err);
        res.status(500).json({ error: "Internal Server Error In resultController's resultMarking" })
    }
}

//Getting Results By User Id (User)
export const getResultByUserId = async (request, response, next) => {
    let id = request.params.id;
    result.findOne({ userID: new mongoose.Types.ObjectId(id) })
        .then(result => {
            if (result) {
                return response.status(200).json({ message: "Result Details Found Successfully", result });
            } else {
                return response.status(404).json({ error: "Result Detail not found" });
            }
        })
        .catch(err => {
            console.log("Error In resultController's getResultByUserId");
            console.log(err);
            res.status(500).json({ error: "Internal Server Error In resultController's getResultByUserId" })
        });
}

// Getting Result By Slot Id (Admin)
export const resultBySlotId = async (req, res) => {
    try {
        const data = await result.find({ slotId: req.params.slotId });
        res.status(200).json({ "operation": true, "result": data })

    } catch (err) {
        console.log(err);
        res.status(500).json({ "operation": false, "message": "Internal Server Error" })
    }
}
