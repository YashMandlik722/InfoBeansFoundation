import "./ItepRegStyle.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function BrepRegComponent() {
    const [regData, setRegData] = useState([]);
    const navigate = useNavigate();

    const loadData = async () => {
        try {
            const response = await axios.get("http://localhost:3001/course/regForPerticularCourse/BREP");
            setRegData(response.data.list);
            // console.log(response.data.list);
        } catch (error) {
            window.alert("Something Went Wrong");
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    const viewDetail = (reg) => {
        navigate("/viewDetailBrep", { state: reg });
    };

    return (
        <div className="registration-container">
            <h2 className="registration-title">BREP Registrations</h2>
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
                            <tr key={reg.email}> {/* Unique key added */}
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

export default BrepRegComponent;
