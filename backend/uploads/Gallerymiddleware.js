import multer from "multer";
import path from "path";


const storage=multer.diskStorage({
  destination:function(req , file ,cb){
      cb(null , '/uploads/Gallerymiddleware')
  },
  filename :function(req , file, cb){
    
    cb(null , Date.now()+'-'+ file.originalname)
  }
})

const filefilter= (req, res, next )=>{
    const allowedTypes="/jpg | jpg | png/";
    const extname=allowedTypes.test(path.extname(file.originalname).toLowerCase())
    const mimeType=allowedTypes.test(file.mimeType);
}

 export const upload = multer({storage:storage , filefilter:filefilter})

