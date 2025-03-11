import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
import API from "../../../API/API";

const MySlots = () => {
  const [divVisible, setDivVisible] = useState(false);
  const [slots, setSlots] = useState([]);
  const [formData, setFormData] = useState({
    _id: "",
    location: "",
    date: "",
    reportingTime: "",
    type: "",
    capacity: "",
    examPhase: "",
  });

  useEffect(() => {
    loadSlots();
  }, []);

  const loadSlots = async () => {
    try {
      const { data } = await axios.get(API.GET_ALL_SLOTS);
      setSlots(data.slots);
    } catch (error) {
      console.error("Error loading slots:", error.response?.data || error);
    }
  };

  const handleToggle = (slot = null) => {
    setFormData(
      slot || {
        _id: "",
        location: "",
        date: "",
        reportingTime: "",
        type: "",
        capacity: "",
        examPhase: "",
      }
    );
    setDivVisible((prev) => !prev);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = formData._id
        ? await axios.patch(API.UPDATE_SLOTS, formData)
        : await axios.post(API.ADD_SLOTS, formData);

      setSlots(response.data.slots || [...slots, response.data.slot]);
      handleToggle();
    } catch (error) {
      console.error("Error saving slot:", error.response?.data || error);
    }
  };

  const deleteSlot = async (id) => {
    try {
      const { data } = await axios.post(API.DELETE_SLOTS, { id });
      setSlots(data.slots);
    } catch (error) {
      console.error("Error deleting slot:", error.response?.data || error);
    }
  };

  return (
    <div className="container-fluid mt-5">
      <div className="row" style={{ height: "600px" }}>
        <div className="col-12" style={{ height: "100%", position: "relative" }}>
          <div className={`table-container ${divVisible ? "shrink-table" : ""}`}>
            <button className="btn btn-success btn-sm mb-3 float-right" onClick={() => handleToggle()}>
              ADD SLOTS
            </button>
            <table className="table table-bordered table-striped table-hover">
              <thead className="thead">
                <tr>
                  <th>#</th>
                  <th>Location</th>
                  <th>Capacity</th>
                  <th>Date</th>
                  <th>Type</th>
                  <th>Reporting Time</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {slots.filter((slot) => slot.isActive).map((slot, index) => (
                  <tr key={slot._id}>
                    <td>{index + 1}</td>
                    <td>{slot.location}</td>
                    <td>{slot.capacity}</td>
                    <td>{slot.date}</td>
                    <td>{slot.type}</td>
                    <td>{slot.reportingTime}</td>
                    <td>
                      <button className="btn btn-warning btn-sm update-btn mr-2" onClick={() => handleToggle(slot)}>
                        Update
                      </button>
                      <button className="btn btn-danger btn-sm delete-btn" onClick={() => deleteSlot(slot._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {divVisible && (
            <div className="side-div show-div">
              <h4 className="text-center">{formData._id ? "Update Slot" : "Add Slot"}</h4>
              <form onSubmit={handleSubmit}>
                {["location", "date", "reportingTime", "capacity"].map((field) => (
                  <div className="form-group" key={field}>
                    <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                    <input
                      type={field === "date" ? "date" : field === "capacity" ? "number" : "text"}
                      className="form-control"
                      id={field}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      required
                    />
                  </div>
                ))}

                <div className="form-group">
                  <label htmlFor="type">Type</label>
                  <select className="form-control" id="type" name="type" value={formData.type} onChange={handleChange} required>
                    <option value="">Select Type</option>
                    <option value="ITEP">ITEP</option>
                    <option value="BREP">BREP</option>
                  </select>
                </div>

                {!formData._id && (
                  <div className="form-group">
                    <label htmlFor="examPhase">Exam Phase</label>
                    <select className="form-control" id="examPhase" name="examPhase" value={formData.examPhase} onChange={handleChange} required>
                      <option value="">Select Exam Phase</option>
                      <option value="Written">Written</option>
                      <option value="Interview">Interview</option>
                    </select>
                  </div>
                )}

                <button type="submit" className="btn btn-primary w-100">
                  {formData._id ? "Update" : "Submit"}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MySlots;
