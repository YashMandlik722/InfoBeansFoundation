import React, { useState, useEffect } from "react";
import './Contentslide.css';

const contentData = [
  { id: 1, text: "Welcome to our site! We are happy to have you.", imageUrl: "../Images/photo10.jpg" },
  { id: 2, text: "Explore our latest products and offers. You won’t want to miss out!", imageUrl: "../Images/photo13.jpg" },
  { id: 3, text: "Don't miss our exclusive offers just for you!", imageUrl: "../Images/photo4.jpg" },
  // Add more content items here
];

const ContentSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Change content every 3 seconds
  useEffect(() => {
    const contentInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentData.length);
    }, 3000); // Change content every 3 seconds

    return () => {
      clearInterval(contentInterval);
    };
  }, []);

  return (
    <div className="content-slider">
      <div className="slider-container">
        {/* Background image with semi-transparent overlay */}
        <div className="content-background" style={{ backgroundImage: `url(${contentData[currentIndex].imageUrl})` }}>
          <div className="overlay"></div>
        </div>

        <div className="text-content">
          {/* Marquee Text */}
          <div className="text-marquee">
            <div className="marquee-text text-light  py-5">
              You are excited to join InfoBeans Foundation!
            </div>
          </div>

          {/* Content Text */}
          <div className="content-wrapper">
            <p className="content-text">{contentData[currentIndex].text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSlider;
