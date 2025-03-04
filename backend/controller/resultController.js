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
            return response.status(200).json({ Message: list });
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
        console.log(req.file)
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
        const phase = req.body.phase;

        // not getting this 
        const existingResults = await result.find();
        if(existingResults.length == 0) return res.send({"opration": false, "message": "No Exiting result found.."});

        // const obj = {
        //     resultType: ""
        // }
        // cannot read the properties of undefined means not getting the existingResults
        // now the logic is changed so we need to make the changes accordingly.
        
        // not required
        /*let phase = existingResults[0].phase;
        if (phase === "Applied") {
            phase = "Witten Done";
            obj.resultType = "written_result"
        } else if (phase === "Written Done") {
            phase = "Interview Done";
            obj.resultType = "interview_result"
        } else if (phase === "Interview Done") {
            phase = "House Visit Done";
            obj.resultType = "houseVisit_result"
        }*/

        for (let i = 0; i < json.length; i++) {
            json[i].phase = req.body.phase;
            for (let j = 0; j < existingResults.length; j++) {
                if (json[i].rollNo === existingResults[j].rollNo) {
                    break;
                } else if (j == existingResults.length - 1 && !json[i].rollNo === existingResults[j].rollNo) {
                    return res.status(400).send("Error in inserting data in" + json[i].rollNo)
                }
            }
        }

        let resultType ;
        if(phase=="Written Done") resultType = "written_result";
        else if(phase == "Interview Done") resultType = "interview_result";
        else if(phase == "House Visit Done") resultType = "houseVisit_result";

        json.map(async (student) => {
            const updatedResult = await result.updateOne({ rollNo: student.rollNo }, { [resultType]: student.result, phase: phase, isSlotAssigned: false });
            if (!updatedResult) {
                return res.status(400).send("Error in inserting data")
            }
        })


        return res.status(200).json({ Message: "Result Updated" })

    } catch (err) {
        console.log("Error In resultController's resultMarking");
        console.log(err);
        res.status(500).json({ error: "Internal Server Error In resultController's resultMarking" })
    }
}

//Getting Results By User Id (User)
export const getResultByUserId = async (request, response, next) => {
    let id = request.params.id;
    result.findOne({ userID: new mongoose.Types.ObjectId(id)})
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
