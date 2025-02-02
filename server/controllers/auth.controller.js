import User from "../models/user.model.js";
import bcrypt from "bcryptjs"
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