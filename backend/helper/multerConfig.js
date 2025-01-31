import multer from "multer";

const registrationDoc = multer.diskStorage({
    destination: (req,file,callback)=>{
        if(file.fieldname == "studentAadhar"  || file.fieldname == "fatherAadhar"){
            callback(null, "public/userDoc/aadhar")
        }
        else if(file.fieldname == "marksheet12"  || file.fieldname == "marksheetLatest"){
            callback(null, "public/userDoc/marksheet")
        }
        else if(file.fieldname == "pic" ){
            callback(null, "public/userDoc/photo")
        }
        else if(file.fieldname == "incomeCertificate" ){
            callback(null, "public/userDoc/incomeCertificate")
        }
        else if(file.fieldname == "samagraId" ){
            callback(null, "public/userDoc/samagra")
        }
    },
    filename: (req,file,callback)=>{
        const uniqueName = Date.now() + file.originalname;
        callback(null, uniqueName)
    }
})

export const uploadRegistrationDoc = multer({storage: registrationDoc});

const staffDoc = multer.diskStorage({
    destination: (req,file,callback)=>{
        if(file.fieldname == "aadhar"){
            callback(null, "public/staffDoc/aadhar")
        }
        else if(file.fieldname == "pic" ){
            callback(null, "public/staffDoc/photo")
        }
        
    },
    filename: (req,file,callback)=>{
        const uniqueName = Date.now() + file.originalname;
        callback(null, uniqueName)
    }
})


