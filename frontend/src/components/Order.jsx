import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContextProvider";
import toast from "react-hot-toast";
import axios from "axios";

const Order = () => {
    const { cartItems, token } = useContext(AppContext);

    // ================= ORDER STATE =================

    const [order, setOrder] = useState({
        firstName: "",
        lastName: "",
        email: "",
        zipCode: "",
        street: "",
        city: "",
        state: "",
        country: "",
        phoneNumber: "",
    });

    // ================= SUBTOTAL STATE =================

    const [subtotal, setSubtotal] = useState(0);

    // ================= HANDLE INPUT CHANGE =================

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setOrder((prevOrder) => ({
            ...prevOrder,
            [name]: value,
        }));
    };

    // ================= CALCULATE SUBTOTAL =================

    useEffect(() => {
        let sum = 0;

        cartItems.forEach((cartItem) => {
            sum += cartItem.foodId.price * cartItem.quantity;
        });

        setSubtotal(sum);
    }, [cartItems]);

    // ================= TOTAL =================

    const deliveryFee = cartItems.length > 0 ? 5 : 0;

    const total = subtotal + deliveryFee;

    // ================= PLACE ORDER =================

    const placeOrder = async (e) => {
        e.preventDefault();

        if (!token) {
            toast.error("Please login first");
            return;
        }

        if (cartItems.length === 0) {
            toast.error("Your cart is empty");
            return;
        }

        try {
            const orderItems = [];

            cartItems.forEach((cartItem) => {
                orderItems.push({
                    ...cartItem.foodId,
                    quantity: cartItem.quantity,
                });
            });

            const orderData = {
                address: order,
                items: orderItems,
                amount: total,
            };

            const response = await axios.post(
                "/api/order/place-order",
                orderData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (response.data.success) {
                const { session_url } = response.data;

                window.location.replace(session_url);
            } else {
                toast.error(
                    response.data.message || "Error placing order"
                );
            }
        } catch (error) {
            toast.error(
                error.response?.data?.message ||
                    error.message
            );
        }
    };

    // ================= JSX =================

    return (
        <div className="container my-5">

            <form onSubmit={placeOrder}>

                <div className="row">

                    {/* ================= LEFT SIDE ================= */}

                    <div className="col-md-7 pe-md-5">

                        <h3 className="fw-bold mb-4">
                            Delivery Information
                        </h3>

                        <div className="row g-3">

                            {/* First Name */}

                            <div className="col-sm-6">
                                <input
                                    type="text"
                                    name="firstName"
                                    className="form-control py-2"
                                    placeholder="First name"
                                    required
                                    value={order.firstName}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Last Name */}

                            <div className="col-sm-6">
                                <input
                                    type="text"
                                    name="lastName"
                                    className="form-control py-2"
                                    placeholder="Last name"
                                    required
                                    value={order.lastName}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Email */}

                            <div className="col-12">
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control py-2"
                                    placeholder="Email address"
                                    required
                                    value={order.email}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Street */}

                            <div className="col-12">
                                <input
                                    type="text"
                                    name="street"
                                    className="form-control py-2"
                                    placeholder="Street"
                                    required
                                    value={order.street}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* City */}

                            <div className="col-sm-6">
                                <input
                                    type="text"
                                    name="city"
                                    className="form-control py-2"
                                    placeholder="City"
                                    required
                                    value={order.city}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* State */}

                            <div className="col-sm-6">
                                <input
                                    type="text"
                                    name="state"
                                    className="form-control py-2"
                                    placeholder="State"
                                    required
                                    value={order.state}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Zip Code */}

                            <div className="col-sm-6">
                                <input
                                    type="text"
                                    name="zipCode"
                                    className="form-control py-2"
                                    placeholder="Zip code"
                                    required
                                    value={order.zipCode}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Country */}

                            <div className="col-sm-6">
                                <input
                                    type="text"
                                    name="country"
                                    className="form-control py-2"
                                    placeholder="Country"
                                    required
                                    value={order.country}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Phone */}

                            <div className="col-12">
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    className="form-control py-2"
                                    placeholder="Phone"
                                    required
                                    value={order.phoneNumber}
                                    onChange={handleChange}
                                />
                            </div>

                        </div>
                    </div>

                    {/* ================= RIGHT SIDE ================= */}

                    <div className="col-md-5 mt-5 mt-md-0">

                        <h3 className="fw-bold mb-4">
                            Cart Totals
                        </h3>

                        <table className="table">

                            <tbody>

                                {/* Subtotal */}

                                <tr>
                                    <td className="text-secondary">
                                        Subtotal
                                    </td>

                                    <td className="text-end">
                                        ${subtotal.toFixed(2)}
                                    </td>
                                </tr>

                                {/* Delivery Fee */}

                                <tr>
                                    <td className="text-secondary">
                                        Delivery Fee
                                    </td>

                                    <td className="text-end">
                                        ${deliveryFee.toFixed(2)}
                                    </td>
                                </tr>

                                {/* Total */}

                                <tr className="fw-bold">
                                    <td>
                                        Total
                                    </td>

                                    <td className="text-end">
                                        ${total.toFixed(2)}
                                    </td>
                                </tr>

                            </tbody>

                        </table>

                        {/* Proceed To Payment */}

                        <button
                            type="submit"
                            className="btn text-white px-5 py-2 mt-4 fw-medium"
                            style={{
                                backgroundColor: "#02ab95",
                                borderRadius: "4px",
                            }}
                        >
                            PROCEED TO PAYMENT
                        </button>

                    </div>

                </div>

            </form>

        </div>
    );
};

export default Order;