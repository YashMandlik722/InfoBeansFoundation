import axios from "axios";
import { useRef } from "react";

function DownLoadExcel() {
    const getDate = () => {
        const today = new Date();
        const month = today.toLocaleString("en-US", { month: "short" });
        const year = today.getFullYear(); // Get full year

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
            if(phaseRef.current.value=="Applied"){
                phase = "Written-Result"
            }else if(phaseRef.current.value=="Written Done"){
                phase = "Interview-Result"
            }else if(phaseRef.current.value=="Interview Done"){
                phase = "House-Visit-Result"
            }
            link.setAttribute("download", `${courseRef.current.value}-${phase}-${getDate()}.xlsx`);

            document.body.appendChild(link);
            link.click();

            document.body.removeChild(link);
        } catch (error) {
            console.error("Error downloading Excel:", error);
            window.alert(error.response.statusText);
        }
    }

    return <>
        <div className="container d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "500px" }}>

            <h2 className="text-danger fw-bold mb-4">Download Excel</h2>
            
            <div className="mb-3 w-50">
                <label className="form-label fw-bold">Select Phase</label>
                <select ref={phaseRef} className="form-select">
                    <option>Select Phase</option>
                    <option value="Applied">Written</option>
                    <option value="Written Done">Interview</option>
                    <option value="Interview Done">House Visit</option>
                </select>
            </div>

            <div className="mb-3 w-50">
                <label className="form-label fw-bold">Select Course Type</label>
                <select ref={courseRef} className="form-select">
                    <option>Select Course Type</option>
                    <option value="ITEP">ITEP</option>
                    <option value="BREP">BREP</option>
                </select>
            </div>

            <div className="w-50">
                <button className="btn btn-danger w-100" onClick={downloadExcel}>
                    Download Excel
                </button>
            </div>
        </div>
    </>
}

export default DownLoadExcel;