import "./ItepRegStyle.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ItepRegComponent() {
    const [regData, setRegData] = useState([]);
    const [totalReg, setTotal] = useState([]);
    const navigate = useNavigate();

    const loadData = async () => {
        try {
            const response = await axios.get("http://localhost:3001/course/getRegList");
            setTotal(response.data.list);
            setRegData(response.data.list);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const filterRegData = (filter) => {
        if (filter !== "ALL") {
            const filteredList = totalReg.filter((reg) => reg.courseType === filter);
            setRegData(filteredList);
        } else {
            setRegData(totalReg);
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
            <h2 className="registration-title">Registrations</h2>
            
            {/* Filter Dropdown */}
            <div className="filter-container">
                <label htmlFor="courseFilter">Filter By:</label>
                <select id="courseFilter" className="custom-dropdown" onChange={(e) => filterRegData(e.target.value)}>
                    <option value="ALL">All Registrations</option>
                    <option value="ITEP">ITEP Registrations</option>
                    <option value="BREP">BREP Registrations</option>
                </select>
            </div>

            {/* Registration Table */}
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
                            <tr key={reg.email}> 
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
