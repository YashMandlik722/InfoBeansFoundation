import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import API from "../../../../API/API";

function UploadResult() {
    const location = useLocation();
    // const [slots, setSlots] = useState();
    const [slots, setSlots] = useState();
    const fileRef = useRef();
    const phaseRef = useRef();
    useEffect(() => {
        setSlots(location.state);
    }, [])
    const handleSubmit = (event) => {
        event.preventDefault();
        sendFile();
    }
    const sendFile = async () => {
        try {
            const formData = new FormData();
            formData.append("file", fileRef.current.files[0])
            formData.append('phase', phaseRef.current.value);
            const response = await axios.post(API.UPLOAD_RESULT, formData);
            console.log(response.data);
        } catch (err) {
            console.log(err);
            window.alert(err.response.data.error);
        }
    }
    return <>
        <div className="container">
            <h2 className="text-center text-danger">Upload Result</h2>
            <form onSubmit={handleSubmit} className="w-75 m-auto form-group">
                {/* <label className="form-label fw-bold" htmlFor="slotName">Select Slot: </label> */}
                {/* <select className="form-control" name="slotName">
                    <option>Select Slot</option>
                    {slots?.map((slot, index) => <option key={index}>{slot.location}-{slot.type}</option>)}
                </select> */}
                <label className="form-label fw-bold" htmlFor="phase">Select Phase: </label>
                <select className="form-control" name="phase" required ref={phaseRef}>
                    <option>Select Phase</option>
                    <option value={"Applied"}>Written</option>
                    <option value={"Written Done"}>Interview</option>
                    <option value={"Interview Done"}>House Visit</option>
                </select>
                <input ref={fileRef} type="file" className="form-control mt-3" required />
                <button className="btn btn-primary mt-5 w-50">Upload</button>
            </form>
        </div>
    </>
}

export default UploadResult