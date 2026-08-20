import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { assets } from "../assets/frontend_assets/assets";
import { AppContext } from "../context/AppContextProvider";

const Navbar = () => {
    const {
        cartCount,
        token,
        isAdmin,
        logout
    } = useContext(AppContext);

    const savoraColor = "#00C2A8";

    return (
        <nav
            className="navbar navbar-expand-lg bg-white"
            style={{
                padding: "15px 0",
                position: "relative",
                zIndex: 1000
            }}
        >

            <div className="container">

                {/* ================= LOGO ================= */}

                <NavLink
                    to="/"
                    className="navbar-brand m-0"
                >
                    <img
                        src={assets.logo}
                        alt="Savora Logo"
                        style={{
                            width: "180px",
                            maxWidth: "100%",
                            cursor: "pointer"
                        }}
                    />
                </NavLink>


                {/* ================= MOBILE TOGGLER ================= */}

                <button
                    className="navbar-toggler shadow-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#savoraNavbar"
                    aria-controls="savoraNavbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    style={{
                        border: `2px solid ${savoraColor}`,
                        borderRadius: "8px",
                        padding: "5px 9px",
                        backgroundColor: "#fff",
                        color: savoraColor
                    }}
                >
                    <span
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            width: "24px",
                            height: "19px"
                        }}
                    >
                        <span
                            style={{
                                display: "block",
                                width: "24px",
                                height: "2px",
                                backgroundColor: savoraColor,
                                borderRadius: "2px"
                            }}
                        ></span>

                        <span
                            style={{
                                display: "block",
                                width: "24px",
                                height: "2px",
                                backgroundColor: savoraColor,
                                borderRadius: "2px"
                            }}
                        ></span>

                        <span
                            style={{
                                display: "block",
                                width: "24px",
                                height: "2px",
                                backgroundColor: savoraColor,
                                borderRadius: "2px"
                            }}
                        ></span>
                    </span>
                </button>


                {/* ================= NAVBAR CONTENT ================= */}

                <div
                    className="collapse navbar-collapse"
                    id="savoraNavbar"
                >

                    {/* ================= NAVIGATION ================= */}

                    <ul
                        className="
                            navbar-nav
                            mx-auto
                            align-items-lg-center
                            gap-lg-4
                            mt-3
                            mt-lg-0
                        "
                    >

                        {/* Home */}

                        <li className="nav-item">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `nav-link fw-medium ${
                                        isActive
                                            ? "border-bottom border-2"
                                            : ""
                                    }`
                                }
                                style={({ isActive }) => ({
                                    color: isActive
                                        ? savoraColor
                                        : "#666",
                                    width: "fit-content"
                                })}
                            >
                                Home
                            </NavLink>
                        </li>


                        {/* Menu */}

                        <li className="nav-item">
                            <a
                                href="#menu"
                                className="nav-link fw-medium"
                                style={{
                                    color: "#666"
                                }}
                            >
                                Menu
                            </a>
                        </li>


                        {/* About */}

                        <li className="nav-item">
                            <a
                                href="#about"
                                className="nav-link fw-medium"
                                style={{
                                    color: "#666"
                                }}
                            >
                                About
                            </a>
                        </li>


                        {/* Contact */}

                        <li className="nav-item">
                            <a
                                href="#contact"
                                className="nav-link fw-medium"
                                style={{
                                    color: "#666"
                                }}
                            >
                                Contact Us
                            </a>
                        </li>


                        {/* Orders */}

                        {token && (
                            <li className="nav-item">
                                <NavLink
                                    to="/myorders"
                                    className={({ isActive }) =>
                                        `nav-link fw-medium ${
                                            isActive
                                                ? "border-bottom border-2"
                                                : ""
                                        }`
                                    }
                                    style={({ isActive }) => ({
                                        color: isActive
                                            ? savoraColor
                                            : "#666",
                                        width: "fit-content"
                                    })}
                                >
                                    Orders
                                </NavLink>
                            </li>
                        )}


                        {/* Admin */}

                        {token && isAdmin && (
                            <li className="nav-item">
                                <NavLink
                                    to="/admin"
                                    className={({ isActive }) =>
                                        `nav-link fw-medium ${
                                            isActive
                                                ? "border-bottom border-2"
                                                : ""
                                        }`
                                    }
                                    style={({ isActive }) => ({
                                        color: isActive
                                            ? savoraColor
                                            : "#666",
                                        width: "fit-content"
                                    })}
                                >
                                    Admin
                                </NavLink>
                            </li>
                        )}

                    </ul>


                    {/* ================= RIGHT SIDE ================= */}

                    <div
                        className="
                            d-flex
                            flex-column
                            flex-lg-row
                            align-items-lg-center
                            gap-3
                            mt-3
                            mt-lg-0
                        "
                    >

                        {/* Search */}

                        <i
                            className="bi bi-search d-none d-lg-block"
                            style={{
                                fontSize: "23px",
                                cursor: "pointer",
                                color: "#333"
                            }}
                        ></i>


                        {/* Cart */}

                        <NavLink
                            to="/cart"
                            className="text-decoration-none"
                        >
                            <div className="position-relative">

                                <img
                                    src={assets.basket_icon}
                                    alt="Basket"
                                    style={{
                                        width: "28px",
                                        cursor: "pointer"
                                    }}
                                />

                                {/* Cart Count */}

                                <span
                                    className="
                                        position-absolute
                                        badge
                                        rounded-pill
                                        bg-danger
                                    "
                                    style={{
                                        top: "-7px",
                                        right: "-5px",
                                        fontSize: "10px",
                                        minWidth: "18px",
                                        height: "18px",
                                        padding: "2px 5px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}
                                >
                                    {cartCount}
                                </span>

                            </div>
                        </NavLink>


                        {/* Sign In */}

                        {!token && (
                            <button
                                className="btn"
                                style={{
                                    border: `2px solid ${savoraColor}`,
                                    borderRadius: "30px",
                                    padding: "8px 24px",
                                    color: "#555",
                                    background: "#fff",
                                    fontWeight: "500",
                                    whiteSpace: "nowrap"
                                }}
                                data-bs-toggle="modal"
                                data-bs-target="#signUpModal"
                            >
                                Sign In
                            </button>
                        )}


                        {/* Logout */}

                        {token && (
                            <button
                                className="btn"
                                onClick={logout}
                                style={{
                                    border: `2px solid ${savoraColor}`,
                                    borderRadius: "30px",
                                    padding: "8px 24px",
                                    color: "#555",
                                    background: "#fff",
                                    fontWeight: "500",
                                    whiteSpace: "nowrap"
                                }}
                            >
                                Logout
                            </button>
                        )}

                    </div>

                </div>

            </div>

        </nav>
    );
};

export default Navbar;