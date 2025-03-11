import axios from "axios";
import { useEffect, useState } from "react";
import API from "../API/API";

function BannerSetting() {
    const [banner, setBanner] = useState(null);
    useEffect(() => {
        loadBanner();
    }, [])
    const loadBanner = async () => {
        const response = await axios.get(API.GET_ALL_BANNER);
        setBanner(response.data.bannerData);
    }
    const updateActive = async(obj,index)=>{
        try {
            const response = await axios.patch(API.UPDATE_BANNER_STATUS,obj);
            let arr = banner;
            arr.splice(index,1,response.data.updateBanner)
            setBanner([...arr])
        } catch (error) {
            console.log(error)
        }
    }
    return <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-8 col-12">
                    <div className="row">
                    {banner?.map((data, index) => (<div className="card col-6" key={index}>
                        <img className="card-img-top" src={data.image} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Banner Image</h5>
                            <p className="card-text">{data.imageDescription}</p>
                            <button className="btn btn-sm" onClick={()=>updateActive(data.status ? {id: data._id, status: false} : {id: data._id, status: true},index)}>{data.status ? "DeActive" : "Active"}</button>
                        </div>
                    </div>))}
                    </div>
                </div>
                <div className="col-md-4 col-12">hello</div>
            </div>
        </div>
    </>
}


export default BannerSetting;