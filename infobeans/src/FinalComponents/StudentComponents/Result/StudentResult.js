import React, { useEffect, useState } from "react";
import axios from "axios"
import API from "../../../API/API";
import { useSelector } from "react-redux";

function StudentResult() {
    const { user } = useSelector((store) => store.user);
    const [resultDetail, setResultDetail] = useState({ written_result: { status: "Pending" } });
    const [regData, setRegDetail] = useState({});
    const [state, setState] = useState(true);
    const [resultDisplay, setResultDisplay] = useState("Written");

    useEffect(() => {
        loadResults();
    }, []);

    const loadResults = async () => {
        try {
            const resultResponse = await axios.get(API.STUDENT_RESULT_BY_USERID + user._id);
            setResultDetail(resultResponse.data.result)
            const userResponse = await axios.get(API.STUDENT_BY_USERID + user._id);
            setRegDetail(userResponse.data.result);
        } catch (error) {
            setState(false)
            console.log(error);
        }
    }

    const resultPhase = (phase) => {
        if (phase == 1)
            setResultDisplay("Written")
        else if (phase == 2)
            setResultDisplay("Interview")
        else
            setResultDisplay("HouseVisit")
    }  

    return <>
        {!state && <div className="container mt-5 mb-3" style={{ boxShadow: "1px 0px 8px red" }}>
        <div className="row p-3 pb-0 text-center" >
            <h2>No Result Found</h2>
        </div>
            </div>}
        {state &&<div className="container mt-5 mb-3" style={{ boxShadow: "1px 0px 8px red" }}>
            <div className="row p-3 pb-0" >
                <h1 className="registration-title">Student Details</h1>
                <div className="col-md-6 d-flex justify-content-center bg-light" >
                    <div>
                        <img src={regData.passportPhoto} alt="Profile Image" className="profile-image mb-3" />

                    </div>
                </div>
                <div className="col-md-6 bg-light">
                    <h2 className="text-danger" >{regData.name?.toUpperCase()}</h2>
                    <p><strong>Roll No.:</strong>{resultDetail.rollNo?.toUpperCase()}</p>

                </div>
                {/* For Buttons */}
                <div className="col-md-12 ">
                    <button onClick={() => resultPhase(1)} className="btn btn-danger m-2">Written Result</button>
                    {resultDetail.written_result.status == "Passed" && <button onClick={() => resultPhase(2)} className="btn btn-danger m-2">Interview Result</button>}
                    {resultDetail.written_result.status == "Passed" && resultDetail.interview_result.status == "Passed" && <button onClick={() => resultPhase(3)} className="btn btn-danger m-2">House Visit</button>}
                </div>

                {/* For Written Result */}
                {resultDisplay == "Written" && <div className="pb-0 text-center">
                    {resultDetail.written_result.status == "Passed" || resultDetail.written_result.status == "Failed" ?
                        <div>
                            <h2>Written Result</h2>
                            <div class="d-flex ">
                                <div class="col-md-3">
                                </div>
                                <div class="col-md-2">
                                    <b>Attendance :</b>{resultDetail.written_result.detail.attendance}
                                </div>
                                <div class="col-md-2">
                                    <b>Set :</b>{resultDetail.written_result.detail.set}
                                </div>

                                <div class="col-md-2">
                                    <b>Result :</b>{resultDetail.written_result.status}
                                </div>
                            </div>
                            <div className="d-flex justify-content-center">
                                <table class="table table-bordered table-striped animated-table mt-2" style={{ width: "70vh" }}>
                                    <thead class="thead-dark">
                                        <tr>
                                            <th>Subject</th>
                                            <th>Marks</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>English</td>
                                            <td>{resultDetail.written_result.detail.english}</td>
                                        </tr>
                                        <tr>
                                            <td>Hindi</td>
                                            <td>{resultDetail.written_result.detail.hindi}</td>
                                        </tr>
                                        <tr>
                                            <td>GK</td>
                                            <td>{resultDetail.written_result.detail.gk}</td>
                                        </tr>
                                        <tr>
                                            <td>Math</td>
                                            <td>{resultDetail.written_result.detail.math}</td>
                                        </tr>
                                        <tr>
                                            <td>Total Marks</td>
                                            <td>{resultDetail.written_result.detail.total}</td>
                                        </tr>
                                        <tr>
                                            <td>Percentage</td>
                                            <td>{resultDetail.written_result.detail.percentage * 100}%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        : resultDetail.written_result.status == "Pending" ? <h2 className="text dark mt-0">Your Written Round is still pending</h2> : resultDetail.written_result.status == "Absent" ? <h2 className="text dark">You were absent</h2> : <h2 className="text dark">Something Went Wrong</h2>}
                </div>}

                {/* For Interview result */}
                {resultDisplay == "Interview" && <div className="pb-0 container text-center">
                    {resultDetail.interview_result.status == "Passed"
                        ? <h2 className="text dark">Congratukations You Cleared Interview Round</h2>
                        : resultDetail.interview_result.status == "Failed"
                            ? <h2 className="text dark">Sorry! You Failed Interview Round</h2>
                            : resultDetail.interview_result.status == "Pending"
                                ? <h2 className="text dark">Your Interview Round is still pending</h2>
                                : resultDetail.interview_result.status == "Absent"
                                    ? <h2 className="text dark">You were absent</h2>
                                    : <h2 className="text dark">Something Went Wrong</h2>}
                </div>}

                {/* For House Visit Result */}
                {resultDisplay == "HouseVisit" && <div className="pb-0 container text-center">
                    {resultDetail.houseVisit_result.status == "Passed"
                        ? <h2 className="text dark">Congratukations You Are Through</h2>
                        : resultDetail.houseVisit_result.status == "Failed"
                            ? <h2 className="text dark">Sorry! You Failed House-Visit Round</h2>
                            : resultDetail.houseVisit_result.status == "Pending"
                                ? <h2 className="text dark">Your House-Visit is pending</h2>
                                : resultDetail.houseVisit_result.status == "Absent"
                                    ? <h2 className="text dark">You were absent</h2>
                                    : <h2 className="text dark">Something Went Wrong</h2>}
                </div>}
            </div>
        </div>}
    </>
}

export default StudentResult;