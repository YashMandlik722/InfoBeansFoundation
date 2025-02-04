import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../components/AboutImages.css"; // Assuming you have a separate CSS for styling

const AboutImages = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true, // Enable auto sliding
    autoplaySpeed: 3000, // Delay between slides in milliseconds (3 seconds)
    centerMode: true, // This allows the overlap effect
    centerPadding: "40px", // Adjust the overlap width
  };

  return (
    <div className="carousel-container">
      <Slider {...sliderSettings}>
        <div className="carousel-item">
          <div className="image-container">
            <img
              className="carousel-image"
              src="../Images/photo1.jpg"
              alt="Carousel 1"
            />
          </div>
        </div>
        <div className="carousel-item">
          <div className="image-container">
            <img
              className="carousel-image"
              src="../Images/photo2.jpg"
              alt="Carousel 2"
            />
          </div>
        </div>
        <div className="carousel-item">
          <div className="image-container">
            <img
              className="carousel-image"
              src="../Images/photo3.jpg"
              alt="Carousel 3"
            />
          </div>
        </div>
        <div className="carousel-item">
          <div className="image-container">
            <img
              className="carousel-image"
              src="../Images/photo4.jpg"
              alt="Carousel 4"
            />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default AboutImages;
