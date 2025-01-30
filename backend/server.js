import express from "express";
import bodyParser from "body-parser";
import userRouter from "./router/userRouter.js";
import registerRouter from "./router/courseRegistrationRouter.js";
import resultRouter from "./router/resultRouter.js";
import staffRouter from "./router/staffRouter.js"
import "./DBConfig/connection.js"
const app = express();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use("/user",userRouter)
app.use("/register",registerRouter)
app.use("/result",resultRouter)
app.use("/staff",staffRouter)


app.get("/",(req,res)=>{
res.end("running")
})

app.listen(3001,()=>{
    console.log("running on localhost:3001")
})