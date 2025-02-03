import React from "react";
import { useSpring, animated } from "react-spring"; 
import "../components/placements.css"; 

function Placements() {
  const riseUpAnimation = useSpring({
    transform: "translateY(10px)", 
    opacity: 1,
    from: { transform: "translateY(200px)", opacity: 5 }, 
    config: { tension: 50, friction: 10 }, 
  });

  return (
    <div className="unique-container">
      <div className="row">
        {/* Left Side Content */}
        <div className="col-lg-6 left-content">
          <h2 className="content-title">Unique Design</h2>
          <p className="content-description">
            Discover the power of a unique layout. A perfect blend of creativity
            and modern design, combined with smooth animations.
          </p>
          <button className="btn bg-danger">Learn More</button>
        </div>

        {/* Right Side Circles */}
        <div className="col-lg-6 right-content">
          <animated.div style={riseUpAnimation} className="circle-container">
            {/* Large Circle */}
            <div className="circle large">
              <img
                className="circle-image"
                src="../Images/photo11.jpg"
                alt="Large Circle"
              />
            </div>

            {/* Small Circles */}
            <div className="circle small left">
              <img
                className="circle-image"
                src="../Images/place1.jpg"
                alt="Small Circle 1"
              />
            </div>
            <div className="circle small right">
              <img
                className="circle-image"
                src="../Images/place1.jpg"
                alt="Small Circle 2"
              />
            </div>
          </animated.div>
        </div>
      </div>
    </div>
  );
}

export default Placements;
