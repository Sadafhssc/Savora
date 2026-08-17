import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const AdminOrder = () => {
    const [orders, setOrders] = useState([]);

    // ================= GET ALL ORDERS =================

    const getOrders = async () => {
        try {
            const response = await axios.get(
                "/api/order/all-orders",
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );

            if (response.data.success) {
                setOrders(response.data.orders);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error(
                error.response?.data?.message ||
                error.message
            );
        }
    };

    // ================= LOAD ORDERS =================

    useEffect(() => {
        getOrders();
    }, []);

    // ================= UPDATE ORDER STATUS =================

    const handleStatusChange = async (orderId, status) => {
        try {
            const response = await axios.put(
                "/api/order/status",
                {
                    orderId,
                    status,
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );

            if (response.data.success) {

                // Update UI after successful backend update
                setOrders((prevOrders) =>
                    prevOrders.map((order) =>
                        order._id === orderId
                            ? {
                                  ...order,
                                  status: status,
                              }
                            : order
                    )
                );

                toast.success(
                    "Order status updated successfully"
                );

            } else {
                toast.error(response.data.message);
            }

        } catch (error) {
            toast.error(
                error.response?.data?.message ||
                error.message
            );
        }
    };

    // ================= STATUS DOT COLOR =================

    const getStatusDotColor = (status) => {

        if (status === "Food Processing") {
            return "#02ab95";
        }

        if (status === "Out for Delivery") {
            return "#ffc107";
        }

        if (status === "Delivered") {
            return "#198754";
        }

        return "#dc3545";
    };

    // ================= UI =================

    return (
        <div
            className="container-fluid"
            style={{
                backgroundColor: "#f8f9fa",
                minHeight: "100vh",
                padding: "35px 45px",
            }}
        >

            {/* ================= PAGE HEADING ================= */}

            <div className="mb-4">

                <h2
                    className="fw-bold mb-1"
                    style={{
                        color: "#222",
                        fontSize: "28px",
                    }}
                >
                    Orders
                </h2>

                <p
                    className="text-secondary mb-0"
                    style={{
                        fontSize: "14px",
                    }}
                >
                    Manage and track customer orders
                </p>

            </div>


            {/* ================= NO ORDERS ================= */}

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

                /* ================= ORDERS ================= */

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

                                {/* ================= ORDER ICON ================= */}

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


                                {/* ================= MAIN ORDER INFORMATION ================= */}

                                <div className="col">

                                    <div className="row g-4">

                                        {/* ================= ITEMS ================= */}

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


                                        {/* ================= TOTAL ITEMS ================= */}

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


                                        {/* ================= AMOUNT ================= */}

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


                                        {/* ================= STATUS ================= */}

                                        <div className="col-lg-3 col-md-6">

                                            <p
                                                className="text-secondary mb-1"
                                                style={{
                                                    fontSize: "12px",
                                                }}
                                            >
                                                STATUS
                                            </p>

                                            <div className="d-flex align-items-center">

                                                {/* STATUS DOT */}

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


                                                {/* STATUS SELECT */}

                                                <select
                                                    className="form-select form-select-sm shadow-none"
                                                    value={
                                                        order.status ||
                                                        "Food Processing"
                                                    }
                                                    onChange={(e) =>
                                                        handleStatusChange(
                                                            order._id,
                                                            e.target.value
                                                        )
                                                    }
                                                    style={{
                                                        border: "1px solid #ddd",
                                                        borderRadius: "6px",
                                                        color: "#555",
                                                        fontSize: "13px",
                                                        height: "38px",
                                                        maxWidth: "180px",
                                                    }}
                                                >

                                                    <option value="Food Processing">
                                                        Food Processing
                                                    </option>

                                                    <option value="Out for Delivery">
                                                        Out for Delivery
                                                    </option>

                                                    <option value="Delivered">
                                                        Delivered
                                                    </option>

                                                </select>

                                            </div>

                                        </div>

                                    </div>


                                    <hr
                                        style={{
                                            borderColor: "#eee",
                                            margin: "20px 0",
                                        }}
                                    />


                                    {/* ================= CUSTOMER INFORMATION ================= */}

                                    <div className="row g-4">

                                        {/* ================= CUSTOMER ================= */}

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
                                                    order.address
                                                        ?.firstName
                                                }{" "}

                                                {
                                                    order.address
                                                        ?.lastName
                                                }
                                            </p>

                                            <p
                                                className="text-secondary mb-0"
                                                style={{
                                                    fontSize: "13px",
                                                }}
                                            >
                                                {
                                                    order.address
                                                        ?.phone
                                                }
                                            </p>

                                        </div>


                                        {/* ================= ADDRESS ================= */}

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
                                                    order.address
                                                        ?.street
                                                }

                                                <br />

                                                {
                                                    order.address
                                                        ?.city
                                                }
                                                ,{" "}

                                                {
                                                    order.address
                                                        ?.state
                                                }
                                                ,{" "}

                                                {
                                                    order.address
                                                        ?.zipcode
                                                }

                                                <br />

                                                {
                                                    order.address
                                                        ?.country
                                                }

                                            </p>

                                        </div>


                                        {/* ================= PAYMENT ================= */}

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

export default AdminOrder;