import "../AdminComponent/Nav.css"
function Nav(){
    return <>
  <div>
    <nav>
        <ul className="bg-light" style={{height:"55px" , justifyContent:"space-around", display:"flex" , color:"grey"}}>
        <h1 className="m-0 text-danger">
          <img  src="../Images/logo.jpg" style={{height:"75px" , marginLeft:"80px"}}/>
          <h6 style={{color:"black",marginLeft:"80px", padding:"0%", textAlign:"center"}}>InfoBeans <br/>Foundation</h6>
        </h1>
            <li className="list"><a href="/">Home</a></li>
            <li  className="list"> <a href="/about" >About Us</a></li>
            <li  className="list"> <a href="/gallery" >Gallery</a></li>
            <li  className="list"> <a href="/activity">Activity</a></li>
            <li  className="list"><a href="/contact">Contact Us</a></li>
            <li className="list"><button  className="bg-danger">Rajistration</button></li>
        </ul>
    </nav>
  </div>
    </>
}

export default Nav ;