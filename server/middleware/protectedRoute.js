import jwt from "jsonwebtoken"
import User from "../models/user.model.js";

export const protectedRoute=async(req,res,next)=>{
    try {
        const token=req.cookies["blogtoken"]
        console.log(token)
        if(!token){
            return res.status(400).json({message:"Unauthorize token - NO Token provided"})
        }
        const decode=jwt.verify(token,process.env.JWT_SECRET)
        console.log(decode)
        if(!decode){
            return res.status(400).json({message:"Unauthorized-  Invalid token"})
        } 
    
        const user=await User.findById(decode.userId).select("-password")
        console.log(user)
        if(!user){
            return res.status(400).json({message:"user not found"})
        }
        req.user=user
        next()
    } catch (error) {
        res.status(500).json({message:"internal server error protect"})
    }
}