import {Link, useNavigate} from "react-router-dom"
import { Button, Label, TextInput } from "flowbite-react"
import { useState } from "react"
import {toast} from "react-hot-toast"
import { axiosInstance } from "../lib/axios"
import { Loader } from "lucide-react"

const Signup = () => {

  const navigate=useNavigate()

  const [formdata,setformdata]=useState({})
  const [loading,setloading]=useState(false)
  const handlechange=(e)=>{
    setformdata({...formdata,[e.target.name]:e.target.value})
  }

  const handlesubmit=async(e)=>{
    e.preventDefault()
    setloading(true)
    try {
    const res= await axiosInstance.post("/auth/signup",formdata)
    if(res.data){
      toast.success(res.data.message)
      navigate("/sign-in")
      setloading(false)
    }
    } catch (error) {
      setloading(false)
      toast.error(error.response.data.message)
    }
  }
  return (
    <div className="mx-9 mt-20">
    <div className="flex p-3 py-8 border bg-gray-100 max-w-4xl flex-col md:flex-row mx-auto md:items-center">
      {/* left */}
      <div className="flex-1 px-5">
      <div to={"/"} className='text-4xl text-center md:text-start font-bold dark:text-white'>
    <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-md font-bold text-white">jawad's</span>Blog
    </div>
    <p className="text-sm text-center mt-5 md:text-start">This is Demo Project For Practice My Mern skills You can sign up with your email and password OR with Google</p>
      </div>

      {/* right */}
      <div className="mt-8 flex-1">
        <form onSubmit={handlesubmit} className="flex flex-col gap-4">
          <div>
            <Label htmlFor="username" value="Username"/>
            <TextInput autoComplete="" name="username" type="text" placeholder="Username" onChange={handlechange} id="username"/>
          </div>
          <div>
            <Label htmlFor="email" value="Email"/>
            <TextInput name="email" autoComplete="" type="email" onChange={handlechange} placeholder="Email@company.com" id="email"/>
          </div>
          <div>
            <Label htmlFor="password" value="Password"/>
            <TextInput autoComplete="" type="password" placeholder="Password" name="password" onChange={handlechange} id="password"/>
          </div>
          {
            loading?(
              <Button size="xl" className="mt-3" gradientDuoTone="purpleToPink" type="submit" disabled={loading}>loading <Loader className="animate-spin"/></Button>
            ):(
              <Button size="xl" className="mt-3" gradientDuoTone="purpleToPink" type="submit">Sign up</Button>
            )
          }
         

        </form>
        <p className="mt-5 text-sm">have an account? <Link className="text-blue-700" to={"/sign-in"}>sign In?</Link></p>
      </div>
    </div>
    </div>
  )
}

export default Signup
