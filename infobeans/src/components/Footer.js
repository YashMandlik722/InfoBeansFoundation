import { Link } from "react-router-dom"; // Corrected import for Link
import "../components/Footer.css"
function Footer() {
  return (
    <>
      <div
        className="container-fluid bg-dark text-light footer pt-5"
        style={{ clear: "both" }}
      >
        <div className="container py-5">
          <div className="row g-5">
            {/* Address Section */}
            <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">Address</h5>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3"></i>
                <a
                  href="https://maps.google.com/?q=Madhovastika,Indore,MadhyaPradesh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Madhovastika, Indore, Madhya Pradesh
                </a>
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt me-3"></i>9171188434
              </p>
              <a href="mailto:infoBeansfoundtion@gmail.com">infoBeansfoundtion@gmail.com</a>
              <div className="d-flex pt-2">
                <a
                  href="https://www.instagram.com/samarpan181"
                  className="btn btn-outline-light btn-social rounded-circle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.facebook.com/?sk=welcome"
                  className="btn btn-outline-light btn-social rounded-circle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                {/* <a
                  href="https://www.aedin.com/in/samarpan-foundation-18a0b8349/"
                  className="btn btn-outline-light btn-social rounded-circle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-aedin-in"></i>
                </a> */}
              </div>
            </div>

            {/* Register Section */}
            <div className="col-lg-3 col-md-6" style={{ paddingBottom: "60px" }}>
              <h5 className="text-light mb-4">Register Now</h5>
              <Link className="btn btn-a bg-dark" to="RegisterNgo">
                As Courses
              </Link><br/>
              <Link className="btn btn-a bg-dark" to="RegisterCom">
                As Centers
              </Link>
            </div>

            {/* Quick Links Section */}
            <div className="col-lg-3 col-md-6" style={{ paddingBottom: "10px" }}>
              <h5 className="text-light">Quick Links</h5>
              <Link className="btn btn-a  bg-dark" to="/">
                About Us
              </Link><br/>
              <Link className="btn btn-a bg-dark" to="/">
                Contact Us
              </Link><br/>
              <Link className="btn btn-a bg-dark" to="/">
                Collaborations
              </Link>
            </div>

            {/* Footer Text Section */}
            <div className="col-lg-3 col-md-6" style={{ paddingBottom: "50px" }}>
              <p>
                <i>
                  IF YOU SEE SOMEONE WITHOUT A SMILE, GIVE THEM ONE OF YOURS !
                </i>
                <h1 className="text-light">infoBeans Foundation</h1>
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            <div className="row">
              <p className="col text-center text-light">
                © 2025 infoBeans Foundation. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
