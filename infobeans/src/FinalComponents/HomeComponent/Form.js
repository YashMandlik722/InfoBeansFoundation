import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "./Form.css"; // Your custom CSS

const Form = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="bg-light rounded">
          <div className="row g-0">
            {/* Left Side Form */}
            <div
              className="col-lg-6 wow fadeIn"
              data-aos="fade-up"
              data-aos-delay="0.1s"
              style={{ visibility: "visible", animationDelay: "0.1s" }}
            >
              <div className="h-100 d-flex flex-column justify-content-center p-5">
                <h1 className="mb-4">Have You Any Query</h1>
                <form action="#" method="post">
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0"
                          id="gname"
                          placeholder="Guardian Name"
                        />
                        <label htmlFor="gname">Guardian Name</label>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control border-0"
                          id="gmail"
                          placeholder="Guardian Email"
                        />
                        <label htmlFor="gmail">Guardian Email</label>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0"
                          id="cname"
                          placeholder="Child Name"
                        />
                        <label htmlFor="cname">Student Name</label>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0"
                          id="cage"
                          placeholder="Child Age"
                        />
                        <label htmlFor="cage">Student Age</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control border-0"
                          placeholder="Leave a message here"
                          id="message"
                          style={{ height: "100px" }}
                        ></textarea>
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-danger w-100 py-3  bg-danger" type="submit">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Right Side Image */}
            <div
              className="col-lg-6 wow fadeIn"
              data-aos="fade-up"
              data-aos-delay="0.5s"
              style={{
                minHeight: "400px",
                visibility: "visible",
                animationDelay: "0.5s",
              }}
            >
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s" style={{visibility: "visible", animationDelay: "0.5s", animationName: "fadeIn"}}>
        <div className="h-100" style={{minHeight:"400px"}}>

<iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.3491597289244!2d75.84150500925682!3d22.71526007930438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd7a637fc527%3A0xa641f102ba5de184!2sMadhavastika%20InfoBeans%20Foundation!5e0!3m2!1sen!2sus!4v1737522959819!5m2!1sen!2sus"
        width="550"
        height="570"
        style={{ border: '0' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps Embed"
      ></iframe>
        </div>
      </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
