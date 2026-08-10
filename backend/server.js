import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import FoodRouter from "./routes/food.routes.js";
import UserRouter from "./routes/user.routes.js";
import cartRouter from "./routes/cart.routes.js";

const PORT=process.env.PORT || 3000;
const app=express();
app.use(cors());
app.use(express.json());
await connectDB();
app.use("/api/food",FoodRouter);
app.use("/api/user", UserRouter);
app.use("/api/cart",cartRouter)
app.get("/",(req,res)=>{
    res.send("Server is ready");
})
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})