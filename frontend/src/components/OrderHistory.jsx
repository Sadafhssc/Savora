import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const OrderHistory = () => {
    const [orders, setOrders] = useState([]);

    const getOrders = async () => {
        try {
            const response = await axios.get("/api/order/orders", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });

            if (response.data.success) {
                setOrders(response.data.orders);
            } else {
                setOrders([]);
            }

        } catch (error) {
            toast.error(
                error.response?.data?.message || error.message
            );
        }
    };

    useEffect(() => {
        getOrders();
    }, []);

    const getStatusDotColor = (status) => {
        if (status === "Food Processing") {
            return "#02ab95"; // green
        }

        return "#dc3545"; // red
    };

    return (
        <div
            className="container-fluid"
            style={{
                backgroundColor: "#f8f9fa",
                minHeight: "100vh",
                padding: "35px 45px",
            }}
        >

            {/* Heading */}
            <div className="mb-4">
                <h2
                    className="fw-bold mb-1"
                    style={{
                        color: "#222",
                        fontSize: "28px",
                    }}
                >
                    My Orders
                </h2>

                <p
                    className="text-secondary mb-0"
                    style={{
                        fontSize: "14px",
                    }}
                >
                    View and track your orders
                </p>
            </div>

            {/* No Orders */}
            {orders.length === 0 ? (
                <div
                    className="bg-white border rounded-3 text-center py-5"
                    style={{
                        minHeight: "250px",
                    }}
                >
                    <h5
                        className="fw-normal text-secondary"
                        style={{
                            marginTop: "50px",
                        }}
                    >
                        No orders found
                    </h5>
                </div>
            ) : (

                orders.map((order) => {

                    const totalItems = order.items.reduce(
                        (total, item) =>
                            total + item.quantity,
                        0
                    );

                    const itemNames = order.items
                        .map(
                            (item) =>
                                `${item.name} x ${item.quantity}`
                        )
                        .join(", ");

                    return (
                        <div
                            key={order._id}
                            className="bg-white border rounded-3 shadow-sm mb-4"
                            style={{
                                padding: "25px",
                            }}
                        >

                            <div className="row g-4">

                                {/* Order Icon */}
                                <div className="col-auto">
                                    <div
                                        className="d-flex align-items-center justify-content-center"
                                        style={{
                                            width: "60px",
                                            height: "60px",
                                            backgroundColor: "#e8faf7",
                                            borderRadius: "10px",
                                            fontSize: "28px",
                                        }}
                                    >
                                        📦
                                    </div>
                                </div>


                                {/* Order Information */}
                                <div className="col">

                                    <div className="row g-4">

                                        {/* Items */}
                                        <div className="col-lg-5 col-md-6">

                                            <p
                                                className="text-secondary mb-1"
                                                style={{
                                                    fontSize: "12px",
                                                }}
                                            >
                                                ORDER ITEMS
                                            </p>

                                            <p
                                                className="fw-semibold mb-0"
                                                style={{
                                                    color: "#333",
                                                    fontSize: "15px",
                                                    lineHeight: "24px",
                                                }}
                                            >
                                                {itemNames}
                                            </p>

                                        </div>


                                        {/* Total Items */}
                                        <div className="col-lg-2 col-md-3">

                                            <p
                                                className="text-secondary mb-1"
                                                style={{
                                                    fontSize: "12px",
                                                }}
                                            >
                                                ITEMS
                                            </p>

                                            <p
                                                className="fw-semibold mb-0"
                                                style={{
                                                    color: "#333",
                                                    fontSize: "15px",
                                                }}
                                            >
                                                {totalItems}
                                            </p>

                                        </div>


                                        {/* Amount */}
                                        <div className="col-lg-2 col-md-3">

                                            <p
                                                className="text-secondary mb-1"
                                                style={{
                                                    fontSize: "12px",
                                                }}
                                            >
                                                TOTAL
                                            </p>

                                            <p
                                                className="fw-bold mb-0"
                                                style={{
                                                    color: "#02ab95",
                                                    fontSize: "16px",
                                                }}
                                            >
                                                ${order.amount}
                                            </p>

                                        </div>


                                        {/* Status */}
                                        <div className="col-lg-3 col-md-6">

                                            <p
                                                className="text-secondary mb-1"
                                                style={{
                                                    fontSize: "12px",
                                                }}
                                            >
                                                STATUS
                                            </p>

                                            <div
                                                className="d-flex align-items-center"
                                            >

                                                {/* Status Dot */}
                                                <span
                                                    style={{
                                                        width: "9px",
                                                        height: "9px",
                                                        minWidth: "9px",
                                                        borderRadius: "50%",
                                                        backgroundColor:
                                                            getStatusDotColor(
                                                                order.status
                                                            ),
                                                        display: "inline-block",
                                                        marginRight: "8px",
                                                    }}
                                                ></span>

                                                {/* Status Text */}
                                                <span
                                                    style={{
                                                        color: "#555",
                                                        fontSize: "14px",
                                                        fontWeight: "500",
                                                    }}
                                                >
                                                    {order.status ||
                                                        "Food Processing"}
                                                </span>

                                            </div>

                                        </div>

                                    </div>


                                    {/* Divider */}
                                    <hr
                                        style={{
                                            borderColor: "#eee",
                                            margin: "20px 0",
                                        }}
                                    />


                                    {/* Bottom Information */}
                                    <div className="row g-4">

                                        {/* Customer */}
                                        <div className="col-lg-4 col-md-6">

                                            <p
                                                className="text-secondary mb-2"
                                                style={{
                                                    fontSize: "12px",
                                                }}
                                            >
                                                CUSTOMER
                                            </p>

                                            <p
                                                className="fw-semibold mb-1"
                                                style={{
                                                    color: "#333",
                                                    fontSize: "14px",
                                                }}
                                            >
                                                {
                                                    order.address?.firstName
                                                }{" "}
                                                {
                                                    order.address?.lastName
                                                }
                                            </p>

                                            <p
                                                className="text-secondary mb-0"
                                                style={{
                                                    fontSize: "13px",
                                                }}
                                            >
                                                {
                                                    order.address?.phone
                                                }
                                            </p>

                                        </div>


                                        {/* Delivery Address */}
                                        <div className="col-lg-5 col-md-6">

                                            <p
                                                className="text-secondary mb-2"
                                                style={{
                                                    fontSize: "12px",
                                                }}
                                            >
                                                DELIVERY ADDRESS
                                            </p>

                                            <p
                                                className="text-secondary mb-0"
                                                style={{
                                                    fontSize: "13px",
                                                    lineHeight: "21px",
                                                }}
                                            >
                                                {
                                                    order.address?.street
                                                }

                                                <br />

                                                {
                                                    order.address?.city
                                                }
                                                ,{" "}
                                                {
                                                    order.address?.state
                                                }
                                                ,{" "}
                                                {
                                                    order.address?.zipcode
                                                }

                                                <br />

                                                {
                                                    order.address?.country
                                                }
                                            </p>

                                        </div>


                                        {/* Payment */}
                                        <div className="col-lg-3 col-md-6">

                                            <p
                                                className="text-secondary mb-2"
                                                style={{
                                                    fontSize: "12px",
                                                }}
                                            >
                                                PAYMENT
                                            </p>

                                            <span
                                                className="badge px-3 py-2"
                                                style={{
                                                    backgroundColor:
                                                        order.payment
                                                            ? "#e7f8f1"
                                                            : "#fff3cd",

                                                    color:
                                                        order.payment
                                                            ? "#198754"
                                                            : "#856404",

                                                    fontWeight: "500",
                                                    borderRadius: "5px",
                                                }}
                                            >
                                                {order.payment
                                                    ? "Paid"
                                                    : "Pending"}
                                            </span>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>
                    );
                })
            )}

        </div>
    );
};

export default OrderHistory;