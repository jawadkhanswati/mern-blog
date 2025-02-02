import mongoose from "mongoose";

const connectdb=()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/MernBlog").then(()=>{
        console.log("mongodb is connectd")
    }).catch((error)=>{
        console.log(error.message)
    })
}

export default connectdb