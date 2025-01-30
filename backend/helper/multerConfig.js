import multer from "multer";

const registrationDoc = multer.diskStorage({
    destination: (req,file,callback)=>{
        callback(null, "public/")
    },
    filename: (req,file,callback)=>{
        const uniqueName = Date.now() + file.originalname
    }
})