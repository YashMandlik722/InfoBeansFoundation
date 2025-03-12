import React from "react";
import { Link } from "react-router-dom";
import "./Aboutslide.css"; // Add custom styles here

function Aboutslide() {
  return (
    <>
      {/* Header Section */}
      <div
        className="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
        style={{
          backgroundImage: "url(../Images/photo16.jpg)",
          backgroundSize: "cover",
          object:"fit",
          backgroundPosition: "center",
         height: "400px",
        }}
      >
        
      </div>

      {/* About Section */}
      <div className="container-xxl py-2">
        <div className="container">
          <div className="row g-5">
            {/* Images Section */}
            <div
              className="col-lg-6 wow fadeIn"
              data-wow-delay="0.1s"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="d-flex flex-column">
                {/* <img
                  className="img-fluid rounded w-75 align-self-end mb-4"
                  src="../Image/cause-6.jpg"
                  alt="Our Mission"
                /> */}
                <img
                  className="img-fluid rounded w-100 bg-white pt-5 pe-5"
                  src="../Images/photo9.jpg"
                  alt="Our Services"
                  style={{ marginTop: "-7%" , height:"500px" }}
                />
              </div>
            </div>

            {/* Text Section */}
            <div
              className="col-lg-6 wow fadeIn"
              data-wow-delay="0.5s"
              style={{ animationDelay: "0.5s" }}
            >
              {/* <p className="d-inline-block border rounded-pill py-1 px-4">
                About Us
              </p> */}
              <h1 className="mb-4">
                Why You Should Trust Us? 
              </h1>
              <p>
              Our mission is to connect those who need help with those who can provide it. By fostering collaboration between NGOs, companies, and volunteers, we are building a network of support and creating meaningful impact.
              </p>
              <p className="mb-4">"We are a purpose-driven platform dedicated to building a bridge between those who want to make a difference and those who need support. Our goal is to empower NGOs by connecting them with the resources, funding, and partnerships they require to amplify their impact. At the same time, we provide companies with meaningful opportunities to fulfill their social responsibility goals and volunteers with a chance to actively contribute to causes they believe in. By fostering collaboration, transparency, and shared purpose, we are working to create a global network of support that drives positive change in communities worldwide."
              </p>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <i className="far fa-check-circle text-danger me-3"></i>
                  Empowering NGOs
                </li>
                <li className="mb-2">
                  <i className="far fa-check-circle text-danger me-3"></i>
                  Engaging Companies
                </li>
                {/* <li>
                  <i className="far fa-check-circle text-primary me-3"></i>
                  
                </li> */}
              </ul>
              {/* <Link
                className="btn bg-danger rounded-pill py-3 px-5 mt-3"
                to="/About"
              >
                Read More
              </Link> */}
            </div>
          </div>
        </div>
      </div>

      
       
    </>
  );
}

export default Aboutslide;
