import express from "express";
import {
    placeOrder,
    verifyOrder,
    getOrders,
    getAllOrders,
    updateOrderStatus
} from "../controllers/order.controller.js";
import auth from "../middlewares/auth.js";


const orderRouter = express.Router();

orderRouter.post("/place-order", auth, placeOrder);

orderRouter.post("/verify", verifyOrder);

orderRouter.get("/orders", auth, getOrders);

orderRouter.get("/all-orders", auth, getAllOrders);

orderRouter.put("/status",auth,updateOrderStatus);

export default orderRouter;