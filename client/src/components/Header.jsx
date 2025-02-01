import { Moon, Search } from 'lucide-react'
import { Link,useLocation } from 'react-router-dom'
import { Button, Navbar, TextInput } from 'flowbite-react'

const Header = () => {
  const path=useLocation().pathname
  return (
  <Navbar className='border-b-2'>
    <Link to={"/"} className='self-center whitespace-nowrap text-sm sm:text-xl  font-bold dark:white'>
    <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-md font-bold text-white">jawad's</span>Blog
    </Link>
    <form>
      <TextInput
      type="text"
      placeholder="Search"
      rightIcon={Search}
      className='hidden lg:inline'
      ></TextInput>
    </form>

    <Button className='w-12  h-12 lg:hidden' pill color='gray'>
      <Search />
    </Button>

    <div className='flex gap-2 md:order-2  justify-center items-center'>
      <Button className='w-10 h-10  sm:visible' pill color='gray'>
        <Moon/>
      </Button>
      <Link to={"/sign-in"} className='flex gap-2'>
      <Button className='h-10  sm:inline' color='blue'>signin</Button>
      {/* <Button className='h-10 hidden sm:inline'>signup</Button> */}
      </Link>
      <Navbar.Toggle/>
    </div>
      <Navbar.Collapse className=''>
        
        <Navbar.Link className='hover:bg-gray-400' active={path=="/"} as={"div"}>
          
          <Link to={"/"}>
          <div>Home</div>
          </Link>
        </Navbar.Link>
        <Navbar.Link className='hover:bg-gray-400' active={path=="/about"} as={"div"}>
          <Link to={"/about"}>
          <div>About</div>
          </Link>
        </Navbar.Link>
        <Navbar.Link className='hover:bg-gray-400' active={path=="/projects"}as={"div"}>
          <Link to={"/projects"}>
          <div>Projects</div>
          </Link>
        </Navbar.Link>
        <Navbar.Link className='hover:bg-gray-400 md:hidden w-20 mt-2 text-center bg-blue-700 rounded-md' active={path=="/sign-in"}as={"span"}>
          <Link to={"/sign-up"}>
          Login
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
  </Navbar>
  )
}

export default Header
