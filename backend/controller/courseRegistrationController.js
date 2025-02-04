import { registration } from "../model/registrationModel.js"


export const registerForExam = async (request, response) => {

    const baseURL = "http://localhost:3001/";

    Object.values(request.files).forEach(fileArray => {
        fileArray.forEach(file => {
            file.fullPath = `${baseURL}${file.destination}/${file.filename}`;
        });
    });
    

    request.body.studentAadhar = request.files.studentAadhar[0].fullPath;
    request.body.fatherAadhar = request.files.fatherAadhar[0].fullPath;
    request.body.marksheet12 = request.files.marksheet12[0].fullPath;
    request.body.marksheetLatest = request.files.marksheetLatest[0].fullPath;
    request.body.pic = request.files.pic[0].fullPath;
    request.body.incomeCertificate = request.files.incomeCertificate[0].fullPath;
    request.body.samagraId = request.files.samagraId[0].fullPath;


    const reg = await registration.create(request.body);
    
    // sendMail(reg.email,
    //     "Application Recieved!",
    //     `Dear ${reg.name},\n\nYour Application For ITEP coarse has been registered!\nStay tuned for further updates. Together, we can make a positive impact!\n\nBest Regards\nInfoBeans Foundation`
    // );

    return response.status(201).json({ message: "Registration working", reg });
};

export const getRegList = async (request, response) => {
    try {
        const list = await registration.find();
        if (list.length) {
            return response.status(200).json({ Message: "List of registraitions found Successfully",list });
        }
        else {
            console.log("No registration found (In courseRegistrationController's getRegList)");
            return response.status(404).json({ error: "No user Found" });
        }
    } catch (err) {
        console.log("Error In usercontroller's getUserList");
        console.log(err);
        response.status(500).json({ error: "Internal Server Error In usercontroller's getUserList" })
    }
}

export const getRegByUserId = async (request, response, next) => {
    let id = request.params.id;
    registration.findOne({ userID: id })
        .then(result => {
            if (result) {
                return response.status(200).json({ message: "Registraion Details Found Successfully",result });
            } else {
                return response.status(404).json({ error: "Registration Detail not found" });
            }
        })
        .catch(err => {
        console.log("Error In usercontroller's getRegByUserId");
        console.log(err);
        response.status(500).json({ error: "Internal Server Error In usercontroller's getRegByUserId" })
        });
}

export const markVerified = async (req,res) => {
    try {
        let id = req.params.id;
        const regInfo = await registration.findOne({userID:id});
        if(!regInfo){
            return response.status(404).json({ error: "Registration Detail not found" });
        }else{
            const update = await registration.findByIdAndUpdate(id,{isVerified:"Verified"});
            // sendMail(regInfo.email,
            //     "Profile Verified!",
            //     `Dear ${regInfo.name},\n\nYour Application For ITEP coarse has been verified!\nStay tuned for further updates. Together, we can make a positive impact!\n\nBest Regards\nInfoBeans Foundation`
            // );
            return res.status(200).json({Message:"Marked Verified"});
        }
    } catch (err) {
        console.log("Error In usercontroller's markVerified");
        console.log(err);
        response.status(500).json({ error: "Internal Server Error In usercontroller's markVerified" })
    }
}

export const rejectApplication = async (req,res) => {
    try {
        let {reason} = req.body;
        let id = req.params.id;
        const regInfo = await registration.findOne({userID:id});
        if(!regInfo){
            return response.status(404).json({ error: "Registration Detail not found" });
        }else{
            const update = await registration.findByIdAndUpdate(id,{isVerified:"Rejected"});
            // sendMail(regInfo.email,
            //     "Better Luck Next Time!",
            //     `Dear ${regInfo.name},\n\nYour Application For ITEP coarse has been rejected!\nDue to - ${reason}.\n\nBest Regards\nInfoBeans Foundation`
            // );
            return res.status(200).json({Message:"Application Rejected"});
        }
    } catch (err) {
        console.log("Error In usercontroller's rejectApplication");
        console.log(err);
        response.status(500).json({ error: "Internal Server Error In usercontroller's rejectApplication" })
    }
}















