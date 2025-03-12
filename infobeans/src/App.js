import { Routes, Route } from "react-router-dom";
import Home from "./FinalComponents/HomeComponent/Home"
import Footer from "./FinalComponents/FooterComponent/Footer";
import Navbar from "./FinalComponents/NavbarComponent/Navbar.js";
import About from "./FinalComponents/AboutComponent/About.js";
import Gallery from "./FinalComponents/Gallerycomponent/Galleryimages.js";
import ContactUs from "./FinalComponents/Contactcomponent/Contectform.js";
import SignIn from "./FinalComponents/LoginComponent/Sign-in.js";
import SignUp from "./FinalComponents/LoginComponent/Sign-up.js";
import AddStaff from "./FinalComponents/Admin/Staff/AddStaff/AddStaff.js";
import RegistrationForm from "./FinalComponents/StudentComponents/FinalRegForm/RegistrationForm.js";
import Slots from "./FinalComponents/Admin/Slot/Slots.js"
import MemberDetail from "./FinalComponents/Admin/Staff/StaffMemberDetail/StaffMemberDetail.js";
import ItepRegComponent from "./FinalComponents/Admin/FinalRegUI/ItepRegComponent.js";
import ViewItepDetail from "./FinalComponents/Admin/FinalRegUI/ViewItepDetail.js";
import EditMember from "./FinalComponents/Admin/Staff/EdifStaffMember/EditMember.js";
import StaffList from "./FinalComponents/Admin/Staff/StaffList/StaffList.js";
import StudentResult from "./FinalComponents/StudentComponents/Result/StudentResult.js";
import SlotResult from "./FinalComponents/Admin/ResultComponents/Slot Result/SlotResult.js";
import UploadResult from "./FinalComponents/Admin/ResultComponents/Upload Result/UploadResult.js";
import DownLoadExcel from "./FinalComponents/Admin/GetExcelSheet/DownLoadExcel.js";
import BannerSetting from "./FinalComponents/Admin/Banner/BannerSetting.js";
import Auth from "./auth/authentication.js";

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
            <Route path="/userResult" element={<Auth><StudentResult /></Auth>}></Route>
            <Route path="/register" element={<Auth><RegistrationForm/></Auth>}> </Route>
            <Route path="/staff-list" element={<Auth><StaffList/></Auth>}/>
            <Route path="/staff/:staffId" element={<Auth><MemberDetail/></Auth>}/>
            <Route path="/edit-staff-member" element={<Auth><EditMember/></Auth>}/>
            <Route path="/addStaff" element={<Auth><AddStaff/></Auth>}/>
            <Route path="/itepReg" element={<Auth><ItepRegComponent/></Auth>}> </Route>
            <Route path="/viewDetailItep" element={<Auth><ViewItepDetail/></Auth>}> </Route>
            <Route path="/Slots" element={<Auth><Slots/></Auth>}/>
            <Route path="/adminResult/slot/:slotId" element={<Auth><SlotResult/></Auth>}/>
            <Route path="/uploadResult" element={<Auth><UploadResult/></Auth>}/>
            <Route path="/studentResult" element={<Auth><StudentResult/></Auth>}/>
            <Route path="/downloadExcel" element={<Auth><DownLoadExcel/></Auth>}/>
            <Route path="/banner" element={<Auth><BannerSetting/></Auth>}/>
        </Routes>



        <Footer />
    </>
}

export default App;