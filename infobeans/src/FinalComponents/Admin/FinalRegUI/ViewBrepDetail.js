import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ViewItepDetailStyle.css";
import axios from "axios";

function ViewBrepDetail() {
    const location = useLocation();
    const navigate = useNavigate();
    const [regData, setRegData] = useState(location.state);

    const markVerified = async () => {
        try {
            await axios.put(`http://localhost:3001/course/markVerified/${regData.userID}`);
            window.alert("Marked Verified");
            navigate("/brepReg");
        } catch (err) {
            window.alert("Error: " + err.message);
        }
    };

    const markRejected = async () => {
        try {
            await axios.put(`http://localhost:3001/course/rejectApplication/${regData.userID}`);
            window.alert("Marked Rejected");
            navigate("/brepReg");
        } catch (err) {
            window.alert("Error: " + err.message);
        }
    };

    return (
        <div className="itep-container">
            <h1 className="itep-title">Student Details</h1>
            <div className="row">
                <div className="col-md-6 itep-image-section">
                    <img src={regData?.passportPhoto} alt="Profile" className="itep-profile-img mb-3" />
                    <p><strong>Email:</strong> {regData?.email}</p>
                    <p><strong>Contact No:</strong> {regData?.contact}</p>
                    <p><strong>Qualification:</strong> {regData?.qualification?.toUpperCase()}</p>
                </div>
                <div className="col-md-6 itep-info-section">
                    <h2 className="itep-student-name">{regData?.name?.toUpperCase()}</h2>
                    <p><strong>Father's Name:</strong> {regData?.fatherName?.toUpperCase()}</p>
                    <p><strong>Date of Birth:</strong> {regData?.dob}</p>
                    <p><strong>Gender:</strong> {regData?.gender?.toUpperCase()}</p>
                    <p><strong>Marital Status:</strong> {regData?.maritalStatus?.toUpperCase()}</p>
                    <p><strong>Annual Income:</strong> {regData?.annualIncome?.toUpperCase()} PA</p>
                    <p><strong>Local Address:</strong> {regData?.localAddress?.toUpperCase()}</p>
                    <p><strong>Permanent Address:</strong> {regData?.permanentAddress?.toUpperCase()}</p>
                </div>
            </div>

            <h1 className="itep-title text-danger">Documents</h1>
            <div className="row itep-documents-section">
                {[
                    { title: "Aadhar", img: regData?.aadhar },
                    { title: "Father's Aadhar", img: regData?.fatherAadhar },
                    { title: "Income Certificate", img: regData?.incomeCertificate },
                    { title: "12th Marksheet", img: regData?.marksheet12 },
                    { title: "Latest Marksheet", img: regData?.latestMarksheet },
                    { title: "Samagra Id", img: regData?.samagraId }
                ].map((doc, index) => (
                    <div key={index} className="col-md-4 d-flex justify-content-center itep-document">
                        <div>
                            <h4 className="itep-doc-title">{doc.title}</h4>
                            <img src={doc.img} alt={doc.title} className="itep-doc-img mb-3" />
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center itep-button-group">
                <button className="itep-accept-btn w-25 m-2" onClick={markVerified}>Accept</button>
                <button className="itep-reject-btn w-25 m-2" onClick={markRejected}>Reject</button>
            </div>
        </div>
    );
}

export default ViewBrepDetail;
