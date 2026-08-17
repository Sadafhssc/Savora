import { Order } from "../models/order.model.js";
import Stripe from "stripe";
import User from "../models/user.model.js";
const stripe = new Stripe(process.env.STRIPE_SECRET);
export const placeOrder = async (req, res) => {
    const frontend_url = "http://localhost:5173"
  try {
    const newOrder = new Order({
      userId: req.user.id,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
    });
    await newOrder.save();
    await User.findByIdAndUpdate(req.user.id, { cart: [] });
    const line_items = req.body.items.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    }));
    line_items.push({
      price_data: {
        currency: "usd",
        product_data: {
          name: "Delivery Charges",
        },
        unit_amount: 2 * 100,
      },
      quantity: 1,
    });
    const session = await stripe.checkout.sessions.create({
    line_items: line_items,
    mode: "payment",
    success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
    cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`
});
return res.send({success:true,session_url:session.url})
  } catch (error) {
    return res.send({success:false,message:error.message});
  }
};
export const getOrders=async(req,res)=>{
  try {
  const order=await Order.find({userId:req.user.id});
  if(!order) return res.send({success:false,message:"No orders found"});
  return res.send({success:true,order})
}catch(err){
  return res.send({success:false,message:err.message})
}
}
