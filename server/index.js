import express from "express";
import dotenv from "dotenv";
import connectdb from "./db/db.js";

const app=express();
dotenv.config()

connectdb()

const port =8888;

app.listen(port,()=>{
    console.log("server is listening on port ", port)
})