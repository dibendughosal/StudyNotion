import { useState } from 'react';
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const SignupForm = ({setIsLoggedIn}) => {

  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    if(formData.password != formData.confirmPassword ){
      toast.error('Passwords do not match');
      return;
    }
    if(formData.password.length < 8 ){
      toast.error('Password should be at least 8 characters long');
      return;
    }
    setIsLoggedIn(true);
    navigate('/dashboard');
    toast.success('Account Created');
    
  }
 
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const changeHandler = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value })
  }

  const [showPassword, setShowPassword] = useState(false)
  return (
    <div>
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>

      <form onSubmit={submitHandler}>

        <div>
          <label htmlFor="firstname">
            <p>First Name: <sup>*</sup></p>
            <input type="text" id="firstname" name="firstname" value={formData.firstname} placeholder='Enter First Name' onChange={changeHandler} required />
          </label>
          <label htmlFor="lastname">
            <p>Last Name: <sup>*</sup></p>
            <input type="text" id="lastname" name="lastname" value={formData.lastname} placeholder='Enter last Name' onChange={changeHandler} required />
          </label>
        </div>

        <label htmlFor="email">
            <p>Email address: <sup>*</sup></p>
            <input type="email" id="email" name="email" value={formData.email} placeholder='Enter email' onChange={changeHandler} required />
        </label>

        <div>
          <label htmlFor="password">
            <p>Password: <sup>*</sup></p>
            <input type={ showPassword ? "text" : "password"} id="password" name="password" value={formData.password} placeholder='Enter password' onChange={changeHandler} required />
            <span onClick={() => setShowPassword((prev) => !prev)}>{showPassword ? (<AiOutlineEyeInvisible />): (<AiOutlineEye />)}</span>
          </label>
          <label htmlFor="confirmPassword">
            <p>Confirm Password: <sup>*</sup></p>
            <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} placeholder='Confirm password' onChange={changeHandler} required />
            <span onClick={() => setShowPassword((prev) => !prev)}>{showPassword ? (<AiOutlineEyeInvisible />): (<AiOutlineEye />)}</span>
          </label>
        </div>
        <button>Create Account</button>
      </form>
    </div>
  )
}

export default SignupForm
