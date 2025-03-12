import axios from "axios";
import { useEffect, useState, useRef } from "react";
import API from "../../../API/API";
import "./DownLoadExcel.css";

function DownloadExcel() {
    const [registrations, setRegistrations] = useState([]);
    const phaseRef = useRef();
    const courseRef = useRef();

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        try {
            const response = await axios.get(API.GET_USER_LIST);
            setRegistrations(response.data.list);
        } catch (err) {
            console.log(err);
        }
    };

    const getDate = () => {
        const today = new Date();
        const month = today.toLocaleString("en-US", { month: "short" });
        const year = today.getFullYear();
        return `${month.toUpperCase()}${year}`;
    };

    const downloadExcel = async () => {
        try {
            const phase = phaseRef.current.value;
            const course = courseRef.current.value;

            if (phase === "Select Phase" || course === "Select Course Type") {
                alert("Please select both phase and course type.");
                return;
            }

            const response = await axios.post(
                "http://localhost:3001/excel/getExcel",
                { phase, courseType: course },
                { responseType: "blob" }
            );

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement("a");
            link.href = url;

            let phaseLabel = phase === "Applied" ? "Written-Result" :
                phase === "Written Done" ? "Interview-Result" :
                    "House-Visit-Result";

            link.setAttribute("download", `${course}-${phaseLabel}-${getDate()}.xlsx`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error("Error downloading Excel:", error);
            window.alert(error.response?.statusText || "An error occurred");
        }
    };

    return (
        <div className="excel-container container d-flex flex-column align-items-center min-vh-100">
            <div className="students-section container">
                <h1 className="students-title text-center">Student List</h1>
                <div className="row d-flex justify-content-around">
                    <div className="col-lg-5">
                        <select ref={phaseRef} className="form-select">
                            <option>Select Phase</option>
                            <option value="Applied">Written</option>
                            <option value="Written Done">Interview</option>
                            <option value="Interview Done">House Visit</option>
                        </select>
                    </div>
                    <div className="col-md-5">
                        <select ref={courseRef} className="form-select filter-select">
                            <option>Select Course Type</option>
                            <option value="ITEP">ITEP</option>
                            <option value="BREP">BREP</option>
                        </select>
                    </div>
                    <div className="col-lg-2">
                        <button className="btn w-100 btn-danger" onClick={downloadExcel}>Download</button>
                    </div>
                </div>

                {registrations.length !== 0 ? (
                    <div className="table-responsive">
                        <table className="table table-striped student-table">
                            <thead>
                                <tr>
                                    <th>S.no</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Inspect</th>
                                </tr>
                            </thead>
                            <tbody>
                                {registrations
                                    .filter(item => item.isVerified === "Verified")
                                    .map((item, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>
                                                <button className="btn btn-outline-info">View More</button>
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <h2 className="text-center no-data-message">No Registrations to Show</h2>
                )}
            </div>
        </div>
    );
}

export default DownloadExcel;