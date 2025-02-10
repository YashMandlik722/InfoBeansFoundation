import express from "express"
import { imagepost , getimage } from "../controller/galleryController.js";
import { upload } from "../uploads/Gallerymiddleware.js";
const Gallery=express.Router()


Gallery.get("/getimage" , getimage)
Gallery.post("/imagepost" , upload.single("image") , imagepost)
export default Gallery ;