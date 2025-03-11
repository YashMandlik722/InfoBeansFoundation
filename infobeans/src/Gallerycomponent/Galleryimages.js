import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Gallerycomponent/Galleryimages.css";
import { useDispatch, useSelector } from "react-redux";

const Galleryimages = () => {

  const { isLoggedIn, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const [file, setfile] = useState(null);
  const [image, setimage] = useState([]);

  const handler = (event) => {
    const selectedFile = event.target.files[0];
    console.log(selectedFile);
    if (selectedFile)
      setfile(selectedFile);

  };

  const handleUpload = async () => {
    if (!file) {
      window.alert("Please select an image first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const result = await axios.post(
        "http://localhost:3001/gallery/imagepost",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

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


    {user.isAdmin && <div className="d-flex " style={{ float: "right" }}>
      <input type="file" onChange={handler} style={{ height: "45px", width: "250px" }} className="mt-2" />
      <button onClick={handleUpload} className="btn btn-primary m-2">Upload</button>
    </div>}
    
    {user.isAdmin && <br />}


    <div>
      <h2 style={{ marginLeft: "180px" }} className="text-danger">Our Gallery</h2>

      <div className="gallery-container m-3">
        {image.length > 0 ? (
          image.map((img, index) => (
            <img
              key={index}
              src={`${img.picture}`}
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
