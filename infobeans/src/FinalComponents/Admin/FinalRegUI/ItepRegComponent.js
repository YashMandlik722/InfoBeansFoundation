import "./ItepRegStyle.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ItepRegComponent() {
    const [regData, setRegData] = useState([]);
    const navigate = useNavigate();

    const loadData = async () => {
        try {
            const response = await axios.get("http://localhost:3001/course/regForPerticularCourse/ITEP");
            setRegData(response.data.list);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    const viewDetail = (reg) => {
        navigate("/viewDetailItep", { state: reg });
    };

    return (
        <div className="registration-container">
            <h2 className="registration-title">ITEP Registrations</h2>
            <div className="table-responsive">
                <table className="registration-table">
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {regData.map((reg, index) => (
                            <tr key={reg.email}> {/* Ensured a unique key */}
                                <td>{index + 1}</td>
                                <td>{reg.name}</td>
                                <td>{reg.email}</td>
                                <td>
                                    <button className="itep-view-btn" onClick={() => viewDetail(reg)}>
                                        View Details
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ItepRegComponent;
