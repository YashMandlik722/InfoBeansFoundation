import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./EditMember.css";
import axios from "axios";

function EditMember() {
    const navigate = useNavigate();
    const location = useLocation();
    const [member, setMember] = useState({});

    useEffect(() => {
        if (location.state) {
            setMember(location.state);
            console.log("Fetched Member Data:", location.state);
        }
    }, [location.state]);

    const handelChange = (event) => {
        const { name, value } = event.target;
        console.log(name, value);
        setMember((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async () => {
        try {
            const response = await submitData();
            console.log(response.data);
            if (response.data.operation) {
                setTimeout(() => {
                    navigate("/staff-list");
                }, 2000);
            }
        } catch (err) {
            console.log(err);
        }
    };

    const submitData = async () =>
        await axios.patch(`http://localhost:3001/staff/edit-staff/${member._id}`, member);

    return (
        <div className="container">
            {member && Object.keys(member).length > 0 && (
                <div className="row custom-member-card">
                    {/* IMAGE */}
                    <div className="col-lg-5 p-3">
                        <img
                            className="custom-member-image"
                            src={"http://localhost:3001/staffDoc/" + member.photo_url}
                            alt="Member"
                        />
                    </div>

                    {/* DETAILS */}
                    <div className="col-lg-7">
                        <div>
                            <h2>{member.name}</h2>

                            <div className="custom-label-input-box">
                                <label htmlFor="email">Email:</label>
                                <input onChange={handelChange} value={member.email || ""} name="email" />
                            </div>

                            <div className="custom-label-input-box">
                                <label htmlFor="contact">Contact:</label>
                                <input onChange={handelChange} value={member.contact || ""} name="contact" />
                            </div>

                            <div className="custom-label-input-box">
                                <label htmlFor="DOB">DOB:</label>
                                <input readOnly className="custom-readonly-field" value={member.DOB || ""} name="DOB" />
                            </div>

                            <div className="custom-label-input-box">
                                <label htmlFor="gender">Gender:</label>
                                <input onChange={handelChange} value={member.gender || ""} name="gender" />
                            </div>

                            {/* Marital Status - Radio Buttons */}
                            <div className="custom-label-input-box">
                                <label>Marital Status:</label>
                                <div>
                                    <label className="me-3">
                                        <input
                                            type="radio"
                                            name="maritalStatus"
                                            value="Single"
                                            checked={member.maritalStatus?.toLowerCase() === "single"}
                                            onChange={handelChange}
                                        /> Single
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="maritalStatus"
                                            value="Married"
                                            checked={member.maritalStatus?.toLowerCase() === "married"}
                                            onChange={handelChange}
                                        /> Married
                                    </label>
                                </div>
                            </div>

                            <div className="custom-label-input-box">
                                <label htmlFor="salary">Salary: (₹)</label>
                                <input onChange={handelChange} value={member.salary || ""} name="salary" />
                            </div>

                            <div className="custom-label-input-box">
                                <label htmlFor="address">Address:</label>
                                <input onChange={handelChange} value={member.address || ""} name="address" />
                            </div>
                        </div>
                    </div>

                    <button onClick={handleSubmit} className="custom-submit-button w-75 m-auto">Done</button>
                </div>
            )}
        </div>
    );
}

export default EditMember;