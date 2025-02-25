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
import Slots from "./AdminSlotComponent/Slots.js"
import MemberDetail from "./Admin/Staff/StaffMemberDetail/StaffMemberDetail.js";
import ItepRegComponent from "./FinalRegUI/ItepRegComponent";
import BrepRegComponent from "./FinalRegUI/BrepRegComponent";
import ViewItepDetail from "./FinalRegUI/ViewItepDetail";
import ViewBrepDetail from "./FinalRegUI/ViewBrepDetail";
import EditMember from "./Admin/Staff/EdifStaffMember/EditMember.js";
import StaffList from "./Admin/Staff/StaffList/StaffList.js";
import StudentResult from "./ResultComponents/StudentResult.js";
import AdminResult from "./ResultComponents/AdminResult.js";

function App() {
    return <>
        <Navbar />

        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Gallery" element={<Gallery />}></Route>
            <Route path="/userResult" element={<StudentResult />}></Route>
            <Route path="/adminResult" element={<AdminResult />}></Route>
            <Route path="/ContactUs" element={<ContactUs />}></Route>
            <Route path="/SignIn" element={<SignIn />}> </Route>
            <Route path="/sign-up" element={<SignUp />}> </Route>
            <Route path="/register" element={<RegistrationForm/>}> </Route>

            {/* <Route path="/staff-list" element={<StaffList/>}/> */}

            <Route path="/staff-list" element={<StaffList/>}/>
            <Route path="/staff/:staffId" element={<MemberDetail/>}/>
            <Route path="/itepReg" element={<ItepRegComponent/>}> </Route>
            <Route path="/viewDetailItep" element={<ViewItepDetail/>}> </Route>
            <Route path="/viewDetailBrep" element={<ViewBrepDetail/>}> </Route>
            <Route path="/brepReg" element={<BrepRegComponent/>}> </Route>
            <Route path="/edit-staff-member" element={<EditMember/>}/>
            <Route path="/addStaff" element={<AddStaff/>}/>
            <Route path="/Slots" element={<Slots/>}/>
            <Route path="/adminResult" element={<AdminResult/>}/>
            <Route path="/studentResult" element={<StudentResult/>}/>
        </Routes>



        <Footer />
    </>
}

export default App;