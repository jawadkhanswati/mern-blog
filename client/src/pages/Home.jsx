import axios from "axios"
import { useEffect } from "react"
import { axiosInstance } from "../lib/axios"

const Home = () => {
  useEffect(()=>{
    const callingfunc=async()=>{

      const res= await axiosInstance.get("/auth/check")
      console.log(res)
    }
    callingfunc()
  },[])
  return (
    <div>
      Home page
     
    </div>
  )
}

export default Home
