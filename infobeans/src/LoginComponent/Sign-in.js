import { Link, useNavigate } from "react-router-dom";
import { setUser } from "../reduxConfig/UserSlice";
import { useDispatch } from "react-redux";
import axios from "axios"
import './Sign-in.css'
import { useRef } from "react";
import {ToastContainer, toast} from "react-toastify"

function SignIn() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const email = useRef();
    const password = useRef();
    const handleSubmit = async (event) => {
        event.preventDefault();
        // SEND DATA TO BACK-END
        try {
            const response = await sendData();
            if (response.data.User) {
                dispatch(setUser(response.data.User))
                toast.success(response.data.message)
                // navigate("/");
                setTimeout(()=>navigate("/"),5200);
            }
        } catch (err) {
            toast.error(err.response.data.error);
        }
    }
    const sendData = async () => await axios.post("http://localhost:3001/user/signIn",{email: email.current.value, password: password.current.value});
    return <>
        <ToastContainer/>
        <div className="login-container container mt-2 mb-4">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 ">
                    <input ref={email} type="email" className="form-control" placeholder="Email" required />
                </div>
                <div className="mb-3">
                    <input ref={password} type="password" className="form-control" placeholder="Password" required />
                </div>
                <button type="submit" className="btn btn-login">Login</button>
                <Link to="#" className="forgot-password mb-2">Forgot Password?</Link>
                <p>Don't have Account<Link to="/sign-up" className="forgot-password mt-0">Sign-Up</Link></p>
            </form>
        </div>
    </>
}

export default SignIn;