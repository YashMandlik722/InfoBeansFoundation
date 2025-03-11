import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './AdminResult.css'; 
import API from "../../../API/API";

function AdminResult() {
    const [slots, setSlots] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        loadSlots();
    }, []);

    const loadSlots = async () => {
        try {
            const response = await axios.get(API.GET_ALL_SLOTS);
            setSlots(response.data.slots);
            // console.log(response.data.slots);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="container custom-container">
            <table className="table custom-table">
                <thead>
                    <tr className="custom-table-header">
                        <th className="custom-table-cell">S. No.</th>
                        <th className="custom-table-cell">Capacity</th>
                        <th className="custom-table-cell">Location</th>
                        <th className="custom-table-cell">Type</th>
                        <th className="custom-table-cell">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {slots.map((slot, index) => (
                        <tr key={index} className={`custom-table-row ${index % 2 === 0 ? 'even' : 'odd'}`} onClick={() => navigate(`slot/${slot._id}`)} >
                            <td className="custom-table-cell">{index + 1}</td>
                            <td className="custom-table-cell">{slot.capacity}</td>
                            <td className="custom-table-cell">{slot.location}</td>
                            <td className="custom-table-cell">{slot.type}</td>
                            <td className="custom-table-cell">{slot.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={()=>navigate("/uploadResult",{state: slots})} className="w-100 btn btn-primary m-auto">Upload result</button>
        </div>
    );
}

export default AdminResult;
