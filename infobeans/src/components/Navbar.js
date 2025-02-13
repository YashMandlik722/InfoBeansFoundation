import { useState, useEffect } from "react";
import  "../components/Navbar.css"
import { Link, useNavigate } from "react-router-dom";
function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = useNavigate();

  return (
    <>
    <nav
      className={`navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0 ${
        scrolled ? "shadow-sm" : ""
      }`}
      style={{
        position: "sticky",
        top: "0",
        width: "100%",
        zIndex: "1000",
        transition: "all 0.3s ease-in-out",
        justifyContent:"space-around"
      }}
    >
      
        <div className="text-danger" style={{margin:"0%"}}>
        <h1 className="m-0 text-danger">
          <img  src="../Images/logo.jpg" style={{height:"75px" , marginLeft:"80px"}}/>
          <h6 style={{color:"black",marginLeft:"80px", padding:"0%", textAlign:"center"}}>InfoBeans <br/>Foundation</h6>
        </h1>
        </div>
      
      {/* <button
        type="button"
        className="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button> */}
      <div className="navbar-collapse collapse" id="navbarCollapse">
        <div className="navbar-nav mx-auto">
          <Link to="/" className="nav-item nav-link " style={{fontSize:"20px"}}>
            Home
          </Link>
          <Link to="/about" className="nav-item nav-link" style={{fontSize:"20px"}}>
            About Us
          </Link>
          <Link to="/gallery" className="nav-item nav-link" style={{fontSize:"20px"}}>
            Gallery
          </Link>
          <div className="nav-item dropdown">
            <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" style={{fontSize:"20px"}}>
              Pages
            </Link>
            <div className="dropdown-menu rounded-0 rounded-bottom border-0 shadow-sm m-0" >
              <Link to="/facility" className="dropdown-item">
                Foundation Facilities
              </Link>
              <Link to="/team" className="dropdown-item">
                Popular Teachers
              </Link>
              <Link to="/call-to-action" className="dropdown-item">
                Become A Teacher
              </Link>
              <Link to="/appointment" className="dropdown-item">
                Make Better
              </Link>
              <Link to="/testimonial" className="dropdown-item">
                Testimonial
              </Link>
              <Link to="/404" className="dropdown-item">
                404 Error
              </Link>
            </div>
          </div>
          <Link to="/contactUs" className="nav-item nav-link" style={{fontSize:"20px"}}>
            Contact Us
          </Link>
        </div>
        <button onClick={()=>navigate("/signIn")} className="nav-item nav-link  bg-danger  text-light  rounded-5 roundedx ">
          Sign In<i className="fa fa-arrow-right ms-3"></i>
        </button>
      </div>
    </nav>
</>
  );
}

export default Navbar;
