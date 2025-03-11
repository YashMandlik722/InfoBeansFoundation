import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import API from "../../../../API/API";

function UploadResult() {
    const location = useLocation();
    const [slots, setSlots] = useState();
    const fileRef = useRef();
    const phaseRef = useRef();

    useEffect(() => {
        setSlots(location.state);
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        sendFile();
    };

    const sendFile = async () => {
        try {
            const formData = new FormData();
            formData.append("file", fileRef.current.files[0]);
            formData.append("phase", phaseRef.current.value);
            const response = await axios.post(API.UPLOAD_RESULT, formData);
            console.log(response.data);
        } catch (err) {
            console.log(err);
            window.alert(err.response?.data?.error || "An error occurred");
        }
    };

    return (
        <div className="container d-flex flex-column align-items-center justify-content-center min-vh-75 px-3">
            <div className="card shadow-lg p-4 border-0 w-100" style={{ maxWidth: "500px", backgroundColor: "#ECDCBF" }}>
                <h2 className="text-center mb-4" style={{ color: "#D84040" }}>Upload Result</h2>
                <form onSubmit={handleSubmit} className="form-group">
                    <label className="form-label fw-bold" htmlFor="phase" style={{ color: "#A31D1D" }}>Select Phase:</label>
                    <select className="form-control mb-3" name="phase" required ref={phaseRef}>
                        <option>Select Phase</option>
                        <option value="Applied">Written</option>
                        <option value="Written Done">Interview</option>
                        <option value="Interview Done">House Visit</option>
                    </select>
                    <input ref={fileRef} type="file" className="form-control mb-3" required />
                    <button className="btn w-100" style={{ backgroundColor: "#D84040", color: "#F8F2DE" }}>Upload</button>
                </form>
            </div>
        </div>
    );
}

export default UploadResult;