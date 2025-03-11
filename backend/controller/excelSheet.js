import mongoose from "mongoose";
import { registration } from "../model/registrationModel.js";
import ExcelJS from "exceljs";
import { result } from "../model/resultModel.js";

export const generateExcel = async (req, res) => {
    try {
        const { phase, courseType } = req.body;
        let written_result = "Pending";
        let interview_result = "Pending";
        let houseVisit_result = "Pending";
        if (phase == "Written Done") {
            written_result = "Passed";
        } else if (phase == "Interview Done") {
            written_result = "Passed";
            interview_result = "Passed";
        } else if (phase == "House Visit Done") {
            written_result = "Passed";
            interview_result = "Passed";
            houseVisit_result = "Passed";
        } else {
            if (!phase == "Applied")
                return res.status(400).json({ error: "Bad Request | Invalid Phase" });
        }


        const resultList = await result.find({ phase, courseType});
        if (!resultList.length)
            return res.status(404).json({ error: "No result Found(In excelSheet's generateExcel)" });
        let registrationList = [];
        // let x = await registration.find({userID:resultList[0].userID});
        // console.log(x);
        for (let resultObj of resultList) {
            let obj = await registration.find({ userID: resultObj.userID }, { name: 1, rollNo: 1, qualification: 1, contact: 1 })
            // console.log(obj[0])
            registrationList.push(obj[0]);
        }
        registrationList.forEach((obj,index)=>{
            obj.count = index + 1;
            obj.attendance = "";
            obj.result = "";
            obj.set = "";
            obj.english = "";
            obj.hindi = "";
            obj.gk = "";
            obj.math = "";
            obj.total = "";
            obj.percentage = "";
        })

        const excelData = registrationList.sort((a, b) => a.rollNo.localeCompare(b.rollNo));

        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet("Students");

        // Define Columns
        worksheet.columns = [
            { header: "S. No.", key: "count", width: 7 },
            { header: "Roll No.", key: "rollNo", width: 15 },
            { header: "Name", key: "name", width: 20 },
            { header: "Mobile No.", key: "contact", width: 15 },
            { header: "Education", key: "qualification", width: 25 },
            { header: "Attendance", key: "attendence", width: 15 },
            { header: "Pass/Fail", key: "result", width: 15 },
            { header: "Set", key: "set", width: 10 },
            { header: "English", key: "english", width: 10 },
            { header: "Hindi", key: "hindi", width: 10 },
            { header: "G.K.", key: "gk", width: 10 },
            { header: "Math", key: "math", width: 10 },
            { header: "Total", key: "total", width: 10 },
            { header: "Percentage", key: "percentage", width: 10 },
        ];

        worksheet.addRows(excelData);

        worksheet.getRow(1).eachCell((cell) => {
            cell.font = { bold: true }; 
            cell.alignment = { horizontal: "center", vertical: "middle" };
        });

        res.setHeader(
            "Content-Type",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        );
        res.setHeader("Content-Disposition", "attachment; filename=students.xlsx");

        await workbook.xlsx.write(res);
        res.end();

    } catch (err) {
        console.log("Error In excelSheet's generateExcel");
        console.log(err);
        res.status(500).json({ error: "Internal Server Error In excelSheet's generateExcel" })
    }
}