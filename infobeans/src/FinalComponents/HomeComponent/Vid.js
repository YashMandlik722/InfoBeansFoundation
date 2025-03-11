import React, { useEffect } from "react";
import "aos/dist/aos.css"; // Import the AOS CSS
import AOS from "aos"; // Import AOS library
import "./Vid.css"; // Your custom CSS for styling

const ContainerWithMedia = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS animations
  }, []);

  return (
    <div className="container py-5">
      <div className="row align-items-start"> {/* Changed align-items-center to align-items-start */}
        {/* Left side Content */}
        <div
          className="col-lg-6 col-md-12 text-start"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <h2 className="mb-5 text-dark">About Our Foundation</h2>
          <p className="mb-4 text-dark">
            Welcome to our school! We offer the best education for your child, with a focus on innovation and creativity. Our experienced teachers ensure that every child receives personal attention and grows to their fullest potential.
          </p>
          <ul className="text-dark">
            <li>Qualified and Caring Teachers</li>
            <li>State-of-the-art Facilities</li>
            <li>Safe and Nurturing Environment</li>
          </ul>
        </div>

        {/* Right side Media (Image or Video) */}
        <div
          className="col-lg-6 col-md-12 text-center"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <div className="media-container">
            {/* You can replace this with a Video or any media */}
            {/* <img
              className="img-fluid rounded shadow"
              src="../Images/school-image.jpg"
              alt="School Building"
            /> */}
            {/* You can use a video as well */}
            <div className="video-container">
              <iframe
                style={{ width: "600px", height: "500px" }}
                src="https://www.youtube.com/embed/xgBOYjtSHNQ" // Embed URL for YouTube
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="img-fluid rounded shadow"
                title="YouTube Video"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerWithMedia;
