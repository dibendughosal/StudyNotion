import logo from '../assets/logo.svg';
import '../App.css'
import { Link } from 'react-router-dom';
const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className='bg-red-600 p-4 flex justify-evenly '>
      <Link to="/">
        <img src={logo} alt='logo' width={160} height={32} loading='lazy'/>
      </Link>

      <nav>
        <ul className='flex justify-between gap-3'>
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

      <div className='flex gap-3 '>
        {
          !isLoggedIn && 
          <Link to="/login"><button onClick={() => {
            // setLoggedIn(false)
            alert("You have been logged in")
          }}>Login</button></Link>
        }
        {
          !isLoggedIn &&
          <Link to="/signup"><button>Signup</button></Link>
        }
        {
          isLoggedIn && 
          <Link to="/"><button onClick={() => {
            setIsLoggedIn(false)
            alert("You have been logged out")
          }}>Logout</button></Link>
        }
        {
          isLoggedIn &&
          <Link to="/dashboard"><button>Dashboard</button></Link>
        }
      </div>
    </div>
  )
}

export default Navbar
