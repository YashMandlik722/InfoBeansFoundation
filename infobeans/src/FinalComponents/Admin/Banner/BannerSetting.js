import axios from "axios";
import { useEffect, useRef, useState } from "react";
import API from "../../../API/API";
import "./BannerSetting.css";
import { UploadToCloudinary } from "../../../hooks/cloudinaryConfig";

function BannerSetting() {
  const [bannerList, setBannerList] = useState([]);
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetchBanners();
  }, []);

  const fetchBanners = async () => {
    try {
      const response = await axios.get(API.GET_ALL_BANNER);
      setBannerList(response.data.bannerData);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleBannerStatus = async (banner, index) => {
    try {
      const response = await axios.patch(API.UPDATE_BANNER_STATUS, {
        id: banner._id,
        status: !banner.status,
      });
      const updatedList = [...bannerList];
      updatedList[index] = response.data.updateBanner;
      setBannerList(updatedList);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      //For Multer
      //   let formInput = new FormData();
      //   formInput.append("image", image);
      //   formInput.append("imageTitle",imageTitle.current.value)
      //   formInput.append("imageDescription",imageDescription.current.value)
      // await axios.post(API.ADD_BANNER, formInput,{ headers: { "Content-Type": "multipart/form-data" } });
        const img_url = await UploadToCloudinary(image);
        let obj = {
          image_url:img_url,
          imageTitle:imageTitle.current.value,
          imageDescription:imageDescription.current.value
        }
        // console.log(obj);
      await axios.post(API.ADD_BANNER, obj);
      fetchBanners();
    } catch (error) {
      console.error("Error adding banner:", error);
    }
  };

  const deleteBanner = async (banner)=>{
    let status = window.confirm("Do You Want To Delete - "+banner.imageTitle);
    if(status){
      try {
        let response = await axios.post(API.DELETE_BANNER, {id:banner._id});
        fetchBanners();
      } catch (error) {
        console.log(error);
        alert("Something Went Wrong");
      }
    }
  }
  

  let imageTitle = useRef()
  let imageDescription = useRef()

  return (
    <div className="banner-container">
      <h2 className="banner-title">Manage Banners</h2>

      <div className="banner-layout">
        {/* Banner Display Section */}
        <div className="banner-list">
          {bannerList?.map((banner, index) => (
            <div className="banner-card" key={index}>
              <img className="banner-image" src={banner.image_url} alt="Banner" />
              <div className="banner-details">
                <h3>{banner.imageTitle}</h3>
                <p>{banner.imageDescription}</p>
                <button
                  className={`banner-btn m-2 ${banner.status ? "banner-btn-deactivate" : "banner-btn-activate"}`}
                  onClick={() => toggleBannerStatus(banner, index)}
                >
                  {banner.status ? "Deactivate" : "Activate"}
                </button>
                <button onClick={() => deleteBanner(banner)} className="banner-btn banner-btn-deactivate m-2">Delete</button>
              </div>
            </div>
          ))}
        </div>

        {/* Banner Form Section */}
        <div className="banner-form-wrapper h-100">
          <div className="banner-form">
            <h4>Add New Banner</h4>
            <form onSubmit={handleFormSubmit}>
              <div className="banner-form-group">
                <label>Choose Image</label>
                <input
                  type="file"
                  name="image"
                  className="banner-input"
                  placeholder="Enter image URL"
                  onChange={handleFileChange}
                  required
                />
              </div>
              <div className="banner-form-group">
                <label>Image Title</label>
                <input
                  type="text"
                  name="imageTitle"
                  className="banner-input"
                  placeholder="Enter Image Title"
                ref={imageTitle}
                  required
                />
              </div>
              <div className="banner-form-group">
                <label>Image Description</label>
                <textarea
                  name="imageDescription"
                  className="banner-input"
                  placeholder="Enter image description"
                ref={imageDescription}
                  required
                />
              </div>
              <button type="submit" className="banner-submit-btn">
                Add Banner
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerSetting;
