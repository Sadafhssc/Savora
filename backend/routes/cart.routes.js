import express from "express";
import { addToCart, clearCart, getCartInfo, removeFromCart } from "../controllers/cart.controller.js";
import auth from "../middlewares/auth.js";

const cartRouter = express.Router();

cartRouter.post("/add",auth, addToCart);
cartRouter.post("/remove", auth,removeFromCart);
cartRouter.get("/",auth, getCartInfo);
cartRouter.delete("/clear",auth, clearCart);

export default cartRouter;