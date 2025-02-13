import { validationResult } from "express-validator";
import { user } from "../model/userModel.js"
import bcrypt from "bcryptjs";
import sendMail from "../helper/sendMail.js";

//For User Sign Up
export const signUp = async (req, res) => {
    const { email, password, name } = req.body;

    try {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json({ message: "Bad request" });
        }

        let status = await user.findOne({ email });
        if(status){
            return res.status(400).json({ message: "Email is already registered" });
        }

        const saltKey = bcrypt.genSaltSync(10);
        const encryptedPassword = bcrypt.hashSync(password, saltKey);
        req.body.password = encryptedPassword;

        const User = await user.create(req.body);

        // sendMail(email,
        //     "Welcome Back to InfoBeans Foundation!",
        //     `Dear ${User.name},\n\nThank you for logging into InfoBeans Foundation! \nWe're delighted to have you back.\nStay tuned for updates and ways to get involved. Together, we can make a positive impact!\n\nBest Regards\nInfoBeans Foundation`
        // );

        return res.status(201).json({ message: "User Sign-Up Success", User });

    } catch (err) {
        console.log("Error In usercontroller's signUp");
        console.log(err);
        res.status(500).json({ error: "Internal Server Error In usercontroller's signUp" })
    }
}

//For User Sign In
export const signIn = async (request, response) => {
    try {
        let { email, password } = request.body;
        let User = await user.findOne({ email });
        if (User) {
            let status = bcrypt.compareSync(password, User.password);

            if (status) {
                // sendMail(email,
                //     "Welcome Back to InfoBeans Foundation!",
                //     `Dear ${User.name},\n\nThank you for logging into InfoBeans Foundation! \nWe're delighted to have you back.\nStay tuned for updates and ways to get involved. Together, we can make a positive impact!\n\nBest Regards\nInfoBeans Foundation`
                // );
                return response.status(200).json({ message: "Sign in success..", User });
            } else {
                return response.status(401).json({ error: "Bad request | invalid password" })
            }


        }
        else
            return response.status(401).json({ error: "User not found | invalid email id" });
    }
    catch (err) {
        console.log("Error In usercontroller's signIn");
        console.log(err);
        return response.status(500).json({ error: "Internal Server Error In usercontroller's signIn" });
    }
}

//Getting User List
export const getUserList = async (request, response, next) => {
    try{
        const list = await user.find();
        if (list.length) {
            return response.status(200).json({ Message: list });
        }
        else {
            console.log("No user found (In userController's getUserList)");
            return response.status(404).json({ error: "No user Found" });
        }
    }catch(err){
        console.log("Error In usercontroller's getUserList");
        console.log(err);
        response.status(500).json({ error: "Internal Server Error In usercontroller's getUserList" })
    }
}

//Getting User By Id
export const getUserById = async (request, response, next) => {
    let id = request.params.id;
    user.findOne({ _id: id })
        .then(result => {
            if (result) {
                return response.status(200).json({ message: result });
            } else {
                return response.status(404).json({ error: "User not found" });
            }
        })
        .catch(err => {
            console.log("Error In usercontroller's getUserById");
            console.log(err);
            res.status(500).json({ error: "Internal Server Error In usercontroller's getUserById" })
        });
}

