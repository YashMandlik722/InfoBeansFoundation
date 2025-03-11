import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring"; // For animation
import './Partners.css'; // Import CSS file

const Partners = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Setting visibility to true after the component mounts to trigger animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300); // Optional delay before the animation starts
    return () => clearTimeout(timer);
  }, []);

  const partners = [
    {
      id: 1,
      name: "TechCorp",
      description: "Leading company in tech innovation providing solutions to help us grow.",
      imageUrl: "../Images/photo11.jpg",
      website: "https://techcorp.com",
    },
    {
      id: 2,
      name: "GreenEarth",
      description: "Environmental organization working towards working toward sustainability.",
      imageUrl: "../Images/photo11.jpg",
      website: "https://greenearth.org",
    },
    {
      id: 3,
      name: "EduPartners",
      description: "Educational non-profit helping with working toward funding and programs.",
      imageUrl: "../Images/photo11.jpg",
      website: "https://edupartners.org",
    },
    
    // Add more partners as needed
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">Our Partners</h2>
      <div className="row">
        {partners.map((partner) => (
          <div key={partner.id} className={`col-md-6 col-lg-3 mb-4 partner-card`}>
            <animated.div
              className={`partner-container ${isVisible ? "fadeIn" : ""}`}
              style={{ animationDelay: `${0.1 * partner.id}s` }}
            >
              <div className="partner-logo">
                <img
                  src={partner.imageUrl}
                  alt={partner.name}
                  className="img-fluid rounded partner-img"
                />
              </div>
              <div className="partner-info">
                <h3>{partner.name}</h3>
                <p>{partner.description}</p>
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-info mt-2"
                >
                  Visit Website
                </a>
              </div>
            </animated.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
