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
    <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6'>
      <label htmlFor="email" className='w-full'>
        <p className='text-[0.875rem] text-[#f1f2ff] mb-1 leading-[1.375rem]'>Email Id:<sup className='text-[#ef476f]'>*</sup></p>
        <input type="email" id="email" name="email" value={formData.email} onChange={changeHandler} placeholder='Enter email address' required className='rounded-[0.5rem] text-[#f1f2ff] w-full bg-[#161d29] p-3 shadow-[rgba(255,255,255,0.18)_0px_-1px_0px]' />
      </label>

      <label htmlFor="password" className='w-full relative'>
        <p className='text-[0.875rem] text-[#f1f2ff] mb-1 leading-[1.375rem]'>Password:<sup className='text-[#ef476f]'>*</sup></p>
        <input type={showPassword ? "text": "password"} id="password" name="password" value={formData.password} onChange={changeHandler} placeholder='Enter Password' className='rounded-[0.5rem] text-[#f1f2ff] w-full bg-[#161d29] p-3 shadow-[rgba(255,255,255,0.18)_0px_-1px_0px]' required/>

        <span className='absolute right-3 top-[38px] text-[#f1f2ff] cursor-pointer' onClick={() => setShowPassword((prev) => !prev)}>{showPassword ? (<AiOutlineEyeInvisible fill='#AFB2bf' fontSize={24} />): (<AiOutlineEye fontSize={24} fill='#AFB2bf'/>)}</span>

        <Link to="#"><p className='ml-auto max-w-max mt-1 text-xs text-[#47a5c5]'>Forgot Password?</p></Link>
      </label>
      <button type="submit" className='bg-[#ffd60a] rounded-[8px] font-medium text-[#000814
] px-3 py-2 mt-6 cursor-pointer'>Sign In</button>
    </form>
  )
}

export default LoginForm
