import Image from "../model/galleryModel.js"; 


export const imagepost = async (req, res, next) => {
  try {
    if (req.file) {
      const picture = `http://localhost:3001/galleryImg/${req.file.filename}`; 
      const newImage = new Image({ picture }); 
      await newImage.save();
      res.status(201).json({ message: "Image inserted successfully", picture });
    } else {
      res.status(400).json({ message: "Bad request: No file uploaded" });
    }
  } catch (err) {
    console.error("Error inserting image:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};



export const getimage = async (req, res, next) => {
  try {
    const images = await Image.find();
    res.status(200).json({ message: "Fetched all images successfully", images });
  } catch (err) {
    console.error("Error fetching images:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
