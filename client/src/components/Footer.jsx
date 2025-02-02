import { Footer } from "flowbite-react"
import {Link} from "react-router-dom"

const Footercom = () => {
  return (
 <Footer container className="border border-t-8 border-teal-500">
    <div className="">
        <div className="">
            <div className="">
            <Link to={"/"} className='self-center whitespace-nowrap text-sm sm:text-xl  font-bold dark:white'>
    <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-md font-bold text-white">jawad's</span>Blog
    </Link>
            </div>
        </div>
    </div>
 </Footer>
  )
}

export default Footercom
