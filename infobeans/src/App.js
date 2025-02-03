import {Routes, Route } from "react-router-dom";
import Home from "./Home"
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./About";
import Gallery from "./Gallery";
import ContactUs from "./ContactUs";

function App(){
    return <>
       <Navbar />
       
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/About" element={<About/>}></Route>
    <Route path="/Gallery" element={<Gallery/>}></Route>
    <Route path="/ContactUs" element={<ContactUs/>}></Route>
   </Routes>


 
   <Footer />
    </>
}

export default App ;