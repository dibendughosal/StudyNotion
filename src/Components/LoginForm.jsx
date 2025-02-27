import { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from 'react-router-dom';
const LoginForm = () => {

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
    <div>
      <label htmlFor="email">
        <p>Email Id:<sup>*</sup></p>
        <input type="email" id="email" name="email" value={formData.email} onChange={changeHandler} placeholder='Enter email address' required/>
      </label>

      <label htmlFor="password">
        Password:<sup>*</sup>
        <input type={showPassword ? "text": "password"} id="password" name="password" value={formData.password} onChange={changeHandler} placeholder='Enter Your Email' required/>

        <span onClick={() => setShowPassword((prev) => !prev)}>{showPassword ? (<AiOutlineEyeInvisible />): (<AiOutlineEye />)}</span>

        <Link to="#"><p>Forgot Password?</p></Link>
      </label>
      <button>Sign In</button>
    </div>
  )
}

export default LoginForm
