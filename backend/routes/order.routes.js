import e from "express";
import { getOrders, placeOrder } from "../controllers/order.controller.js";
const orderRouter=e.Router();
orderRouter.post("/place-order",placeOrder);
orderRouter.post("/orders",getOrders);
export default orderRouter;