import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/admin_assets/assets";

const SidePanel = () => {
  return (
    <div
      className="bg-white border-bottom"
      style={{
        width: "100%",
        minHeight: "auto",
      }}
    >
      <ul
        className="nav w-100 m-0 p-0 d-flex flex-row flex-lg-column"
        style={{
          listStyle: "none",
        }}
      >
        {/* Add Items */}
        <li
          className="nav-item"
          style={{
            width: "33.333%",
          }}
        >
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              `nav-link d-flex align-items-center justify-content-center gap-2 ${
                isActive
                  ? "bg-light fw-semibold"
                  : "text-dark"
              }`
            }
            style={({ isActive }) => ({
              minHeight: "65px",
              padding: "12px 5px",
              borderBottom: isActive
                ? "4px solid #0d6efd"
                : "4px solid transparent",
              borderRight: "none",
              whiteSpace: "nowrap",
            })}
          >
            <img
              src={assets.add_icon}
              alt=""
              width={22}
              height={22}
            />
            <span>Add Items</span>
          </NavLink>
        </li>

        {/* List Items */}
        <li
          className="nav-item"
          style={{
            width: "33.333%",
          }}
        >
          <NavLink
            to="/admin/list-items"
            className={({ isActive }) =>
              `nav-link d-flex align-items-center justify-content-center gap-2 ${
                isActive
                  ? "bg-light fw-semibold"
                  : "text-dark"
              }`
            }
            style={({ isActive }) => ({
              minHeight: "65px",
              padding: "12px 5px",
              borderBottom: isActive
                ? "4px solid #0d6efd"
                : "4px solid transparent",
              borderRight: "none",
              whiteSpace: "nowrap",
            })}
          >
            <img
              src={assets.order_icon}
              alt=""
              width={22}
              height={22}
            />
            <span>List Items</span>
          </NavLink>
        </li>

        {/* Orders */}
        <li
          className="nav-item"
          style={{
            width: "33.333%",
          }}
        >
          <NavLink
            to="/admin/orders"
            className={({ isActive }) =>
              `nav-link d-flex align-items-center justify-content-center gap-2 ${
                isActive
                  ? "bg-light fw-semibold"
                  : "text-dark"
              }`
            }
            style={({ isActive }) => ({
              minHeight: "65px",
              padding: "12px 5px",
              borderBottom: isActive
                ? "4px solid #0d6efd"
                : "4px solid transparent",
              borderRight: "none",
              whiteSpace: "nowrap",
            })}
          >
            <img
              src={assets.order_icon}
              alt=""
              width={22}
              height={22}
            />
            <span>Orders</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SidePanel;