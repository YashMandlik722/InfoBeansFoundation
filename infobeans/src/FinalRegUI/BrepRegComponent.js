
import "./ItepRegStyle.css"
import {useEffect, useReducer, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios"
function BrepRegComponent(){

    const [regData,setRegData] = useState([]);

    const navigate = useNavigate()
    const location = useLocation()

    const loadData = async()=>{
        try {
        const response = await axios.get("http://localhost:3001/course/regForPerticularCourse/BREP");
        setRegData(response.data.list);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        loadData();
    },[])

    const viewdetail = (reg)=>{
        navigate("/viewDetailBrep",{state:reg});
    }

    return <>
        <div className="registration-container">
        <h2 className="registration-title">BREP Registrations</h2>
        <table className="registration-table">
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {regData.map((reg,index)=>
                <tr>
                    <td>{index+1}</td>
                    <td>{reg.name}</td>
                    <td>{reg.email}</td>
                    <td><button className="btn btn-danger" onClick={()=>{viewdetail(reg)}}>View Details</button></td>
                </tr>
                )}
            </tbody>
        </table>
    </div>
    </>
}
export default BrepRegComponent ;