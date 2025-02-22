import { Routes, Route } from "react-router-dom";
import Home from "./Home"
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./About";
import Gallery from "./Gallery";
import ContactUs from "./ContactUs";
import SignIn from "./LoginComponent/Sign-in";
import SignUp from "./LoginComponent/Sign-up";
import AddStaff from "./Admin/Staff/AddStaff/AddStaff";
import RegistrationForm from "./FinalRegForm/RegistrationForm";
import StaffList from "./Admin/Staff/StaffList/StaffList";
import MemberDetail from "./Admin/Staff/StaffMemberDetail/StaffMemberDetail.js";

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

            <Route path="/staff-list" element={<StaffList/>}/>
            <Route path="/staff/:staffId" element={<MemberDetail/>}/>
            <Route path="/addStaff" element={<AddStaff/>}/>
        </Routes>



        <Footer />
    </>
}

export default App;