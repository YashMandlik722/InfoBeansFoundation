import { validationResult } from "express-validator";
import { user } from "../model/userModel.js"
import bcrypt from "bcryptjs";

export const signUp = async(req,res)=>{
    const {password} = req.body;

    try{
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json({ message: "Bad request" });
        }

        const saltKey = bcrypt.genSaltSync(10);
        const encryptedPassword = bcrypt.hashSync(password, saltKey);
        req.body.password = encryptedPassword;

        const User = await user.create(req.body);

        return res.status(201).json({message:"User Sign-Up Success",User});

    }catch(err){
        console.log("Error In usercontroller's signUp");
        console.log(err);
        res.status(500).json({error:"Internal Server Error In usercontroller's signUp"})   
    }
}

export const signIn = async(request,response)=>{
    try {
        let { email, password } = request.body;
        let User = await user.findOne({ email });
        if (User) {
            let status = bcrypt.compareSync(password, User.password);
            return status ? response.status(200).json({ message: "Sign in success..", User }) : response.status(401).json({ error: "Bad request | invalid password" })
        }
        else
            return response.status(401).json({ error: "Bad request | invalid email id" });
    }
    catch (err) {
        console.log("Error In usercontroller's signIn");
        console.log(err);
        return response.status(500).json({ error: "Internal Server Error In usercontroller's signIn" });
    }
}