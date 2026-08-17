import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";
import Verify from "./pages/Verify";
import MyOrders from "./pages/MyOrders";

import AddItemPage from "./pages/admin/AddItemPage";
import ListItemsPage from "./pages/admin/ListItemsPage";

import AdminOrder from "./components/AdminOrder";

import Layout from "./pages/Layout";
import AdminRoute from "./components/AdminRoute";

import { Toaster } from "react-hot-toast";

const App = () => {
    return (
        <>
            <Toaster />

            <Routes>

                {/* ================= HOME ================= */}

                <Route
                    path="/"
                    element={<Home />}
                />


                {/* ================= CART ================= */}

                <Route
                    path="/cart"
                    element={<Cart />}
                />


                {/* ================= PLACE ORDER ================= */}

                <Route
                    path="/order"
                    element={<PlaceOrder />}
                />


                {/* ================= VERIFY PAYMENT ================= */}

                <Route
                    path="/verify"
                    element={<Verify />}
                />


                {/* ================= MY ORDERS ================= */}

                <Route
                    path="/myorders"
                    element={<MyOrders />}
                />


                {/* ================= ADMIN ================= */}

                <Route
                    path="/admin"
                    element={
                        <AdminRoute>
                            <Layout />
                        </AdminRoute>
                    }
                >

                    {/* /admin */}

                    <Route
                        index
                        element={<AddItemPage />}
                    />


                    {/* /admin/list-items */}

                    <Route
                        path="list-items"
                        element={<ListItemsPage />}
                    />


                    {/* /admin/orders */}

                    <Route
                        path="orders"
                        element={<AdminOrder />}
                    />

                </Route>

            </Routes>
        </>
    );
};

export default App;