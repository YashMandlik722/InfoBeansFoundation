import axios from "axios";
import { useEffect, useState } from "react";
import Api from "../../../../API/API"
import { useParams } from "react-router-dom";

function SlotResult(){
    const params = useParams();
    const [result, setResult] = useState([]);
    useEffect(()=>{
        loadResult();
    },[])
    const loadResult = async()=>{
        const response = await axios.get(Api.GET_SLOT_RESULT+params.slotId);
        console.log(response.data);
        setResult(response.data.result);
    }
    return <>
        <h1>Slot Result Component</h1>
    </>
}

export default SlotResult;