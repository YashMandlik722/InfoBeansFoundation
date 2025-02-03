import React, { useEffect, useRef, useState } from "react";
import "./Courses.css"; // Import custom styles for animation

const Courses = () => {
  const [isVisible, setIsVisible] = useState(false);
  const subjectRef = useRef(null);

  // IntersectionObserver to check if the subject section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the element is in view
    );

    if (subjectRef.current) {
      observer.observe(subjectRef.current);
    }

    return () => {
      if (subjectRef.current) {
        observer.unobserve(subjectRef.current);
      }
    };
  }, []);

  const subjects = [
    {
      id: 1,
      name: "Web Development",
      description: "Learn the fundamentals of Web Development with HTML, CSS, JavaScript, and Core Java.",
      courses: ["Core Java", "HTML & CSS", "JavaScript", "Full Stack MERN"],
      link: "/web-development",
      backgroundImage: "../Images/photo4.jpg",
    },
    {
      id: 2,
      name: "Sales & Marketing",
      description: "Master the techniques of digital marketing and sales strategies to boost your business.",
      courses: ["Digital Marketing", "SEO", "Sales Strategies"],
      link: "/sales-marketing",
      backgroundImage: "../Images/photo6.jpg",
    },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">Our Courses & Subjects</h2>

      <div className="row">
        {subjects.map((subject) => (
          <div
            key={subject.id}
            ref={subjectRef}
            className={`col-lg-6 col-md-12 mb-4 subject-card ${isVisible ? "fade-in" : ""}`}
            style={{
              backgroundImage: `url(${subject.backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="subject-card-overlay" >
              <div className="subject-card-content" >
                <h3>{subject.name}</h3>
                <p>{subject.description}</p>
                <ul>
                  {subject.courses.map((course, index) => (
                    <li key={index}>{course}</li>
                  ))}
                </ul>
                <a href={subject.link} className="btn btn-primary">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
