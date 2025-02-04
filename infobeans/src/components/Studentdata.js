import React from 'react';
import Slider from 'react-slick';
import './Studentdata.css'; // Import custom styles
import 'slick-carousel/slick/slick.css'; // Slick Carousel styles
import 'slick-carousel/slick/slick-theme.css'; // Slick Carousel theme styles

const Studentdata = () => {
  const settings = {
    infinite: true,
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 3,
    speed: 500,
    focusOnSelect: true,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Slide every 3000ms (3 seconds)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s">
          <h1 className="mb-3">Our Clients Say!</h1>
          <p>
            Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit.
            Ipsum diam justo sed rebum vero dolor duo.
          </p>
        </div>
        <Slider {...settings} className="testimonial-carousel">
          {/* Testimonial 1 */}
          <div className="testimonial-item bg-light rounded p-5">
            <p className="fs-5">
              Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est
              stet ea lorem amet est kasd kasd erat eos
            </p>
            <div className="d-flex align-items-center bg-white me-n5" style={{ borderRadius: '50px 0 0 50px' }}>
              <img
                src="../Images/photo5.jpg"
                alt="Client 1"
                className="img-fluid flex-shrink-0 rounded-circle"
                style={{ width: '90px', height: '90px' }}
              />
              <div className="ps-3">
                <h3 className="mb-1">Client Name</h3>
                <span>Profession</span>
              </div>
              <i className="fa fa-quote-right fa-3x text-danger ms-auto d-none d-sm-flex"></i>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="testimonial-item bg-light rounded p-5">
            <p className="fs-5">
              Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est
              stet ea lorem amet est kasd kasd erat eos
            </p>
            <div className="d-flex align-items-center bg-white me-n5" style={{ borderRadius: '50px 0 0 50px' }}>
              <img
                src="../Images/photo6.jpg"
                alt="Client 2"
                className="img-fluid flex-shrink-0 rounded-circle"
                style={{ width: '90px', height: '90px' }}
              />
              <div className="ps-3">
                <h3 className="mb-1">Client Name</h3>
                <span>Profession</span>
              </div>
              <i className="fa fa-quote-right fa-3x text-danger ms-auto d-none d-sm-flex"></i>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="testimonial-item bg-light rounded p-5">
            <p className="fs-5">
              Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est
              stet ea lorem amet est kasd kasd erat eos
            </p>
            <div className="d-flex align-items-center bg-white me-n5" style={{ borderRadius: '50px 0 0 50px' }}>
              <img
                src="../Images/photo7.jpg"
                alt="Client 3"
                className="img-fluid flex-shrink-0 rounded-circle"
                style={{ width: '90px', height: '90px' }}
              />
              <div className="ps-3">
                <h3 className="mb-1">Client Name</h3>
                <span>Profession</span>
              </div>
              <i className="fa fa-quote-right fa-3x text-danger ms-auto d-none d-sm-flex"></i>
            </div>
          </div>
          <div className="testimonial-item bg-light rounded p-5">
            <p className="fs-5">
              Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est
              stet ea lorem amet est kasd kasd erat eos
            </p>
            <div className="d-flex align-items-center bg-white me-n5" style={{ borderRadius: '50px 0 0 50px' }}>
              <img
                src="../Images/photo8.jpg"
                alt="Client 3"
                className="img-fluid flex-shrink-0 rounded-circle"
                style={{ width: '90px', height: '90px' }}
              />
              <div className="ps-3">
                <h3 className="mb-1">Client Name</h3>
                <span>Profession</span>
              </div>
              <i className="fa fa-quote-right fa-3x text-danger ms-auto d-none d-sm-flex"></i>
            </div>
          </div>
          <div className="testimonial-item bg-light rounded p-5">
            <p className="fs-5">
              Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est
              stet ea lorem amet est kasd kasd erat eos
            </p>
            <div className="d-flex align-items-center bg-white me-n5" style={{ borderRadius: '50px 0 0 50px' }}>
              <img
                src="../Images/photo9.jpg"
                alt="Client 3"
                className="img-fluid flex-shrink-0 rounded-circle"
                style={{ width: '90px', height: '90px' }}
              />
              <div className="ps-3">
                <h3 className="mb-1">Client Name</h3>
                <span>Profession</span>
              </div>
              <i className="fa fa-quote-right fa-3x text-danger ms-auto d-none d-sm-flex"></i>
            </div>
          </div>
          <div className="testimonial-item bg-light rounded p-5">
            <p className="fs-5">
              Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est
              stet ea lorem amet est kasd kasd erat eos
            </p>
            <div className="d-flex align-items-center bg-white me-n5" style={{ borderRadius: '50px 0 0 50px' }}>
              <img
                src="../Images/photo10.jpg"
                alt="Client 3"
                className="img-fluid flex-shrink-0 rounded-circle"
                style={{ width: '90px', height: '90px' }}
              />
              <div className="ps-3">
                <h3 className="mb-1">Founders</h3>
                <span>Profession</span>
              </div>
              <i className="fa fa-quote-right fa-3x text-danger ms-auto d-none d-sm-flex"></i>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Studentdata;
