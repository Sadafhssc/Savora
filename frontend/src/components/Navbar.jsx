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

    return (
        <nav className="container py-4">

            <div className="d-flex justify-content-between align-items-center">

                {/* ================= LOGO ================= */}

                <NavLink
                    to="/"
                    className="text-decoration-none"
                >
                    <img
                        src={assets.logo}
                        alt="Savora Logo"
                        style={{
                            width: "180px",
                            cursor: "pointer"
                        }}
                    />
                </NavLink>


                {/* ================= NAVIGATION ================= */}

                <ul className="nav gap-4">

                    {/* Home */}

                    <li className="nav-item">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `nav-link p-0 fw-medium fs-6 ${
                                    isActive
                                        ? "text-dark border-bottom border-2 border-dark pb-1"
                                        : "text-secondary"
                                }`
                            }
                        >
                            Home
                        </NavLink>
                    </li>


                    {/* Menu */}

                    <li className="nav-item">
                        <a
                            href="#menu"
                            className="nav-link p-0 text-secondary fw-medium fs-6"
                        >
                            Menu
                        </a>
                    </li>


                    {/* About */}

                    <li className="nav-item">
                        <a
                            href="#about"
                            className="nav-link p-0 text-secondary fw-medium fs-6"
                        >
                            About
                        </a>
                    </li>


                    {/* Contact */}

                    <li className="nav-item">
                        <a
                            href="#contact"
                            className="nav-link p-0 text-secondary fw-medium fs-6"
                        >
                            Contact Us
                        </a>
                    </li>


                    {/* My Orders */}

                    {token && (
                        <li className="nav-item">
                            <NavLink
                                to="/myorders"
                                className={({ isActive }) =>
                                    `nav-link p-0 fw-medium fs-6 ${
                                        isActive
                                            ? "text-dark border-bottom border-2 border-dark pb-1"
                                            : "text-secondary"
                                    }`
                                }
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
                                    `nav-link p-0 fw-medium fs-6 ${
                                        isActive
                                            ? "text-dark border-bottom border-2 border-dark pb-1"
                                            : "text-secondary"
                                    }`
                                }
                            >
                                Admin
                            </NavLink>
                        </li>
                    )}

                </ul>


                {/* ================= RIGHT SIDE ================= */}

                <div className="d-flex align-items-center gap-4">

                    {/* Search */}

                    <i
                        className="bi bi-search"
                        style={{
                            fontSize: "27px",
                            cursor: "pointer"
                        }}
                    ></i>


                    {/* Cart */}

                    <NavLink to="/cart">

                        <div className="position-relative">

                            <img
                                src={assets.basket_icon}
                                alt="Basket"
                                style={{
                                    width: "28px",
                                    cursor: "pointer"
                                }}
                            />

                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {cartCount}
                            </span>

                        </div>

                    </NavLink>


                    {/* Sign In */}

                    {!token && (
                        <button
                            className="btn"
                            style={{
                                border: "2px solid #00C2A8",
                                borderRadius: "30px",
                                padding: "8px 24px",
                                color: "#555",
                                background: "#fff",
                                fontWeight: "500"
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
                                border: "2px solid #00C2A8",
                                borderRadius: "30px",
                                padding: "8px 24px",
                                color: "#555",
                                background: "#fff",
                                fontWeight: "500"
                            }}
                        >
                            Logout
                        </button>
                    )}

                </div>

            </div>

        </nav>
    );
};

export default Navbar;