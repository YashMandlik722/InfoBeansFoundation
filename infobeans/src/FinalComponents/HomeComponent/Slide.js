import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slide.css";
import axios from "axios";
import API from "../../API/API";
import img2 from "./image copy 2.png"
import img from "./image.png"

const Slide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [banner, setBanner] = useState([])
  // Sample content data for text slider
  const contentData = [
    { id: 1, text: "Welcome to our site! We are happy to have you.", },
    { id: 2, text: "Explore our latest products and offers. You won’t want to miss out!", },
    { id: 3, text: "Don't miss our exclusive offers just for you!", },
  ];

  useEffect(() => {
    loadBanner();
  }, [])

  const loadBanner = async () => {
    try {
      const response = await axios.get(API.GET_ALL_BANNER);
      setBanner(response.data.bannerData)
    } catch (error) {
      console.log(error)
    }

  }

  // Change content every 3 seconds
  useEffect(() => {
    const contentInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentData.length);
    }, 3000); // Change content every 3 seconds

    return () => {
      clearInterval(contentInterval);
    };
  }, [contentData.length]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container-fluid p-0 bg-danger">
      <div className="row align-items-center" style={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left Side Content */}
        <div className="col-md-6 text-light" style={{ flex: 1, padding: "20px" }}>
          {/* Marquee Text */}
          <div className="text-marquee">
            <div className="marquee-text text-light p-2" style={{ fontSize: "30px" }}>
              You are excited to join InfoBeans Foundation!
            </div>
          </div>

          {/* Content Text */}
          <div className="content-wrapper">
            <p className="content-text" style={{ textAlign: "center" }}>{contentData[currentIndex].text}</p>
          </div>
        </div>

        {/* Right Side Carousel */}
        <div className="col-md-6" style={{ flex: 1, padding: "20px" }}>
          <Slider {...sliderSettings}>
            {/* Static Images  */}
            
            
            {banner?.filter((data) => data.status)?.map((data, index) => (<div key={index}>
              {/* {console.log(data)} */}
              <div className="position-relative">
                <img
                  src={data.image_url}
                  alt="Slide 1"
                  className="img-fluid slider-image"
                />
              </div>
            </div>))}
            {/* Permanent Images  */}
            <div >
              <div className="position-relative">
                <img
                  src={img}
                  alt="Slide 1"
                  className="img-fluid slider-image"
                />
              </div>
            </div>
            <div >
              <div className="position-relative">
                <img
                  src={img2}
                  alt="Slide 1"
                  className="img-fluid slider-image"
                />
              </div>
            </div>
            
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Slide;
