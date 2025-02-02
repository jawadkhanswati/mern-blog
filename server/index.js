import express from "express";
import dotenv from "dotenv";
import connectdb from "./db/db.js";
import userRouter from "./routes/User.router.js";
import authRouter from "./routes/auth.route.js";

const app=express();
dotenv.config()

connectdb()
const port=8888;

app.use(express.json())

app.use("/api/user",userRouter)
app.use("/api/auth",authRouter)

app.listen(port,()=>{
    console.log("server is listening on port ", port)
})