import sendMail from "../helper/sendMail.js";
import { registration } from "../model/registrationModel.js"
import { result } from "../model/resultModel.js";

//For Generating Roll Number
const generateRollNumber = async (courseType) => {
    const currentYear = new Date().getFullYear();

    // Get the last inserted student with the highest roll number
    let lastStudent = await registration.findOne({ rollNo: new RegExp(`^${currentYear}${courseType}`) })
        .sort({ rollNo: -1 }) // Sort by descending roll number
        .exec();

    let uniqueNum = 1; // Default for first student

    if (lastStudent && lastStudent.rollNo) {
        // Extract last unique number
        const match = lastStudent.rollNo.match(/\d+$/); // Extract trailing digits
        if (match) {
            uniqueNum = parseInt(match[0]) + 1;
        }
    }

    let newRollNumber;
    let exists = true;

    // Keep generating roll numbers until a unique one is found
    while (exists) {
        newRollNumber = `${currentYear}${courseType}${String(uniqueNum).padStart(4, "0")}`;

        // Check if roll number already exists
        exists = await registration.exists({ rollNo: newRollNumber });

        if (exists) {
            uniqueNum++; // Increment and try again
        }
    }

    return newRollNumber;
};

//Taking Registration
export const registerForExam = async (request, response) => {

    try {
        const { courseType } = request.body;
        const rollNo = await generateRollNumber(courseType);

        const baseURL = "http://localhost:3001/";
        // console.log(request);
        
        Object.values(request.files).forEach(fileArray => {
            fileArray.forEach(file => {
                file.fullPath = `${baseURL}${file.destination.split("/")[1]+ "/"+file.destination.split("/")[2]}/${file.filename}`;
            });
        });


        request.body.aadhar = request.files.aadhar[0].fullPath;
        request.body.fatherAadhar = request.files.fatherAadhar[0].fullPath;
        request.body.marksheet12 = request.files.marksheet12[0].fullPath;
        request.body.latestMarksheet = request.files.latestMarksheet[0].fullPath;
        request.body.passportPhoto = request.files.passportPhoto[0].fullPath;
        request.body.incomeCertificate = request.files.incomeCertificate[0].fullPath;
        request.body.samagraId = request.files.samagraId[0].fullPath;
        request.body.rollNo = rollNo;


        const reg = await registration.create(request.body);

        // sendMail(reg.email,
        //     "Application Recieved!",
        //     `Dear ${reg.name},\n\nYour Application For ITEP coarse has been registered!\nStay tuned for further updates. Together, we can make a positive impact!\n\nBest Regards\nInfoBeans Foundation`
        // );

        return response.status(201).json({ message: "Registration working" , reg});
    } catch (err) {
        console.log("Error In courseRegistrationController's registerForExam");
        console.log(err);
        response.status(500).json({ error: "Internal Server Error In courseRegistrationController's registerForExam" })
    }
};

//Getting List of Total Registration (Admin)
export const getRegList = async (request, response) => {
    try {
        const list = await registration.find();
        if (list.length) {
            return response.status(200).json({ Message: "List of registraitions found Successfully", list });
        }
        else {
            console.log("No registration found (In courseRegistrationController's getRegList)");
            return response.status(404).json({ error: "No user Found" });
        }
    } catch (err) {
        console.log("Error In courseRegistrationController's getUserList");
        console.log(err);
        response.status(500).json({ error: "Internal Server Error In courseRegistrationController's getUserList" })
    }
}

//Getting Registration By User Id (Admin)
export const getRegByUserId = async (request, response, next) => {
    let id = request.params.id;
    registration.findOne({ userID: id })
        .then(result => {
            if (result) {
                return response.status(200).json({ message: "Registraion Details Found Successfully", result });
            } else {
                return response.status(404).json({ error: "Registration Detail not found" });
            }
        })
        .catch(err => {
            console.log("Error In courseRegistrationController's getRegByUserId");
            console.log(err);
            response.status(500).json({ error: "Internal Server Error In courseRegistrationController's getRegByUserId" })
        });
}

//Marking Application Verified (Admin)
export const markVerified = async (req, res) => {
    try {
        let id = req.params.id;
        const regInfo = await registration.findOne({ userID: id });
        if (!regInfo) {
            return res.status(404).json({ error: "Registration Detail not found" });
        } else {
            const update = await registration.findByIdAndUpdate(id, { isVerified: "Verified" });
            const resultInitialised = await result.create({ userID: regInfo.userID, rollNo: regInfo.rollNo ,courseType:regInfo.courseType })
            // sendMail(regInfo.email,
            //     "Profile Verified!",
            //     `Dear ${regInfo.name},\n\nYour Application For ITEP coarse has been verified!\nStay tuned for further updates. Together, we can make a positive impact!\n\nBest Regards\nInfoBeans Foundation`
            // );
            return res.status(200).json({ Message: "Marked Verified" });
        }
    } catch (err) {
        console.log("Error In courseRegistrationController's markVerified");
        console.log(err);
        res.status(500).json({ error: "Internal Server Error In courseRegistrationController's markVerified" })
    }
}

//Rejecting Application (Admin)
export const rejectApplication = async (req, res) => {
    try {
        let { reason } = req.body;
        let id = req.params.id;
        const regInfo = await registration.findOne({ userID: id });
        if (!regInfo) {
            return response.status(404).json({ error: "Registration Detail not found" });
        } else {
            const update = await registration.findByIdAndUpdate(id, { isVerified: "Rejected" });
            // sendMail(regInfo.email,
            //     "Better Luck Next Time!",
            //     `Dear ${regInfo.name},\n\nYour Application For ITEP coarse has been rejected!\nDue to - ${reason}.\n\nBest Regards\nInfoBeans Foundation`
            // );
            return res.status(200).json({ Message: "Application Rejected" });
        }
    } catch (err) {
        console.log("Error In courseRegistrationController's rejectApplication");
        console.log(err);
        response.status(500).json({ error: "Internal Server Error In courseRegistrationController's rejectApplication" })
    }
}

//Finding List By Course Type (ITEP/BREP)
export const regForPerticularCourse = async (req,res) => {
    try {
        let courseType  = req.params.courseType;
        const list = await registration.find({ courseType });
        if (!list) {
            return response.status(404).json({ error: "Registration Detail not found" });
        } else {
            return res.status(200).json({ Message: "Registration List Found",list });
        }
    } catch (err) {
        console.log("Error In courseRegistrationController's regForPerticularCourse");
        console.log(err);
        response.status(500).json({ error: "Internal Server Error In courseRegistrationController's regForPerticularCourse" })
    }
}

