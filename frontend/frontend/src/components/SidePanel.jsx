import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/admin_assets/assets";

const SidePanel = () => {
  return (
    <div
      className="bg-white border-end"
      style={{
        width: "260px",
        minHeight: "100vh",
      }}
    >
      <ul className="nav flex-column pt-4">


        {/* Add Blogs */}
        <li className="nav-item">
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              `nav-link d-flex align-items-center gap-3 py-3 px-4 ${
                isActive ? "bg-light border-end border-4 border-primary fw-semibold" : "text-dark"
              }`
            }
          >
            <img src={assets.add_icon} alt="" width={22} height={22} />
            <span>Add Items</span>
          </NavLink>
        </li>

        {/* Blog Lists */}
        <li className="nav-item">
          <NavLink
            to="/admin/list-items"
            className={({ isActive }) =>
              `nav-link d-flex align-items-center gap-3 py-3 px-4 ${
                isActive ? "bg-light border-end border-4 border-primary fw-semibold" : "text-dark"
              }`
            }
          >
            <img src={assets.order_icon} alt="" width={22} height={22} />
            <span>List Items</span>
          </NavLink>
        </li>

        {/* Comments */}
        <li className="nav-item">
          <NavLink
            to="/admin/orders"
            className={({ isActive }) =>
              `nav-link d-flex align-items-center gap-3 py-3 px-4 ${
                isActive ? "bg-light border-end border-4 border-primary fw-semibold" : "text-dark"
              }`
            }
          >
            <img src={assets.order_icon} alt="" width={22} height={22} />
            <span>Orders</span>
          </NavLink>
        </li>

      </ul>
    </div>
  );
};

export default SidePanel;