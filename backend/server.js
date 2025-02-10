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

//Db Connection
import "./DBConfig/connection.js";


const app = express();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname);


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/user", userRouter);
app.use("/register", registerRouter);
app.use("/result", resultRouter);
app.use("/staff", staffRouter);
app.use("/Gallery" , Gallery)
app.use("/gallery" ,express.static("gallery"));
app.listen(3001, () => {
    console.log("running on localhost:3001");
})