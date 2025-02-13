import React from 'react';
import { useSpring, animated } from 'react-spring'; // For animation effects
import './Trainers.css'; // Import custom CSS file
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CourseSection = () => {
    // Sample data for trainers
    const trainers = [
        {
            id: 1,
            name: 'ITEP',
            position: 'Information Technology Excellence Program',
            bio: 'We are empowering education through world-class training and skill development. We aim to help underprivileged individuals secure better jobs and transform their futures.',
            image: '../Images/photo6.jpg',
        },
        {
            id: 2,
            name: 'BREP',
            position: 'Business Relationship Excellence Program',
            bio: 'We are empowering education through world-class training and skill development. We aim to help underprivileged individuals secure better jobs and transform their futures.',
            image: '../Images/photo6.jpg',
        }
    ];

    
    
    return (
        <div className="trainers-container">
            <h2 className="text-center mb-5">Our Courses</h2>
            <div className="row d-flex justify-content-center">
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
        from: { transform: 'scale(0.95)', boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)' },
        config: { tension: 200, friction: 20 },
    });
    const { isLoggedIn } = useSelector((store) => store.user);
    const navigate = useNavigate();

    return (
        <animated.div className="trainer-card" style={hoverEffect}>
            <div className="trainer-image">
                <img src={trainer.image} alt={trainer.name} className="img-fluid rounded-circle" />
            </div>
            <div className="trainer-info">
                <h3>{trainer.name}</h3>
                <p className="position">{trainer.position}</p>
                <p className="bio">{trainer.bio}</p>
                {isLoggedIn&&<Link to="/register" className="btn btn-danger">
                    Register Now
                </Link>}
                {!isLoggedIn&&<Link onClick={()=>{window.alert("First LogIn/SignUp");}} to="/SignIn" className="btn btn-danger">
                    Register Now
                </Link>}
            </div>
        </animated.div>
    );
};

export default CourseSection;
