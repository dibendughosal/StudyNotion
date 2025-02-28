import logo from '../assets/logo.svg';
import '../App.css'
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className='w-11/12 max-w-[1160px] py-4 mx-auto flex items-center justify-between '>
      <Link to="/">
        <img src={logo} alt='logo' width={160} height={32} loading='lazy'/>
      </Link>

      <nav>
        <ul className='flex text-[#dbddea] gap-3'>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className='flex items-center text-[#dbddea] space-x-4 '>
        {
          !isLoggedIn && 
          <Link to="/login"><button onClick={() => {
            setIsLoggedIn(false)
          }} className='bg-[#161d29] py-2 px-3 rounded-[8px] border border-[#2c333f]'>Log in</button></Link>
        }
        {
          !isLoggedIn &&
          <Link to="/signup"><button className='bg-[#161d29] py-2 px-3 rounded-[8px] border border-[#2c333f] '>Sign up</button></Link>
        }
        {
          isLoggedIn && 
          <Link to="/"><button onClick={() => {
            setIsLoggedIn(false)
            toast.success('Logged Out Successfully');
          }} className='bg-[#161d29] py-2 px-3 rounded-[8px] border border-[#2c333f] '>Logout</button></Link>
        }
        {
          isLoggedIn &&
          <Link to="/dashboard"><button className='bg-[#161d29] py-2 px-3 rounded-[8px] border border-[#2c333f] '>Dashboard</button></Link>
        }
      </div>
    </div>
  )
}

export default Navbar
