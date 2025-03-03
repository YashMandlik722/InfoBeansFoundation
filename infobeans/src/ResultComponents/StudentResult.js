import React, { useEffect, useState } from "react";
import axios from "axios"
import API from "../API/API";
import { useSelector } from "react-redux";

function StudentResult() {
    const { isLoggedIn, user } = useSelector((store) => store.user);
    const [resultDetail, setResultDetail] = useState({});
    const [regData, setRegDetail] = useState({});
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
            console.log(error);
        }
    }

    const resultPhase = (phase)=>{
        if(phase == 1)
            setResultDisplay("Written")
        else if(phase == 2)
            setResultDisplay("Interview")
        else
            setResultDisplay("HouseVisit")
    }

    console.log(resultDetail);

    return <>

        <div className="container mt-5 mb-3" style={{ boxShadow: "1px 0px 8px red" }}>
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
                <div className="col-md-12 mt-3">
                    <button onClick={()=>resultPhase(1)} className="btn btn-danger m-2">Written Result</button>
                    {resultDetail.written_result == "Passed" && <button onClick={()=>resultPhase(2)} className="btn btn-danger m-2">Interview Result</button>}
                    {resultDetail.written_result == "Passed" && resultDetail.interview_result == "Passed" && <button onClick={()=>resultPhase(3)} className="btn btn-danger m-2">House Visit</button>}
                </div>

                {resultDisplay == "Written"&&<div className="pb-0 container text-center">
                    {resultDetail.written_result=="Passed"?<h2 className="text dark">Congratukations You Cleared Written Round</h2>:resultDetail.written_result=="Failed"?<h2 className="text dark">Sorry! You Failed Written Round</h2>:resultDetail.written_result=="Pending"?<h2 className="text dark mt-0">Your Written Round is still pending</h2>:<h2 className="text dark">You were absent</h2>}
                </div>}
                {resultDisplay == "Interview"&&<div className="pb-0 container text-center">
                    {resultDetail.interview_result=="Passed"?<h2 className="text dark">Congratukations You Cleared Interview Round</h2>:resultDetail.interview_result=="Failed"?<h2 className="text dark">Sorry! You Failed Interview Round</h2>:resultDetail.interview_result=="Pending"?<h2 className="text dark">Your Interview Round is still pending</h2>:<h2 className="text dark">You were absent</h2>}
                </div>}
                {resultDisplay == "HouseVisit"&&<div className="pb-0 container text-center">
                    {resultDetail.houseVisit_result=="Passed"?<h2 className="text dark">Congratukations You Are Through</h2>:resultDetail.houseVisit_result=="Failed"?<h2 className="text dark">Sorry! You Failed House-Visit Round</h2>:resultDetail.houseVisit_result=="Pending"?<h2 className="text dark">Your House-Visit is pending</h2>:<h2 className="text dark">You were absent</h2>}
                </div>}
            </div>
        </div>
    </>
}

export default StudentResult;