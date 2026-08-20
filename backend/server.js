import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import FoodRouter from "./routes/food.routes.js";
import UserRouter from "./routes/user.routes.js";
import cartRouter from "./routes/cart.routes.js";
import orderRouter from "./routes/order.routes.js";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors({
  origin: ["https://savora-orpin.vercel.app", "https://savora-client-git-main-sadafhsscs-projects.vercel.app","http://localhost:5173"],
  credentials: true
}));
app.use(express.json());
await connectDB();
app.use("/api/food", FoodRouter);
app.use("/api/user", UserRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
app.get("/", (req, res) => {
    res.send("Server is ready");
})

if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

export default app;