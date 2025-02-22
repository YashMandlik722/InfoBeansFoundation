import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../components/Navbar.css"
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "../reduxConfig/UserSlice";
function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const { isLoggedIn, user } = useSelector((store) => store.user);

  const dispatch = useDispatch();

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
        className={`navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0 ${scrolled ? "shadow-sm" : ""
          }`}
        style={{
          position: "sticky",
          top: "0",
          width: "100%",
          zIndex: "1000",
          transition: "all 0.3s ease-in-out",
          justifyContent: "space-around"
        }}
      >

        <div className="m-0 text-danger">
          <img src="../Images/logo.jpg" style={{ height: "85px", marginLeft: "70px" }} />
          <h6 style={{ color: "black", marginLeft: "80px" }}>InfoBeans</h6>
          <h6 style={{ color: "black", marginLeft: "73px" }}>Foundation</h6>
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

            {/* Home Button */}
            <Link to="/" className="nav-item nav-link " style={{ fontSize: "20px" }}>
              Home
            </Link>

            {/* Gallery Button */}
            <Link to="/gallery" className="nav-item nav-link" style={{ fontSize: "20px" }}>
              Gallery
            </Link>

            {/* Registration Form */}
            {isLoggedIn && !user.isAdmin && <Link to="/register" className="nav-item nav-link" style={{ fontSize: "20px" }}>
              Register
            </Link>}

            {/* Result Button */}
            {isLoggedIn && !user.isAdmin && <Link to="/gallery" className="nav-item nav-link" style={{ fontSize: "20px" }}>
              Result
            </Link>}


            {/* About Us Button */}
            <Link to="/about" className="nav-item nav-link" style={{ fontSize: "20px" }}>
              About Us
            </Link>

            {/* Admin Options */}
            {user.isAdmin && <div className="nav-item dropdown">
              <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" style={{ fontSize: "20px" }}>
                Admin
              </Link>
              <div className="dropdown-menu rounded-0 rounded-bottom border-0 shadow-sm m-0" >
                <Link to="/addStaff" className="dropdown-item">
                  Add Staff
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
            </div>}

            {/* Contact Us Button*/}
            <Link to="/contactUs" className="nav-item nav-link" style={{ fontSize: "20px" }}>
              Contact Us
            </Link>

          </div>
          {!isLoggedIn && <button onClick={() => navigate("/signIn")} className="nav-item bg-danger  text-light  rounded-5 roundedx ">
            Sign In<i className="fa fa-arrow-right ms-3"></i>
          </button>}
          {isLoggedIn && <button onClick={() => { window.alert("Logging you out"); dispatch(signOut()); }} to="/" className="nav-item nav-link  bg-danger  text-light  rounded-5 roundedx ">
            Sign Out<i className="fa fa-sign-out-alt ms-3"></i>
          </button>}
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
