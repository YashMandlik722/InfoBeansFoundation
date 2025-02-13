import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Gallerycomponent/Galleryimages.css";

const Galleryimages = () => {
  const [file, setfile] = useState(null);
  const [image, setimage] = useState([]);

  const handler = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setfile(selectedFile);
      console.log("Selected file:", selectedFile);
    } else {
      console.log("No file selected.");
    }
  };

  const handleUpload = async () => {
    // if (!file) {
    //   alert("Please select an image first!");
    //   return;
    // }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const result = await axios.post(
        "http://localhost:3001/gallery/imagepost",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      console.log("Upload Success:", result.data);

      fetchImages();
    } catch (err) {
      console.error("Error uploading image:", err);
    }
  };

  const fetchImages = async () => {
    try {
      const res = await axios.get("http://localhost:3001/gallery/getimage");
      setimage(res.data.images);

    } catch (err) {
      console.error("Error fetching images:", err);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (<>
 
    
      <div className="d-flex " style={{float:"right"}}>
     <input type="file" onChange={handler} style={{height:"45px" , width:"110px"}} className="mt-2"/>
      <button  onClick={handleUpload} className="btn btn-primary m-2">Upload</button>
      </div><br/>


      <div>
      <h2 style={{marginLeft:"180px"}} className="text-danger">Our Gallery</h2>

      <div className="gallery-container m-3">
  {image.length > 0 ? (
    image.map((img, index) => (
      <img
        key={index}
        src={`http://localhost:3001${img.picture}`} 
        alt="Uploaded"
        width="300px"
        height="300px"
        className="gallery-image m-2"
        onError={(e) => console.error("Image Load Error:", e)} 
      />
    ))
  ) : (
    <p>No images uploaded yet.</p>
  )}
</div>
</div>
    

</>);
};

export default Galleryimages;
