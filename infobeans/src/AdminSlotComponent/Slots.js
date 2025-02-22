import React, { useEffect, useState } from 'react';
import axios from "axios"
import './styles.css';
import API from '../API/API';

const MySlots = () => {
  const [divVisible, setDivVisible] = useState(false);
  const [formData, setFormData] = useState({
    _id: '',
    location: '',
    date: '',
    reportingTime: '',
    type: '',
    capacity: '',
    examPhase: '',
  });
  const [slots, setSlots] = useState([])

  const handleToggle = () => {
    setFormData({
      _id: '',
      location: '',
      date: '',
      reportingTime: '',
      type: '',
      capacity: '',
      examPhase: '',
    })
    setDivVisible(!divVisible);
  };

  const handleDelete = (event,id) => {
    deleteSlots(id);
    const row = event.currentTarget.closest('tr');
    row.classList.add('fade-out');
    setTimeout(() => {
      row.remove();
    }, 500);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    if(formData._id){
      const response = await axios.patch(API.UPDATE_SLOTS,formData)
      setSlots(response.data.slots)
      handleToggle()
    }
    else{
      addSlots();
    }
  };

  useEffect(() => {
    loadSlots()
  }, [])

  const loadSlots = async () => {
    try {
      const response = await axios.get(API.GET_ALL_SLOTS);
      setSlots(response.data.slots)
    } catch (error) {
      console.log(error)
    }
  }
  const deleteSlots = async(id)=>{
    try {
      const response = await axios.post(API.DELETE_SLOTS,{id})
      setSlots(response.data.slots)
    } catch (error) {
      console.log(error)
    }
  }
  const addSlots = async()=>{
    try {
      const response = await axios.post(API.ADD_SLOTS, formData)
      handleToggle()
      setSlots(data=>[...data, response.data.slot])
    } catch (error) {
      console.log(error)
    }
  }
  const updateSlots = (data)=>{
    handleToggle()
    setFormData(data)
   
  }
  return (
    <div className="container-fluid mt-5">
      <div className="row" style={{ height: '600px' }}>
        <div className="col-12" style={{ height: '100%', position: "relative" }}>
          <div className={`table-container ${divVisible ? 'shrink-table' : ''}`}>
            <button
              id="toggleButton"
              className="btn btn-sm btn-success mb-3"
              style={{ float: 'right' }}
              onClick={handleToggle}
            >
              ADD SLOTS
            </button>
            <table className="table table-bordered table-striped table-hover">
              <thead className="thead">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">location</th>
                  <th scope="col">capacity</th>
                  <th scope="col">date</th>
                  <th scope="col">type</th>
                  <th scope="col">reportingTime</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {slots?.filter(data => data.isActive).map((data, index) => (<tr key={index}>
                  <th scope="row">{index+1}</th>
                  <td>{data.location}</td>
                  <td>{data.capacity}</td>
                  <td>{data.date}</td>
                  <td>{data.type}</td>
                  <td>{data.reportingTime}</td>
                  <td>
                    <button className="btn btn-warning btn-sm update-btn" style={{marginRight: "10px", backgroundColor: "lightyellow",color: "black"}} onClick={()=>updateSlots(data)}>Update</button>
                    <button
                      className="btn btn-danger btn-sm delete-btn"
                      onClick={(event)=>handleDelete(event,data._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>))}
              </tbody>
            </table>
          </div>
          <div className={`side-div ${divVisible ? 'show-div' : ''}`}>
            <h4 align={"center"}>ADD SLOTS</h4>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  className="form-control"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="date">Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="reportingTime">Reporting Time</label>
                <input
                  type="text"
                  className="form-control"
                  id="reportingTime"
                  name="reportingTime"
                  value={formData.reportingTime}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="type">Type</label>
                <select
                  className="form-control"
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Type</option>
                  <option value="ITEP">ITEP</option>
                  <option value="BREP">BREP</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="capacity">Capacity</label>
                <input
                  type="number"
                  className="form-control"
                  id="capacity"
                  name="capacity"
                  value={formData.capacity}
                  onChange={handleChange}
                  required
                />
              </div>
              {formData._id ? <br/>:(<div className="form-group">
                <label htmlFor="examPhase">Exam Phase</label>
                <select
                  className="form-control"
                  id="examPhase"
                  name="examPhase"
                  value={formData.examPhase}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Exam Phase</option>
                  <option value="Written">Written</option>
                  <option value="Interview">Interview</option>
                </select>
              </div>)}
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySlots;
