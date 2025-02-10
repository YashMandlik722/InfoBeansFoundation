import { useState, useEffect } from "react";
import  "../components/Navbar.css"
import { useNavigate } from "react-router-dom";
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
      
        <div className="m-0 text-danger">
          <img  src="../Images/logo.jpg" style={{height:"85px" , marginLeft:"70px"}}/>
          <h6 style={{color:"black",marginLeft:"80px"}}>InfoBeans</h6>
          <h6 style={{color:"black" , marginLeft:"73px"}}>Foundation</h6>
          {/* <img src="..Images/logo.jpg"/> */}
          {/* <i className="fa fa-book-reader me-3"></i> */}
          {/* <span style={{ color: "black" }}>InfoBeans Foundation</span> */}
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
          <a href="/" className="nav-item nav-link " style={{fontSize:"20px"}}>
            Home
          </a>
          <a href="/about" className="nav-item nav-link" style={{fontSize:"20px"}}>
            About Us
          </a>
          <a href="/gallery" className="nav-item nav-link" style={{fontSize:"20px"}}>
            Gallery
          </a>
          <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" style={{fontSize:"20px"}}>
              Pages
            </a>
            <div className="dropdown-menu rounded-0 rounded-bottom border-0 shadow-sm m-0" >
              <a href="/facility" className="dropdown-item">
                Foundation Facilities
              </a>
              <a href="/team" className="dropdown-item">
                Popular Teachers
              </a>
              <a href="/call-to-action" className="dropdown-item">
                Become A Teacher
              </a>
              <a href="/appointment" className="dropdown-item">
                Make Better
              </a>
              <a href="/testimonial" className="dropdown-item">
                Testimonial
              </a>
              <a href="/404" className="dropdown-item">
                404 Error
              </a>
            </div>
          </div>
          <a href="/contactUs" className="nav-item nav-link" style={{fontSize:"20px"}}>
            Contact Us
          </a>
        </div>
        <button onClick={()=>navigate("/signIn")} className="nav-item nav-link  bg-danger  text-light  rounded-5 roundedx ">
          Sign In<i className="fa fa-arrow-right ms-3"></i>
        </button>
      </div>
    </nav>


{/* <div>
  <nav style={{ backgroundColor:"red" }}>
    <ul  style={{display:"flex" , listStyle:"none", justifyContent:"space-around" , color:"white" }}>
      <li>Centers</li>
      <li>Courses</li>
      <li>Partners</li>
      <li>Other</li>
    </ul>
  </nav>
</div> */}
</>
  );
}

export default Navbar;
