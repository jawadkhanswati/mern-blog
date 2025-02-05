import { signup ,signin} from "../controllers/auth.controller.js";
import express from "express";
import { protectedRoute } from "../middleware/protectedRoute.js";

const router=express.Router()
router.post("/signup",signup)
router.post("/signin",signin)


router.get("/check",protectedRoute,(req,res)=>{
    console.log(req.user._id)
    res.status(200).json({succes:"successs",id:req.user._id})
})

export default router