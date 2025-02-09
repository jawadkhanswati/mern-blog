import { Sidebar } from 'flowbite-react'
import { ArrowRightCircle, User } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'


const DashSidebar = () => {
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
    <Sidebar className='w-full md:w-64'>
    <Sidebar.Items>
        <Sidebar.ItemGroup>
            <Link to={"/dashboard?tab=profile"}>
            <Sidebar.Item active={tab=="profile"} icon={User} label={"User"} labelColor={"dark"}>
               Profile
            </Sidebar.Item>
            </Link>
            <Sidebar.Item  className="cursor-pointer" icon={ArrowRightCircle}>
              Signout
            </Sidebar.Item>
        </Sidebar.ItemGroup>
    </Sidebar.Items>
    </Sidebar>
  )
}

export default DashSidebar
