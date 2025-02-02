import {Link} from "react-router-dom"

import { Button, Label, TextInput } from "flowbite-react"

const Signup = () => {
  return (
    <div className="min-h-screen mx-9 mt-20">
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
        <form className="flex flex-col gap-4">
          <div>
            <Label htmlFor="username" value="Username"/>
            <TextInput type="text" placeholder="Username" id="username"/>
          </div>
          <div>
            <Label htmlFor="email" value="Email"/>
            <TextInput type="text" placeholder="Email@company.com" id="email"/>
          </div>
          <div>
            <Label htmlFor="password" value="Password"/>
            <TextInput type="text" placeholder="Password" id="password"/>
          </div>
          <Button size="xl" className="mt-3" gradientDuoTone="purpleToPink" type="submit">Sign up</Button>
          <Button size="xl" className="" gradientDuoTone="purpleToPink" type="submit">Sign up</Button>

        </form>
        <p className="mt-5 text-sm">have an account? <Link className="text-blue-700" to={"/signin"}>sign In?</Link></p>
      </div>
    </div>
    </div>
  )
}

export default Signup
