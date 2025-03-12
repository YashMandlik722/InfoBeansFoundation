import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { signOut } from "../../reduxConfig/UserSlice";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isLoggedIn, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation(); // Track active page

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-white sticky-top px-4 px-lg-5 py-lg-0 ${scrolled ? "shadow-sm" : ""}`}>
        <div className="brand-container">
          <img src="../Images/logo.jpg" alt="Logo" className="brand-logo" />
          <h6 className="brand-text">InfoBeans</h6>
          <h6 className="brand-text">Foundation</h6>
        </div>

        <div className="navbar-collapse collapse" id="navbarCollapse">
          <div className="navbar-nav mx-auto">
            <Link to="/" className={`nav-item nav-link ${location.pathname === "/" ? "active" : ""}`}>Home</Link>
            <Link to="/gallery" className={`nav-item nav-link ${location.pathname === "/gallery" ? "active" : ""}`}>Gallery</Link>

            {isLoggedIn && !user.isAdmin && (
              <>
                <Link to="/register" className={`nav-item nav-link ${location.pathname === "/register" ? "active" : ""}`}>Register</Link>
                <Link to="/studentResult" className={`nav-item nav-link ${location.pathname === "/studentResult" ? "active" : ""}`}>Result</Link>
              </>
            )}

            <Link to="/about" className={`nav-item nav-link ${location.pathname === "/about" ? "active" : ""}`}>About Us</Link>

            {user.isAdmin && (
              <div className="nav-item dropdown">
                <Link to="#" className={`nav-item nav-link dropdown-toggle ${["/staff-list", "/itepReg", "/Slots", "/downloadExcel", "/uploadResult"].includes(location.pathname) ? "active" : ""}`} id="adminDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                  Admin
                </Link>
                <ul className="dropdown-menu" aria-labelledby="adminDropdown">
                  <li><Link to="/staff-list" className="dropdown-item">Manage Staff</Link></li>
                  <li><Link to="/itepReg" className="dropdown-item">Registrations</Link></li>
                  <li><Link to="/Slots" className="dropdown-item">Manage Slots</Link></li>
                  <li><Link to="/downloadExcel" className="dropdown-item">Download Excel</Link></li>
                  <li><Link to="/uploadResult" className="dropdown-item">Upload Result</Link></li>
                  <li><Link to="/banner" className="dropdown-item">Edit Banner</Link></li>
                </ul>
              </div>
            )}

            <Link to="/contactUs" className={`nav-item nav-link ${location.pathname === "/contactUs" ? "active" : ""}`}>Contact Us</Link>
          </div>

          {!isLoggedIn ? (
            <button onClick={() => navigate("/signIn")} className="btn btn-danger rounded-5">Sign In  <i className="fa fa-sign-in-alt"></i></button>
          ) : (
            <button onClick={() => { window.alert("Logging you out"); dispatch(signOut()); navigate("/"); }} className="btn btn-danger rounded-5">Sign Out <i className="fa fa-sign-out-alt"></i></button>
          )}
        </div>



        <button className="navbar-toggler" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

      {/* Mobile Menu (only shown when toggled) */}
      <div className={`navbar-links-mobile ${menuOpen ? "open" : ""}`}>
        <ul className="navbar-nav-mobile">
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery" className="nav-link" onClick={closeMenu}>Gallery</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={closeMenu}>About Us</Link>
          </li>
          {user.isAdmin && (
              <div className="nav-item dropdown">
                <Link to="#" className={`nav-item nav-link dropdown-toggle ${["/staff-list", "/itepReg", "/Slots", "/downloadExcel", "/uploadResult"].includes(location.pathname) ? "active" : ""}`} id="adminDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                  Admin
                </Link>
                <ul className="dropdown-menu" aria-labelledby="adminDropdown">
                  <li><Link onClick={closeMenu} to="/staff-list" className="dropdown-item">Manage Staff</Link></li>
                  <li><Link onClick={closeMenu} to="/itepReg" className="dropdown-item">Registrations</Link></li>
                  <li><Link onClick={closeMenu} to="/Slots" className="dropdown-item">Manage Slots</Link></li>
                  <li><Link onClick={closeMenu} to="/downloadExcel" className="dropdown-item">Download Excel</Link></li>
                  <li><Link onClick={closeMenu} to="/uploadResult" className="dropdown-item">Upload Result</Link></li>
                  <li><Link onClick={closeMenu} to="/banner" className="dropdown-item">Edit Banner</Link></li>
                </ul>
              </div>
            )}
          <li className="nav-item">
            <Link to="/contactUs" className="nav-link" onClick={closeMenu}>Contact Us</Link>
          </li>
          {/* Optionally, add admin dropdown or other links here */}
          <li className="nav-item">
            {!isLoggedIn ? (
            <button onClick={() => {closeMenu();navigate("/signIn")}} className="btn btn-danger rounded-5">Sign In</button>
          ) : (
            <button onClick={() => { window.alert("Logging you out"); dispatch(signOut()); closeMenu(); navigate("/"); }} className="btn btn-danger rounded-5">Sign Out<i className="fa fa-sign-out-alt"></i></button>
          )}
          </li>
        </ul>
      </div>
      </nav>
    </>
  );
}

export default Navbar;
