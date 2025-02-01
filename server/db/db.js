import mongoose from "mongoose";

const connectdb=()=>{
    mongoose.connect(process.env.DB_CONNECTION).then(()=>{
        console.log("mongodb is connectd")
    }).catch((error)=>{
        console.log(error.message)
    })
}

export default connectdb