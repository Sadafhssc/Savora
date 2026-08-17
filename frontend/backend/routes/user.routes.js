import e from "express";
import { loginUser, registerUser } from "../controllers/user.controller.js";
const UserRouter=e.Router();
UserRouter.post("/register",registerUser);
UserRouter.post("/login",loginUser);
export default UserRouter;