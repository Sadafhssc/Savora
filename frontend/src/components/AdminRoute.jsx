import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

import { AppContext } from "../context/AppContextProvider";


const AdminRoute = ({ children }) => {

    const {
        token,
        isAdmin
    } = useContext(AppContext);


    if (!token || !isAdmin) {
        return <Navigate to="/" replace />;
    }


    return children;
};


export default AdminRoute;