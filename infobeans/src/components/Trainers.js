import React from 'react';
import { useSpring, animated } from 'react-spring'; // For animation effects
import './Trainers.css'; // Import custom CSS file

const Trainers = () => {
  // Sample data for trainers
  const trainers = [
    {
      id: 1,
      name: 'John Doe',
      position: 'Senior Yoga Trainer',
      bio: 'With over 10 years of experience, John is dedicated to helping individuals achieve mental and physical well-being through yoga.',
      image: '../Images/photo6.jpg',
      linkedin: 'https://www.linkedin.com/in/johndoe',
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'Fitness Coach',
      bio: 'Jane is a certified fitness coach passionate about body transformations and maintaining a healthy lifestyle through functional training.',
      image: '../Images/photo6.jpg',
      linkedin: 'https://www.linkedin.com/in/janesmith',
    },
    {
      id: 3,
      name: 'Michael Lee',
      position: 'Nutrition Expert',
      bio: 'Michael specializes in personalized nutrition plans and is dedicated to helping people achieve their health goals through diet and exercise.',
      image: '../Images/photo6.jpg',
      linkedin: 'https://www.linkedin.com/in/michaellee',
    },
  ];

  return (
    <div className="trainers-container">
      <h2 className="text-center mb-5">Meet Our Expert Trainers</h2>
      <div className="row">
        {trainers.map((trainer) => (
          <div key={trainer.id} className="col-md-4 mb-4">
            <TrainerCard trainer={trainer} />
          </div>
        ))}
      </div>
    </div>
  );
};

// Trainer Card Component
const TrainerCard = ({ trainer }) => {
  // Animation for hover effect
  const hoverEffect = useSpring({
    transform: 'scale(1)',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    from: { transform: 'scale(0.95)', boxShadow: 'none' },
    config: { tension: 200, friction: 20 },
  });

  return (
    <animated.div className="trainer-card" style={hoverEffect}>
      <div className="trainer-image">
        <img src={trainer.image} alt={trainer.name} className="img-fluid rounded-circle" />
      </div>
      <div className="trainer-info">
        <h3>{trainer.name}</h3>
        <p className="position">{trainer.position}</p>
        <p className="bio">{trainer.bio}</p>
        <a href={trainer.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          View LinkedIn Profile
        </a>
      </div>
    </animated.div>
  );
};

export default Trainers;
