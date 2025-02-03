import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import '../components/Achivement.css'; // For custom styling

const Achievement = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Achievements data
  const achievements = [
    {
      id: 1,
      year: 2021,
      title: "Best Foundation Award",
      description: "Awarded for exceptional contribution to education.",
      image: "../Images/photo13.jpg", // Replace with your award image
    },
    {
      id: 2,
      year: 2020,
      title: "Community Impact",
      description: "Recognized for positive community impact and outreach.",
      image: "../Images/photo13.jpg", // Replace with your award image
    },
    {
      id: 3,
      year: 2019,
      title: "Innovation in Education",
      description: "Awarded for innovation in educational initiatives.",
      image: "../Images/photo13.jpg", // Replace with your award image
    },
    {
      id: 4,
      year: 2021,
      title: "Innovation in Education",
      description: "Awarded for innovation in educational initiatives.",
      image: "../Images/photo13.jpg", // Replace with your award image
    },
    {
      id: 5,
      year: 2022,
      title: "Innovation in Education",
      description: "Awarded for innovation in educational initiatives.",
      image: "../Images/photo13.jpg", // Replace with your award image
    },
  ];

  // IntersectionObserver to detect visibility
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("achievements-section");
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.8) {
          setIsVisible(true);
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Animation for fade-in effect
  const fadeIn = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(50px)",
    config: { tension: 170, friction: 26 },
  });

  return (
    <div id="achievements-section" className="achievements-container py-5">
      <h2 className="text-center mb-4">Our Achievements</h2>
      <div className="achievements-grid">
        {achievements.map((achievement) => (
          <animated.div key={achievement.id} style={fadeIn} className="achievement-item">
            <div className="achievement-icon">
              <img
                src={achievement.image}
                alt={`Achievement ${achievement.id}`}
                className="achievement-image"
              />
            </div>
            <div className="achievement-details">
              <h3>{achievement.title}</h3>
              <p><strong>{achievement.year}</strong></p>
              <p>{achievement.description}</p>
            </div>
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default Achievement;
