import axios from "axios";
import { useEffect, useState } from "react";
import Api from "../../../../API/API";
import { useParams } from "react-router-dom";

function SlotResult() {
    const params = useParams();
    const [result, setResult] = useState([]);

    useEffect(() => {
        loadResult();
    }, []);

    const loadResult = async () => {
        try {
            const response = await axios.get(Api.GET_SLOT_RESULT + params.slotId);
            console.log(response.data);
            setResult(response.data.result);
        } catch (error) {
            console.error("Error fetching slot result:", error);
        }
    };

    return (
        <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100 px-3">
            <div className="card shadow-lg p-4 border-0 w-100" style={{ maxWidth: "600px", backgroundColor: "#ECDCBF" }}>
                <h2 className="text-center mb-4" style={{ color: "#D84040" }}>Slot Result</h2>
                
                {result.length > 0 ? (
                    <ul className="list-group">
                        {result.map((item, index) => (
                            <li key={index} className="list-group-item" style={{ backgroundColor: "#F8F2DE", borderColor: "#A31D1D" }}>
                                {item}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-center text-muted">No results found</p>
                )}
            </div>
        </div>
    );
}

export default SlotResult;
