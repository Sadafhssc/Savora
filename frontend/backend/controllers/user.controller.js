import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import bcrypt from "bcrypt";
export const registerUser=async(req,res)=>{
    try{
    const {name,email,password}=req.body.user;
    if(!name || !email || !password){
        return res.send({success:false,message:"All fields are required"});
    }else if(password.length<4 || password.length>18){
        return res.send({success:false,message:"Password should be of atleast 4 and atmost 18 characters"});
    }
    const hashedPassword=await bcrypt.hash(password,10);
    const token=jwt.sign({email},process.env.JWT_SECRET);
    await User.create({
        name,
        email,
        password:hashedPassword
    })
    return res.send({success:true,message:"User is registered successfully",token})
}catch(error){
    return res.send({success:false,message:error.message})
}
}
export const loginUser=async (req,res) => {
    try{
    const {email,password}=req.body.user;
    const user = await User.findOne({ email });

if (!user) {
    return res.send({
        success: false,
        message: "Invalid User credentials"
    });
}

const isPasswordCorrect = await bcrypt.compare(password, user.password);

if (!isPasswordCorrect) {
    return res.send({
        success: false,
        message: "Invalid User credentials"
    });
}
     const isAdminPasswordCorrect=await bcrypt.compare(password,process.env.ADMIN_PASSWORD);
     const token=jwt.sign({id:user._id,email:user.email},process.env.JWT_SECRET);
    if(email===process.env.ADMIN_EMAIL && isAdminPasswordCorrect){
        await User.findOneAndUpdate({email},{isAdmin:true})
    }
    return res.send({success:true,message:"Login attempt successfully",token})
}catch(err){
    return res.send({success:false,message:err.message});
}
}