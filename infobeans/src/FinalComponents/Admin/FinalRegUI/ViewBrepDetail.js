import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ViewItepDetailStyle.css"
import axios from "axios";

function ViewBrepDetail() {

    const location = useLocation();
    const navigate = useNavigate();

    const [regData, setRegData] = useState(location.state);

    const markVerified = async()=>{
        const response = await axios.put("http://localhost:3001/course//markVerified/"+regData.userID);
        window.alert("Marked Verified");
        navigate("/brepReg");
    }
    const markRejected = async()=>{
        const response = await axios.put("http://localhost:3001/course//rejectApplication/"+regData.userID);
        window.alert("Marked rejected");
        navigate("/brepReg");
    }

    return <>
        <div className="container mt-5 mb-5" style={{ boxShadow: "1px 0px 8px red" }}>
            <div className="row p-4" >
                <h1 className="registration-title">Student Details</h1>
                <div className="col-md-6 d-flex justify-content-center bg-light" >
                    <div>
                        <img src={regData.passportPhoto} alt="Profile Image" className="profile-image mb-3" />
                        <p><strong>Email:</strong>{regData.email}</p>
                        <p><strong>Contact No:</strong>{regData.contact}</p>
                        <p><strong>Qualification:</strong>{regData.qualification.toUpperCase()}</p>
                    </div>
                </div>
                <div className="col-md-6 bg-light">
                    <h2 className="text-danger">{regData.name.toUpperCase()}</h2>
                    <p><strong>Father's Name:</strong>{regData.fatherName.toUpperCase()}</p>
                    <p><strong>Date of Birth:</strong>{regData.dob}</p>
                    <p><strong>Gender:</strong>{regData.gender.toUpperCase()}</p>
                    <p><strong>Marital Status:</strong>{regData.maritalStatus.toUpperCase()}</p>
                    <p><strong>Annual Income:</strong>{regData.annualIncome.toUpperCase()}PA</p>
                    <p><strong>Local Address:</strong>{regData.localAddress.toUpperCase()}</p>
                    <p><strong>Permanent Address:</strong>{regData.permanentAddress.toUpperCase()}</p>
                </div>
            </div>

            <div className="row p-4" >
                <h1 className="registration-title text-danger">Documents</h1>
                <div className="col-md-4 d-flex justify-content-center bg-light p-2" >
                    <div>
                        <h4 className="text-danger">Aadhar</h4>
                        <img src={regData.aadhar} alt="Profile Image" className="profile-image mb-3" style={{width:"100%" , border:"1px solid black"}}/>
                    </div>
                </div>
                <div className="col-md-4 d-flex justify-content-center bg-light" >
                    <div>
                        <h4 className="text-danger">Father's Aadhar</h4>
                        <img src={regData.fatherAadhar} alt="Profile Image" className="profile-image mb-3" style={{width:"100%" , border:"1px solid black"}}/>
                    </div>
                </div>
                <div className="col-md-4 d-flex justify-content-center bg-light p-2" >
                    <div>
                        <h4 className="text-danger">Income Certificate</h4>
                        <img src={regData.incomeCertificate} alt="Profile Image" className="profile-image mb-3" style={{width:"100%" , border:"1px solid black"}}/>
                    </div>
                </div>
                <div className="col-md-4 d-flex justify-content-center bg-light" >
                    <div>
                        <h4 className="text-danger">12th Marksheet</h4>
                        <img src={regData.marksheet12} alt="Profile Image" className="profile-image mb-3" style={{width:"100%" , border:"1px solid black"}}/>
                    </div>
                </div>
                <div className="col-md-4 d-flex justify-content-center bg-light p-2" >
                    <div>
                        <h4 className="text-danger">Latest Marksheet</h4>
                        <img src={regData.latestMarksheet} alt="Profile Image" className="profile-image mb-3" style={{width:"100%" , border:"1px solid black"}}/>
                    </div>
                </div>
                <div className="col-md-4 d-flex justify-content-center bg-light" >
                    <div>
                        <h4 className="text-danger">Samagra Id</h4>
                        <img src={regData.samagraId} alt="Profile Image" className="profile-image mb-3" style={{width:"100%" , border:"1px solid black"}}/>
                    </div>
                </div>
            </div>
            <div className="text-center mt-3">
                <button className="btn-outline-success w-25 m-2" onClick={markVerified} style={{borderRadius:"7px"}}>Accept</button>
                <button className="btn-outline-danger w-25 m-2" onClick={markRejected} style={{borderRadius:"7px"}}>Reject</button>
            </div>
        </div>
    </>
}
export default ViewBrepDetail;