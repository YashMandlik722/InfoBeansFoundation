//Dependencies
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";

import { fileURLToPath } from "url";

//Routers
import userRouter from "./router/userRouter.js";
import registerRouter from "./router/courseRegistrationRouter.js";
import resultRouter from "./router/resultRouter.js";
import staffRouter from "./router/staffRouter.js";
import Gallery from "./router/galleryRouter.js";
import slotRouter from "./router/slotRouter.js";
import excelRouter from "./router/excelSheetRouter.js";

//Db Connection
import "./DBConfig/connection.js";


const app = express();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,"public")))
app.use("/user", userRouter);
app.use("/course", registerRouter);
app.use("/result", resultRouter);
app.use("/excel", excelRouter);
app.use("/staff", staffRouter);
app.use("/Gallery" , Gallery)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/slot", slotRouter);
app.get("/",(req,res)=>{
    res.status(200).json({message:"OK"})
})
app.listen(3001, () => {
    console.log("running on localhost:3001");
})