import React, { useEffect, useState } from "react";
import './InfoAbout.css'; // Import custom CSS styles

const InfoAbout = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Set visibility to true after the component mounts to trigger animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300); // Optional delay before the animation starts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container-xxl py-3">
      <div className="container">
        <div className="bg-light rounded">
          <div className="row g-0 align-items-start"> {/* Ensure the content is aligned to the top */}
            {/* Left Column (Image Section) */}
            <div className={`col-lg-6 img-col ${isVisible ? "fadeIn" : ""}`}>
              <div className="position-relative h-100">
                <img
                  src="../Images/photo1.jpg"  // Corrected path for images in the public folder
                  alt="Call to Action"
                  className="position-absolute w-100 h-100 rounded"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            {/* Right Column (Content Section) */}
            <div className={`col-lg-6 content-col ${isVisible ? "fadeIn" : ""}`}>
              <div className="h-100 d-flex flex-column justify-content-start p-5"> {/* Ensure content starts at the top */}
                <h1 className="mb-4">Become A Teacher</h1>
                <p className="mb-2">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo magna dolore erat amet.
                </p>
                <a className="btn btn-danger bg-danger py-3 px-5 mt-5" href="#">
                  About More <i className="fa fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoAbout;
