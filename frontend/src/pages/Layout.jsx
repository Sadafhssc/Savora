import React from "react";
import { Outlet } from "react-router-dom";
import SidePanel from "../components/SidePanel";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <>
     <Navbar />
      <div className="d-flex">
        <SidePanel />

        <div className="flex-grow-1">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;