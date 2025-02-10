import { use, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"

function SignUp(){
    const navigate = useNavigate();
    const name = useRef();
    const email = useRef();
    const password = useRef();
    const handleSubmit = async(event)=>{
        event.preventDefault();
        try {    
            const response = await sendData();
            if(response.data.User){
                console.log(response.data);
                navigate('/')
            }
        } catch (error) {
            console.log(error);
        }
    }

    const sendData = async()=> await axios.post("http://localhost:3001/user/signUp",{name: name.current.value, email:email.current.value, password:password.current.value});
    return <>
        <div className="login-container container mt-2 mb-4">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 ">
                    <input ref={name} type="text" className="form-control" placeholder="Name" required />
                </div>
                <div className="mb-3 ">
                    <input ref={email} type="email" className="form-control" placeholder="Email" required />
                </div>
                <div className="mb-3">
                    <input ref={password} type="password" className="form-control" placeholder="Password" required />
                </div>
                <button type="submit" className="btn btn-login">Register</button>
                <Link to="#" className="forgot-password mb-3">Forgot Password?</Link>

                <p>Already have an Account<Link to="/SignIn" className="forgot-password mt-0">Sign In?</Link></p>
            </form>
            </div>
    </>
}

export default SignUp;