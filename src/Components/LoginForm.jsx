import { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
const LoginForm = ({setIsLoggedIn}) => {

  const navigate = useNavigate();

  function submitHandler(e){
    e.preventDefault();
    // setIsLoggedIn(true);
    toast.success('Logged In Successfully');
    setIsLoggedIn(true);
    navigate('/dashboard');
  }

  const [formData, setFormData] = useState(
    {
      email: '',
      password: ''
    }
  )

  const [showPassword, setShowPassword] = useState(false);
  
  const changeHandler = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value })
  }

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="email">
        <p>Email Id:<sup>*</sup></p>
        <input type="email" id="email" name="email" value={formData.email} onChange={changeHandler} placeholder='Enter email address' required/>
      </label>

      <label htmlFor="password">
        Password:<sup>*</sup>
        <input type={showPassword ? "text": "password"} id="password" name="password" value={formData.password} onChange={changeHandler} placeholder='Enter Password' required/>

        <span onClick={() => setShowPassword((prev) => !prev)}>{showPassword ? (<AiOutlineEyeInvisible />): (<AiOutlineEye />)}</span>

        <Link to="#"><p>Forgot Password?</p></Link>
      </label>
      <button type="submit">Sign In</button>
    </form>
  )
}

export default LoginForm
