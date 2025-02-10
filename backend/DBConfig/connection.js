import mongoose from "mongoose";

const connectionUrl = "mongodb+srv://mandlikyash722:YashPassword@infocluster.tr8rj.mongodb.net/infodb?retryWrites=true&w=majority&appName=InfoCluster";
// const connectionUrl = "mongodb://localhost:27017/infodb";
mongoose.connect(connectionUrl).then(()=>{
    console.log("DB connected")
}).catch(err=>console.log(err))