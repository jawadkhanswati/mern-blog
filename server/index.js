import express from "express";
import dotenv from "dotenv";
import connectdb from "./db/db.js";
import userRouter from "./routes/User.router.js";
import authRouter from "./routes/auth.route.js";
import cors from "cors"

const app=express();
dotenv.config()

connectdb()
const port=8888;

app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.use("/api/user",userRouter)
app.use("/api/auth",authRouter)

app.listen(port,()=>{
    console.log("server is listening on port ", port)
})