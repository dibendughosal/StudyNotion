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

  const [accountType, setAccountType] = useState("student");

  const changeHandler = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value })
  }

  const [showPassword, setShowPassword] = useState(false)
  return (
    <div >
      <div className='flex bg-[#161d29] p-1 gap-x-1 my-6 rounded-full max-w-max'>
        <button className={`${accountType === "student" ? "bg-[#161d29] text-[#f1f2ff]" : "bg-transparent text-[#f1f2ff]"} py-2 px-5 rounded-full transition-all duration-200`} onClick={() => setAccountType("student") }>Student</button>
        <button onClick={() => setAccountType("instructor")}>Instructor</button>
      </div>

      <form onSubmit={submitHandler}>

        <div className='w-full flex gap-x-4'>
          <label htmlFor="firstname" className='w-full'>
            <p className='text-[0.875rem] text-[#f1f2ff] mb-1 leading-[1.375rem]'>First Name: <sup className='text-[#ef476f]'>*</sup></p>
            <input type="text" id="firstname" name="firstname" value={formData.firstname} placeholder='Enter First Name' onChange={changeHandler} className='rounded-[0.5rem] text-[#f1f2ff] w-full bg-[#161d29] p-3 shadow-[rgba(255,255,255,0.18)_0px_-1px_0px]' required />
          </label>
          <label htmlFor="lastname" className='w-full'>
            <p className='text-[0.875rem] text-[#f1f2ff] mb-1 leading-[1.375rem]'>Last Name: <sup className='text-[#ef476f]'>*</sup></p>
            <input type="text" id="lastname" name="lastname" value={formData.lastname} placeholder='Enter last Name' className='rounded-[0.5rem] text-[#f1f2ff] w-full bg-[#161d29] p-3 shadow-[rgba(255,255,255,0.18)_0px_-1px_0px]' onChange={changeHandler} required />
          </label>
        </div>

        <label htmlFor="email">
            <p className='text-[0.875rem] text-[#f1f2ff] mb-1 leading-[1.375rem]'>Email address: <sup className='text-[#ef476f]'>*</sup></p>
            <input type="email" id="email" name="email" value={formData.email} placeholder='Enter email address' onChange={changeHandler} className='rounded-[0.5rem] text-[#f1f2ff] w-full bg-[#161d29] p-3 shadow-[rgba(255,255,255,0.18)_0px_-1px_0px]' required />
        </label>

        <div className='flex w-full gap-x-4'>
          <label htmlFor="password" className='w-full relative'>
            <p className='text-[0.875rem] text-[#f1f2ff] mb-1 leading-[1.375rem]'>Password: <sup className='text-[#ef476f]'>*</sup></p>
            <input type={ showPassword ? "text" : "password"} id="password" name="password" value={formData.password} placeholder='Enter password' onChange={changeHandler} className='rounded-[0.5rem] text-[#f1f2ff] w-full bg-[#161d29] p-3 shadow-[rgba(255,255,255,0.18)_0px_-1px_0px]' required />
            <span className='absolute right-3 top-[38px]' onClick={() => setShowPassword((prev) => !prev)}>{showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2bf'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2bf'/>)}</span>
          </label>
          <label htmlFor="confirmPassword" className='w-full relative'>
            <p className='text-[0.875rem] text-[#f1f2ff] mb-1 leading-[1.375rem]'>Confirm Password: <sup className='text-[#ef476f]'>*</sup></p>
            <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} placeholder='Confirm password' className='rounded-[0.5rem] text-[#f1f2ff] w-full bg-[#161d29] p-3 shadow-[rgba(255,255,255,0.18)_0px_-1px_0px]' onChange={changeHandler} required />
            <span className='absolute right-3 top-[38px] text-[#f1f2ff] cursor-pointer' onClick={() => setShowPassword((prev) => !prev)}>{showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2bf'/>): (<AiOutlineEye fontSize={24} fill='#AFB2bf'/>)}</span>
          </label>
        </div>
        <button className='bg-[#ffd60a] rounded-[8px] font-medium text-[#000814
] px-3 py-2 mt-6 cursor-pointer w-full'>Create Account</button>
      </form>
    </div>
  )
}

export default SignupForm
