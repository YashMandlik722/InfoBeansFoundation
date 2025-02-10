import mongoose, {Schema } from "mongoose";

const galleryImage=new mongoose.Schema({
    imageUrl:
    {
        type :String,
        require:true
    },
    createAt:{
      type:Date,
      default:Date.now
    }
});

 export const image=mongoose.model("Image" , galleryImage);
