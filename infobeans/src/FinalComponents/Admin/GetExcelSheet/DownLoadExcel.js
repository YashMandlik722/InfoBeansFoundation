import axios from "axios";
import { useRef } from "react";

function DownLoadExcel() {
    const getDate = () => {
        const today = new Date();
        const month = today.toLocaleString("en-US", { month: "short" });
        const year = today.getFullYear();
        return `${month.toUpperCase()}${year}`;
    };

    let phaseRef = useRef();
    let courseRef = useRef();
    let phase = "";
    
    const downloadExcel = async () => {
        try {
            const response = await axios.post("http://localhost:3001/excel/getExcel",
                { phase: phaseRef.current.value, courseType: courseRef.current.value },
                { responseType: "blob" }
            );
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement("a");
            link.href = url;
            
            if (phaseRef.current.value === "Applied") {
                phase = "Written-Result";
            } else if (phaseRef.current.value === "Written Done") {
                phase = "Interview-Result";
            } else if (phaseRef.current.value === "Interview Done") {
                phase = "House-Visit-Result";
            }
            
            link.setAttribute("download", `${courseRef.current.value}-${phase}-${getDate()}.xlsx`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error("Error downloading Excel:", error);
            window.alert(error.response?.statusText || "An error occurred");
        }
    };

    return (
        <div className="container d-flex flex-column align-items-center justify-content-center min-vh-75 px-3">
            <div className="card shadow-lg p-4 border-0 w-100" style={{ maxWidth: "500px", backgroundColor: "#ECDCBF" }}>
                <h2 className="text-center mb-4" style={{ color: "#D84040" }}>Download Excel</h2>
                
                <div className="mb-3">
                    <label className="form-label fw-bold" style={{ color: "#A31D1D" }}>Select Phase</label>
                    <select ref={phaseRef} className="form-select">
                        <option>Select Phase</option>
                        <option value="Applied">Written</option>
                        <option value="Written Done">Interview</option>
                        <option value="Interview Done">House Visit</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label fw-bold" style={{ color: "#A31D1D" }}>Select Course Type</label>
                    <select ref={courseRef} className="form-select">
                        <option>Select Course Type</option>
                        <option value="ITEP">ITEP</option>
                        <option value="BREP">BREP</option>
                    </select>
                </div>

                <button className="btn w-100" style={{ backgroundColor: "#D84040", color: "#F8F2DE" }} onClick={downloadExcel}>
                    Download Excel
                </button>
            </div>
        </div>
    );
}

export default DownLoadExcel;