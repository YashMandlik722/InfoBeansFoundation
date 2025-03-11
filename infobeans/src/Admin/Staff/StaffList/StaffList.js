import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StaffList.css";
import axios from "axios";

function StaffList() {
    const [staffList, setStaffList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        loadStaffData();
    }, []);

    const loadStaffData = async () => {
        try {
            const response = await axios.get("http://localhost:3001/staff/listOfStaff");
            setStaffList(response.data.staff_Data);
        } catch (error) {
            console.error("Error fetching staff data:", error);
        }
    };

    return (
        <div className="stafflist-container">
            <h2 className="stafflist-title">Staff Directory</h2>
            <div className="stafflist-grid">
                {staffList.map((staff) => (
                    <div 
                        key={staff._id} 
                        className="stafflist-card"
                        onClick={() => navigate(`/staff/${staff._id}`, { state: staff })}
                    >
                        <div className="stafflist-card-header">{staff.name} - {staff.role}</div>
                        <div className="stafflist-card-body">
                            <img 
                                src={`http://localhost:3001/staffDoc/${staff.photo_url}`} 
                                className="stafflist-photo" 
                                alt={staff.name} 
                            />
                            <p className="mt-2"><strong>Email:</strong> {staff.email}</p>
                            <p><strong>Contact:</strong> {staff.contact}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default StaffList;
