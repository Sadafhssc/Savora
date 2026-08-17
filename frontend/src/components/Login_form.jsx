import React, {
    useContext,
    useState
} from "react";

import axios from "axios";
import toast from "react-hot-toast";

import { AppContext } from "../context/AppContextProvider";

const Login_form = () => {

    const {
        setToken,
        setIsAdmin
    } = useContext(AppContext);


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const validateInputs = async (e) => {

        e.preventDefault();

        try {

            const user = {
                email,
                password
            };


            const response = await axios.post(
                "/api/user/login",
                user
            );


            if (response.data.success) {

                toast.success(
                    response.data.message
                );


                // Store token
                localStorage.setItem(
                    "token",
                    response.data.token
                );


                // Store admin status
                localStorage.setItem(
                    "isAdmin",
                    response.data.isAdmin
                );


                // Update React state immediately
                setToken(response.data.token);

                setIsAdmin(
                    response.data.isAdmin
                );


                setEmail("");

                setPassword("");

            } else {

                toast.error(
                    response.data.message
                );

            }

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                error.message
            );

        }
    };


    return (
        <div
            className="modal fade"
            id="loginModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >

            <div className="modal-dialog">

                <div className="modal-content">

                    <form
                        className="container my-3"
                        onSubmit={validateInputs}
                    >

                        {/* Header */}

                        <div className="d-flex justify-content-between align-items-center mb-4">

                            <h2 className="h3 fw-bold my-3 mx-5">
                                Login
                            </h2>


                            <button
                                type="button"
                                className="btn-close me-5"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>

                        </div>


                        {/* Email */}

                        <div className="form-floating my-3 mx-5">

                            <input
                                type="email"
                                className="form-control"
                                id="floatingInput"
                                placeholder="name@example.com"
                                value={email}
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                            />

                            <label htmlFor="floatingInput">
                                Email address
                            </label>

                        </div>


                        {/* Password */}

                        <div className="form-floating my-3 mx-5">

                            <input
                                type="password"
                                className="form-control"
                                id="floatingPassword"
                                placeholder="Password"
                                value={password}
                                onChange={(e) =>
                                    setPassword(e.target.value)
                                }
                            />

                            <label htmlFor="floatingPassword">
                                Password
                            </label>

                        </div>


                        {/* Login Button */}

                        <div className="my-3 mx-5">

                            <button
                                className="btn w-100 py-2 text-light fw-medium fs-6"
                                type="submit"
                                style={{
                                    backgroundColor: "#00C2A8"
                                }}
                            >
                                Login
                            </button>

                        </div>


                        {/* Terms */}

                        <div className="form-check text-start text-secondary my-3 mx-5">

                            <input
                                className="form-check-input"
                                type="checkbox"
                                value="remember-me"
                                id="checkDefault"
                            />

                            <label
                                className="form-check-label"
                                htmlFor="checkDefault"
                            >
                                By continuing, I agree to the terms of
                                use & privacy policy
                            </label>

                        </div>


                        {/* Signup */}

                        <p className="my-3 mx-5 text-body-secondary text-center">

                            Create a new account?{" "}

                            <a
                                href="#"
                                data-bs-dismiss="modal"
                                data-bs-toggle="modal"
                                data-bs-target="#signUpModal"
                                style={{
                                    color: "#00C2A8",
                                    fontWeight: "600",
                                    cursor: "pointer"
                                }}
                            >
                                Click here
                            </a>

                        </p>

                    </form>

                </div>

            </div>

        </div>
    );
};


export default Login_form;