import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import DashSidebar from "../components/DashSidebar"
import Dashprofile from "../components/Dashprofile"

const Dashboard = () => {
  const location=useLocation()
  const [tab,setTab]=useState("")
  useEffect(()=>{
    const urlparams=new URLSearchParams(location.search)
    const tabfromUrl=urlparams.get("tab")
    if(tabfromUrl){
      setTab(tabfromUrl)
    }
  },[location.search])
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
    <div className="md:w-64">
      {/* side bar */}
      <DashSidebar/>
    </div>
    
      {/* profile ...  */}
      {tab==="profile" && <Dashprofile/>}
    </div>
  )
}

export default Dashboard
