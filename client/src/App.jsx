import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import Dashboard from "./pages/Dashboard"
import Projects from "./pages/Projects"
import Header from "./components/Header"
import {Toaster} from "react-hot-toast"
import Footer from "./components/Footer"

const App = () => {
  return (
   

    <BrowserRouter>
    <Header/>
    <div  className="flex flex-col gap-9 justify-between  min-h-screen">
  

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/sign-up" element={<Signup/>}/>
      <Route path="/sign-in" element={<Signin/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/projects" element={<Projects/>}/>
    </Routes>
  
  
  <div className="mt-auto">
    <Footer/>
  </div>
    </div>

    
    <Toaster/>
    </BrowserRouter>
   
  )
}

export default App
