import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring'; // Import react-spring for animation
import './Center.css'; // Import custom CSS file

const Center = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Setting visibility to true after the component mounts to trigger animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300); // Optional delay before the animation starts
    return () => clearTimeout(timer);
  }, []);

  // Sample data for 4 centers
  const centers = [
    {
      id: 1,
      name: 'New York Center',
      description: 'Our New  center is focused community development and education.',
      image: '/images/photo1.jpg', // Corrected image path
      mapLink: 'https://www.google.com/maps?q=New+York+Center',
    },
    {
      id: 2,
      name: 'Los Angeles Center',
      description: 'Located in Los Angeles, this center works on technology-based learning.',
      image: '/images/photo1.jpg', // Corrected image path
      mapLink: 'https://www.google.com/maps?q=Los+Angeles+Center',
    },
    {
      id: 3,
      name: 'Chicago Center',
      description: 'Chicago Center provides job training programs and social urban  urban  support services.',
      image: '/images/photo1.jpg', // Corrected image path
      mapLink: 'https://www.google.com/maps?q=Chicago+Center',
    },
    {
      id: 4,
      name: 'San Francisco Center',
      description: 'Focusing on environmental sustainability and urban  urban  urban  farming.',
      image: '/images/photo1.jpg', // Corrected image path
      mapLink: 'https://www.google.com/maps?q=San+Francisco+Center',
    },
  ];

  // Spring animation for fadeIn effect
  const fadeIn = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    config: { tension: 250, friction: 30 },
  });

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">Our Foundation Centers</h2>
      <div className="row">
        {centers.map(center => (
          <div key={center.id} className="col-md-6 col-lg-3 mb-4">
            <animated.div className="center-card" style={fadeIn}>
              <div className="center-image">
                <img src={center.image} alt={center.name} className="img-fluid rounded" />
              </div>
              <div className="center-info">
                <h3>{center.name}</h3>
                <p>{center.description}</p>
                <a
                  href={center.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-info mt-2"
                >
                  View on Map
                </a>
              </div>
            </animated.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Center;
