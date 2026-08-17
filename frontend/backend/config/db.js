import mongoose from "mongoose";
import dns from "dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);
const connectDB=async()=>{
    try{
    const connection=await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB is connected successfully ");
    console.log(connection.connection.name);
    }catch(error){
        console.log(`Connection failed ${error.message}`);
    }
}
export default connectDB;