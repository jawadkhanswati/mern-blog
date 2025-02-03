import { Footer } from "flowbite-react"
import {Link} from "react-router-dom"
import {Github, Instagram, Linkedin, LucideFacebook} from "lucide-react"

const Footercom = () => {
  return (
 <Footer container className="border border-t-8  border-teal-500">
    <div className=" w-full max-w-7xl mx-auto">
        <div className=" grid w-full justify-between sm:flex md:grid-col-1">
            <div className="mt-6">
            <Link to={"/"} className='self-center whitespace-nowrap text-lg sm:text-xl  font-bold dark:white'>
    <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-md font-bold text-white">jawad's</span>Blog
    </Link>
            </div>
            <div className="grid mt-7 grid-cols-2 gap-3 sm:mt-4 sm:gap-6 sm:grid-cols-3">
                <div>

                <Footer.Title title="about"/>
                <Footer.LinkGroup col>
                    <Footer.Link target="blank" rel="noopener noreferrer" href="https://jd-portfolio-zeta.vercel.app/#">
                        Mern Develper
                    </Footer.Link>
                    <Footer.Link target="blank" rel="noopener noreferrer" href="/about">
                        jawad's Blog
                    </Footer.Link>
                </Footer.LinkGroup>
                </div>

                <div>

                <Footer.Title title="Follow Us"/>
                <Footer.LinkGroup col>
                    <Footer.Link target="blank" rel="noopener noreferrer" href="https://wa.me/03170545835">
                       Follow Us
                    </Footer.Link>
                    <Footer.Link target="blank" rel="noopener noreferrer" href="https://github.com/jawadkhanswati">
                        Github
                    </Footer.Link>
                </Footer.LinkGroup>
                </div>
                <div>

                <Footer.Title title="Legal"/>
                <Footer.LinkGroup col>
                    <Footer.Link target="blank" rel="noopener noreferrer" href="#">
                    Privicy Policy
                    </Footer.Link>
                    <Footer.Link target="blank" rel="noopener noreferrer" href="#">
                       Terms & Conditions
                    </Footer.Link>
                </Footer.LinkGroup>
                </div>
            </div>
        </div>
        <Footer.Divider/>
         <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright  href="#" by="jawad's blog" year={new Date().getFullYear()}/>
            <div className=" gap-6 flex mt-3 sm:mt-2 sm:justify-center">
                
                <Footer.Icon href="#" color="black"   icon={LucideFacebook}/>
                <Footer.Icon href="#" color="black"   icon={Instagram}/>
                <Footer.Icon href="#" color="black"   icon={Linkedin}/>
                <Footer.Icon href="https://github.com/jawadkhanswati" color="black"   icon={Github}/>
              
                {/* <Footer.Icon href="#" icon={}/> */}
            </div>
         </div>
      
    </div>
 </Footer>
  )
}


export default Footercom
