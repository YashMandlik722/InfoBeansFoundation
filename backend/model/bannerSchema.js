import mongoose from "mongoose";

const bannerSchema = new mongoose.Schema({
    image: {
        type: String,
        require: true
    },
    imageDescription: {
        type: String,
        require: true
    },
    status: {
        type: Boolean,
        default: true
    }
})

export default mongoose.model("banner", bannerSchema)