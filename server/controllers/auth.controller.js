import User from "../models/user.model.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const signup=async(req,res)=>{
 try {
    const {username,email,password}=req.body;
    if(!username.trim() ||!email.trim()||!password.trim() ||username==""||email==""||password==""){
        return res.status(400).json({message:"all feilds are required"})
    }
   
    let finduser=await User.findOne({username})
    if(finduser){
        return res.status(500).json({message:"username already exists"})
    }
    let findemail=await User.findOne({email})
    if(findemail){
        return res.status(500).json({message:"email already exists"})
    }

    const hashpassword=await bcrypt.hash(password,8)
    const newUser=User.create({
        username:username.trim(),
        email:email.trim(),
        password:hashpassword
    })
  
    res.status(200).json({message:"user register successfully"})
 } catch (error) {
    res.status(500).json({message:"internal server error"})
 }   
}

//signin user
export const signin=async(req,res)=>{
    try {
        const {email,password}=req.body;
        if(!email.trim()||!password.trim()||email=="" ||password==""){
            return res.status(400).json({message:"all feilds are required"})
        }
        console.log(req.body)
        const user=await User.findOne({email})
        if(!user){
            return res.status(400).json({message:"invalid credentials wrong username or password"})
        }
       const comparepass=await bcrypt.compare(password,user.password)
       if(!comparepass){
        return res.status(400).json({message:"invalid credentials wrong username or password"})
       }
       const token=jwt.sign({userId:user._id},process.env.JWT_SECRET);
       res.cookie("blogtoken",token,{httpOnly:true,maxAge:3*24*60*60*1000,sameSite:"strict",secure:"production",})
       
       res.status(200).json({message:"logged in successfully",user:{
        username:user.username,
        email:user.email
       }})
    } catch (error) {
        
    }
}