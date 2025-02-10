import React from 'react';
import '../AboutComponent/AboutNav.css'
const AboutNav = () => {
  return (
    <div className="row g-4 container-fluid">
      <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s" style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }}>
        <div className="facility-item">
          <div className="facility-icon bg-danger">
            <span className="bg-danger"></span>
            <i className="fa fa-bus-alt fa-3x text-danger"></i>
            <span className="bg-danger"></span>
          </div>
          <div className="facility-text bg-danger">
            <h3 className="text-danger mb-3">School Bus</h3>
            <p className="mb-0">Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit</p>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}>
        <div className="facility-item">
          <div className="facility-icon bg-success">
            <span className="bg-success"></span>
            <i className="fa fa-futbol fa-3x text-success"></i>
            <span className="bg-success"></span>
          </div>
          <div className="facility-text bg-success">
            <h3 className="text-success mb-3">Playground</h3>
            <p className="mb-0">Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit</p>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s" style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp' }}>
        <div className="facility-item">
          <div className="facility-icon bg-warning">
            <span className="bg-warning"></span>
            <i className="fa fa-home fa-3x text-warning"></i>
            <span className="bg-warning"></span>
          </div>
          <div className="facility-text bg-warning">
            <h3 className="text-warning mb-3">Healthy Canteen</h3>
            <p className="mb-0">Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit</p>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s" style={{ visibility: 'visible', animationDelay: '0.7s', animationName: 'fadeInUp' }}>
        <div className="facility-item">
          <div className="facility-icon bg-info">
            <span className="bg-info"></span>
            <i className="fa fa-chalkboard-teacher fa-3x text-info"></i>
            <span className="bg-info"></span>
          </div>
          <div className="facility-text bg-info">
            <h3 className="text-info mb-3">Positive Learning</h3>
            <p className="mb-0">Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutNav;
