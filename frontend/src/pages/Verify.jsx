import React, {
    useContext,
    useEffect,
    useRef
} from "react";

import {
    useSearchParams,
    useNavigate
} from "react-router-dom";

import axios from "axios";
import toast from "react-hot-toast";

import { AppContext } from "../context/AppContextProvider";


const Verify = () => {

    const [searchParams] = useSearchParams();

    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");

    const { getCartItems } = useContext(AppContext);

    const navigate = useNavigate();

    // Prevent verification from running multiple times
    const verificationStarted = useRef(false);


    useEffect(() => {

        if (
            !success ||
            !orderId ||
            verificationStarted.current
        ) {
            return;
        }

        verificationStarted.current = true;


        const verifyPayment = async () => {

            try {

                const response = await axios.post(
                    "/api/order/verify",
                    {
                        success,
                        orderId
                    }
                );


                if (response.data.success) {

                    toast.success("Payment successful!");

                    await getCartItems();

                    navigate("/myorders", {
                        replace: true
                    });

                } else {

                    toast.error("Payment failed");

                    navigate("/", {
                        replace: true
                    });

                }

            } catch (error) {

                toast.error(
                    error.response?.data?.message ||
                    error.message
                );

                navigate("/", {
                    replace: true
                });

            }

        };


        verifyPayment();

    }, [success, orderId, navigate, getCartItems]);


    return (
        <div className="container text-center my-5">

            <h2>
                Processing your payment...
            </h2>

            <p>
                Please wait...
            </p>

        </div>
    );
};


export default Verify;