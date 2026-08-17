import Food from "../models/food.model.js";
import imageKit from "../config/imageKit.js";
import fs from "fs";
export const addFoodItem = async (req, res) => {
  try {
    const { name, description, price, category } = JSON.parse(
      req.body.foodItem,
    );
    if (!name?.trim() || !description?.trim() || !price || !category?.trim()) {
      return res.send({ success: false, message: "All fields are required" });
    }
    const imageFile = req.file;
    if (!imageFile) {
      return res.send({ success: false, message: "Image File is required" });
    }
    const fileBuffer = fs.readFileSync(imageFile.path);
    const response = await imageKit.upload({
      file: fileBuffer,
      fileName: imageFile.originalname,
      folder: "/food",
    });
    fs.unlinkSync(imageFile.path);
    const transformedUrl = imageKit.url({
      path: response.filePath,
      transformation: [
        {
          width: 1280,
          quality: "auto",
          format: "webp",
        },
      ],
    });
    const image = transformedUrl;
    await Food.create({ name, description, price, category, image });
    return res.send({
      success: true,
      message: "Food Item uploaded successfully",
    });
  } catch (error) {
    return res.send({ success: false, message: error.message });
  }
};
export const getAllFoodItems=async(req,res)=>{
   try{
      const foodItems=await Food.find({}).sort({createdAt:-1});
      return res.send({ success: true, foodItems });
   }catch(error){
    return res.send({ success: false, message: error.message });
   }
}
export const getItemById=async(req,res)=>{
   try{
    const {id}=req.params;
      const foodItem=await Food.findById(id);
      return res.send({ success: true, foodItem });
   }catch(error){
    return res.send({ success: false, message: error.message });
   }
}
export const removeItemById=async(req,res)=>{
   try{
    const {id}=req.body;
      const foodItem=await Food.findByIdAndDelete(id);
      return res.send({ success: true,message:"Food Item deleted successfully"});
   }catch(error){
    return res.send({ success: false, message: error.message });
   }
}