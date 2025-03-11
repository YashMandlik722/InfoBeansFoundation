import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ViewItepDetailStyle.css";
import axios from "axios";

function ViewItepDetail() {
    const location = useLocation();
    const navigate = useNavigate();

    const [regData, setRegData] = useState(location.state);

    const markVerified = async () => {
        try {
            const response = await axios.put(`http://localhost:3001/course/markVerified/${regData.userID}`);
            console.log(response.data);
            window.alert("Marked Verified");
            navigate("/itepReg");
        } catch (err) {
            window.alert(err);
            console.log(err);
        }
    };

    const markRejected = async () => {
        try {
            const response = await axios.put(`http://localhost:3001/course/rejectApplication/${regData.userID}`);
            console.log(response.data);
            window.alert("Marked Rejected");
            navigate("/itepReg");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="itep-container container mt-5 mb-5">
            <div className="itep-detail-card row p-4">
                <h1 className="itep-title">Student Details</h1>
                <div className="itep-image-section col-md-6 d-flex justify-content-center">
                    <div>
                        <img src={regData.passportPhoto} alt="Profile" className="itep-profile-img mb-3" />
                        <p><strong>Email:</strong> {regData.email}</p>
                        <p><strong>Contact No:</strong> {regData.contact}</p>
                        <p><strong>Qualification:</strong> {regData.qualification.toUpperCase()}</p>
                    </div>
                </div>
                <div className="itep-info-section col-md-6">
                    <h2 className="itep-student-name">{regData.name.toUpperCase()}</h2>
                    <p><strong>Course:</strong> {regData.courseType.toUpperCase()}</p>
                    <p><strong>Father's Name:</strong> {regData.fatherName.toUpperCase()}</p>
                    <p><strong>Date of Birth:</strong> {regData.dob}</p>
                    <p><strong>Gender:</strong> {regData.gender.toUpperCase()}</p>
                    <p><strong>Marital Status:</strong> {regData.maritalStatus.toUpperCase()}</p>
                    <p><strong>Annual Income:</strong> {regData.annualIncome.toUpperCase()} PA</p>
                    <p><strong>Local Address:</strong> {regData.localAddress.toUpperCase()}</p>
                    <p><strong>Permanent Address:</strong> {regData.permanentAddress.toUpperCase()}</p>
                </div>
            </div>

            <div className="itep-documents-section row p-4">
                <h1 className="itep-title text-danger">Documents</h1>
                {[
                    { label: "Aadhar", src: regData.aadhar },
                    { label: "Father's Aadhar", src: regData.fatherAadhar },
                    { label: "Income Certificate", src: regData.incomeCertificate },
                    { label: "12th Marksheet", src: regData.marksheet12 },
                    { label: "Latest Marksheet", src: regData.latestMarksheet },
                    { label: "Samagra ID", src: regData.samagraId }
                ].map((doc, index) => (
                    <div key={index} className="itep-document col-md-4 d-flex justify-content-center">
                        <div>
                            <h4 className="itep-doc-title text-danger">{doc.label}</h4>
                            <img src={doc.src} alt={doc.label} className="itep-doc-img mb-3" />
                        </div>
                    </div>
                ))}
            </div>

            <div className="itep-button-group text-center mt-3">
                <button className="itep-accept-btn w-25 m-2" onClick={markVerified}>Accept</button>
                <button className="itep-reject-btn w-25 m-2" onClick={markRejected}>Reject</button>
            </div>
        </div>
    );
}

export default ViewItepDetail;
