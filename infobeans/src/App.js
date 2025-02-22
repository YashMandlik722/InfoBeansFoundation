import { Routes, Route } from "react-router-dom";
import Home from "./Home"
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./About";
import Gallery from "./Gallery";
import ContactUs from "./ContactUs";
import SignIn from "./LoginComponent/Sign-in";
import SignUp from "./LoginComponent/Sign-up";
import AddStaff from "./Admin/AddStaff/AddStaff";
import RegistrationForm from "./FinalRegForm/RegistrationForm";
import ItepRegComponent from "./FinalRegUI/ItepRegComponent";
import BrepRegComponent from "./FinalRegUI/BrepRegComponent";
import ViewItepDetail from "./FinalRegUI/ViewItepDetail";
import ViewBrepDetail from "./FinalRegUI/ViewBrepDetail";

function App() {
    return <>
        <Navbar />

        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Gallery" element={<Gallery />}></Route>
            <Route path="/ContactUs" element={<ContactUs />}></Route>
            <Route path="/SignIn" element={<SignIn />}> </Route>
            <Route path="/sign-up" element={<SignUp />}> </Route>
            <Route path="/register" element={<RegistrationForm/>}> </Route>
            <Route path="/itepReg" element={<ItepRegComponent/>}> </Route>
            <Route path="/viewDetailItep" element={<ViewItepDetail/>}> </Route>
            <Route path="/viewDetailBrep" element={<ViewBrepDetail/>}> </Route>
            <Route path="/brepReg" element={<BrepRegComponent/>}> </Route>
            <Route path="/addStaff" element={<AddStaff/>}/>
        </Routes>



        <Footer />
    </>
}

export default App;