import { image } from "../model/galleryModel.js"



export const imagepost =async (response , request, next )=>{
    
  try{
    if(request.file){
      const picture=`/upload/${request.file.filename}`;
      const newimage=new image({picture}) ;
      await newimage.save()
      response.status(201).json({message:"Image insert..." , picture})
    }
    else{
      response.status(401).json({message:"Bed request..."})
    }
    }
    catch(err){
        response.status(500).json({err:"Internal Error ..."})
    }
}

export const getimage= async (request , response , next )=>{
  try{
    const images=await image.find()
    response.status(201).json({message:"Get All Iamges...." , images})
  }
  catch(err){
    response.status(500).json({err:"Internal Error..."})
  }
}