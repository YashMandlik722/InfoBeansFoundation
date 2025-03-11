import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import "./Founders.css"; // Your custom CSS for styling

const founders = [
  {
    name: 'John Doe',
    role: 'Founder & CEO',
    bio: 'John has over 20 years of experience in the education sector and is passionate about improving l efficiency of educational student learning outcomes.',
    image: '../Images/photo4.jpg',
  },
  {
    name: 'Jane Smith',
    role: 'Co-Founder & COO',
    bio: 'Jane is a dynamic leader with a background in operations and management, focused on improving the operational efficiency of educational institutions.',
    image: '../Images/photo5.jpg',
  },
  {
    name: 'Samuel Lee',
    role: 'Co-Founder & CTO',
    bio: 'Samuel is an experienced technologist who has led digital transformation initiatives and developed innovative solutions in the education field.',
    image: '../Images/photo6.jpg',
  },
  {
    name: 'John Doe',
    role: 'Founder & CEO',
    bio: 'John has over 20 years of experience in the education sector and is passionate about improving l efficiency of educational student learning outcomes.',
    image: '../Images/photo7.jpg',
  },
  {
    name: 'Jane Smith',
    role: 'Co-Founder & COO',
    bio: 'Jane is a dynamic leader with a background in operations and management, focused on improving the operational efficiency of educational institutions.',
    image: '../Images/photo8.jpg',
  },
  {
    name: 'Samuel Lee',
    role: 'Co-Founder & CTO',
    bio: 'Samuel is an experienced technologist who has led digital transformation initiatives and developed innovative solutions in the education field.',
    image: '../Images/photo9.jpg',
  }
];

const Founders = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS animations
  }, []);

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="mb-3 text-dark" data-aos="fade-up" data-aos-duration="1000">Meet Our Founders</h2>
        <p data-aos="fade-up" data-aos-duration="1200" className='text-dark'>
          Our team of experienced founders is dedicated to revolutionizing education. Here’s a little about each of them.
        </p>
      </div>
      <div className="row g-4 justify-content-center">
        {founders.map((founder, index) => (
          <div
            key={index}
            className="col-md-4 col-sm-6"
            data-aos="fade-down" 
            data-aos-duration="1000"
            data-aos-delay={`${index * 200}`} 
          >
            <div className="founder-card">
              <img
                className="img-fluid rounded-circle founder-image"
                src={founder.image}
                alt={founder.name}
              />
              <div className="founder-details">
                <h4>{founder.name}</h4>
                <p className="text-muted">{founder.role}</p>
                <p>{founder.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Founders;
