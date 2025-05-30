import Banner from "../model/bannerSchema.js"
export const addBanner = async(req,res)=>{
    try {
        //For Multer
        // req.body.image_url = "http://localhost:3001/"+req.files.image[0].filename;

        await Banner.create(req.body);
        res.status(201).json({msg: "Banner added success", status: true})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: "Internal server error"})
    }
}

export const allBanner = async(req,res)=>{
    try {
        const bannerData = await Banner.find();
        res.status(200).json({msg: "All banner data", bannerData});
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Internal server error"})
    }
}

export const activeUnactive = async(req,res)=>{
    try {
        const id = req.body.id;
        delete req.body.id;
        const obj = await Banner.findByIdAndUpdate(id, req.body,{new:true});
        res.status(200).json({msg: "update success", updateBanner: obj});
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Internal server error"});
    }
}
export const deleteBanner = async (req,res)=>{
    try {
        const id = req.body.id;
        delete req.body.id;
        const obj = await Banner.findByIdAndDelete(id);
        if(!obj)
            return res.status(404).json({msg: "no banner found"});
        return res.status(200).json({msg: "deleted success"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Internal server error"});
    }
}