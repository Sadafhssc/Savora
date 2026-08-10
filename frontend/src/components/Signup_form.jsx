import React, { useState } from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Signup_form = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const validateInputs=(e)=>{
        e.preventDefault();
        if (!username.trim() || !email.trim() || !password.trim()){
            toast.error('All fields are required');
            return;
        }else if(password.length<8){
            toast.error('Password should be atleast 8 characters');
            return;
        }
        toast.success('Account has been created');
        setUsername('');
        setEmail('');
        setPassword('');
    }
    return (
        <>
            <div className="modal fade" id="signUpModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form className="container my-3" onSubmit={validateInputs}>
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <h2 className="h3 fw-bold my-3 mx-5">Sign Up</h2>
                                <button
                                    type="button"
                                    className="btn-close me-5"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>

                            <div className="form-floating my-3 mx-5">
                                <input type="text" className="form-control" id="floatingUsername" placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)} />
                                <label htmlFor="floatingUsername">Username</label>
                            </div>
                            <div className="form-floating my-3 mx-5">
                                <input type="email" className="form-control" id="floatingEmail" placeholder="name@example.com" value={email} onChange={(e)=>setEmail(e.target.value)} />
                                <label htmlFor="floatingEmail">Email address</label>
                            </div>
                            <div className="form-floating my-3 mx-5">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                                <label htmlFor="floatingPassword">Password</label>
                            </div>
                            <div className="form-floating my-3 mx-5">
                                <button className="btn w-100 py-2 text-light fw-medium fs-6" type="submit" style={{ backgroundColor: "#00C2A8" }}>Create Account</button></div>
                            <div className="form-check text-start text-secondary my-3 mx-5"> <input className="form-check-input" type="checkbox" value="remember-me" id="checkDefault" />
                                <label className="form-check-label" htmlFor="checkDefault">
                                    By continuing, I agree to the terms of use & privacy policy
                                </label> </div> <p className="my-3 mx-5 text-body-secondary text-center">Already have an account? <a style={{ color: "#00C2A8", fontWeight: "600", cursor: "pointer" }} href="#" data-bs-dismiss="modal" data-bs-toggle="modal"
                                    data-bs-target="#loginModal">Login here</a></p> </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup_form
