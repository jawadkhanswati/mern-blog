import express from "express";
<<<<<<< HEAD
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
=======
const app=express();

const port =8888;
>>>>>>> b20743e75ed5334c07b5421305bd1afb690e0b42

app.listen(port,()=>{
    console.log("server is listening on port ", port)
})