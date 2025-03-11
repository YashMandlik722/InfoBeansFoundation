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
                <div className="mb-3">
                    <label className="add-staff-form-label">Name</label>
                    <input onChange={handleChangeData} name="name" type="text" className="form-control add-staff-input" required value={memberData.name} />
                </div>
                <div className="mb-3">
                    <label className="add-staff-form-label">Email</label>
                    <input onChange={handleChangeData} name="email" type="email" className="form-control add-staff-input" required value={memberData.email} />
                </div>
                <div className="mb-3">
                    <label className="add-staff-form-label">Date of Birth</label>
                    <input onChange={handleChangeData} name="DOB" type="date" className="form-control add-staff-input" required value={memberData.DOB} />
                </div>
                <div className="mb-3">
                    <label className="add-staff-form-label">Address</label>
                    <textarea onChange={handleChangeData} className="form-control add-staff-input" name="address" rows="2" required value={memberData.address}></textarea>
                </div>
                <div className="mb-3">
                    <label className="add-staff-form-label">Gender</label>
                    <select onChange={handleChangeData} className="form-control add-staff-input" name="gender" required value={memberData.gender}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="add-staff-form-label">Contact</label>
                    <input onChange={handleChangeData} name="contact" type="tel" className="form-control add-staff-input" required value={memberData.contact} />
                </div>
                <div className="mb-3">
                    <label className="add-staff-form-label">Marital Status</label>
                    <select onChange={handleChangeData} className="form-control add-staff-input" name="maritalStatus" required value={memberData.maritalStatus}>
                        <option value="single">Single</option>
                        <option value="married">Married</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="add-staff-form-label">Qualification</label>
                    <input onChange={handleChangeData} name="qualification" type="text" className="form-control add-staff-input" required value={memberData.qualification} />
                </div>
                <div className="mb-3">
                    <label className="add-staff-form-label">Salary</label>
                    <input onChange={handleChangeData} name="salary" type="number" className="form-control add-staff-input" required value={memberData.salary} />
                </div>
                <div className="mb-3">
                    <label className="add-staff-form-label">Photo</label>
                    <input type="file" className="form-control add-staff-input" accept="image/*" name="photo" required />
                </div>
                <div className="mb-3">
                    <label className="add-staff-form-label">Aadhar Card</label>
                    <input type="file" className="form-control add-staff-input" accept="image/*" name="aadhar" required />
                </div>
                <div className="mb-3">
                    <label className="add-staff-form-label">Role</label>
                    <select onChange={handleChangeData} name="role" className="form-control add-staff-input">
                        <option value="Management">Management</option>
                        <option value="Trainer">Trainer</option>
                    </select>
                </div>
                <button type="submit" className="btn add-staff-btn-custom w-100">Submit</button>
            </form>
        </div>
    );
}

export default AddStaff;
