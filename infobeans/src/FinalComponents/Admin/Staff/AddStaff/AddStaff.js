import { useState } from "react";
import "./AddStaff.css";
import axios from "axios";

function AddStaff() {
    const [memberData, setMemberData] = useState({
        name: "",
        email: "",
        DOB: "",
        address: "",
        gender: "male",
        contact: "",
        maritalStatus: "single",
        qualification: "",
        salary: "",
        role: "Management"
    });

    const handleChangeData = (event) => {
        const { name, value } = event.target;
        setMemberData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        for (const key in memberData) {
            formData.append(key, memberData[key]);
        }

        const photo = event.target.photo.files[0];
        const aadhar = event.target.aadhar.files[0];

        formData.append("photo", photo);
        formData.append("aadhar", aadhar);

        submitForm(formData);
    };

    const submitForm = async (formData) => {
        try {
            const response = await axios.post("http://localhost:3001/staff/addStaff", formData, { headers: { "Content-Type": "multipart/form-data" } });
            console.log(response.data);
            if (response.data.operation) console.log("ADDED");
            else console.log("PROBLEM");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="add-staff-container">
            <form className="add-staff-form-container" onSubmit={handleSubmit}>
                <h2 className="add-staff-header">Staff Registration</h2>
                {[
                    { label: "Name", name: "name", type: "text" },
                    { label: "Email", name: "email", type: "email" },
                    { label: "Date of Birth", name: "DOB", type: "date" },
                    { label: "Address", name: "address", type: "textarea" },
                    { label: "Contact", name: "contact", type: "tel" },
                    { label: "Qualification", name: "qualification", type: "text" },
                    { label: "Salary", name: "salary", type: "number" }
                ].map(({ label, name, type }) => (
                    <div className="mb-3" key={name}>
                        <label className="add-staff-form-label">{label}</label>
                        {type === "textarea" ? (
                            <textarea onChange={handleChangeData} className="form-control add-staff-input" name={name} rows="2" required value={memberData[name]}></textarea>
                        ) : (
                            <input onChange={handleChangeData} name={name} type={type} className="form-control add-staff-input" required value={memberData[name]} />
                        )}
                    </div>
                ))}
                {[
                    { label: "Gender", name: "gender", options: ["male", "female"] },
                    { label: "Marital Status", name: "maritalStatus", options: ["single", "married"] },
                    { label: "Role", name: "role", options: ["Management", "Trainer"] }
                ].map(({ label, name, options }) => (
                    <div className="mb-3" key={name}>
                        <label className="add-staff-form-label">{label}</label>
                        <select onChange={handleChangeData} className="form-control add-staff-input" name={name} required value={memberData[name]}>
                            {options.map((option) => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        </select>
                    </div>
                ))}
                {[
                    { label: "Photo", name: "photo" },
                    { label: "Aadhar Card", name: "aadhar" }
                ].map(({ label, name }) => (
                    <div className="mb-3" key={name}>
                        <label className="add-staff-form-label">{label}</label>
                        <input type="file" className="form-control add-staff-input" accept="image/*" name={name} required />
                    </div>
                ))}
                <button type="submit" className="btn add-staff-btn-custom w-100">Submit</button>
            </form>
        </div>
    );
}

export default AddStaff;
