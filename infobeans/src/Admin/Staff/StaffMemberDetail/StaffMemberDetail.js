import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./StaffMemberDetail.css";

function MemberDetail() {
    const [member, setMember] = useState();
    const location = useLocation();

    useEffect(() => {
        setMember(location.state);
    }, []);

    return (
        <div className="staff-member-container container mb-3 ">
            {member && (
                <div className="staff-detail-card row p-4">
                    <div className="staff-image col-md-4 p-4 d-flex align-items-center flex-column">
                        <img
                            className=""
                            src={`http://localhost:3001/staffDoc/${member.photo_url}`}
                            alt={member.name}
                        />
                        <h4 className="staff-role mt-2">{member.role.toUpperCase()}</h4>
                    </div>
                    <div className="staff-info col-md-8">
                        <div className="mt-0">
                            <h2>{member.name}</h2>
                            <p><strong>Email:</strong> {member.email}</p>
                            <p><strong>Contact:</strong> {member.contact}</p>
                            <p><strong>DOB:</strong> {member.DOB}</p>
                            <p><strong>Gender:</strong> {member.gender}</p>
                            <p><strong>Marital Status:</strong> {member.maritalStatus}</p>
                            <p><strong>Qualification:</strong> {member.qualification}</p>
                            <p><strong>Salary:</strong> ₹{member.salary}</p>
                            <p><strong>Address:</strong> {member.address}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MemberDetail;