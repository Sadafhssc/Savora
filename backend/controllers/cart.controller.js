import Food from "../models/food.model.js";
import User from "../models/user.model.js";
export const addToCart=async(req,res)=>{
    try {
        const user=await User.findById(req.user.id);
        const {foodId}=req.body;
        const food=await Food.findById(foodId);
        if(!food){
        return res.send({success:false,message:"Food item not found"})
        }
        const existingItem=await user.cart.find((item)=>item.foodId.toString()===foodId);
        if(existingItem){
            existingItem.quantity+=1;
        }else{
            user.cart.push({foodId,quantity:1});
        
        }
        await user.save();
        return res.send({success:true,message:"Item added to cart successfully"})
    } catch (error) {
        return res.send({success:false,message:error.message})
    }
}
export const removeFromCart=async(req,res)=>{
    try {
        const {foodId}=req.body;
        const user=await User.findById(req.user.id);
        const existingItem=await user.cart.find((item)=>item.foodId.toString()===foodId);
        if(!existingItem){
            return res.send({success:false,message:"Food is not in cart"});
        }
        if(existingItem.quantity===1){
           user.cart= user.cart.filter((item)=>item.foodId.toString()!==foodId);
        }else{
           existingItem.quantity-=1;
        }
        await user.save();
        return res.send({success:true,message:"Item removed from cart successfully"})
        } catch (error) {
        return res.send({success:false,message:error.message})
    }
}
export const getCartInfo=async(req,res)=>{
    try {
        const user=await User.findById(req.user.id).populate("cart.foodId");
        if(!user) return res.send({success:false,message:"User not found"});
        return res.send({success:true,cart:user.cart});
    } catch (error) {
        return res.send({success:false,message:error.message})
    }
}
export const clearCart=async(req,res)=>{
    try {
        const user=await User.findById(req.user.id);
        if(!user) return res.send({success:false,message:"User not found"});
        user.cart=[];
        await user.save();
    } catch (error) {
        return res.send({success:false,message:error.message})
    }
}