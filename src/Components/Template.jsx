import SignupForm from '../Components/SignupForm'
import LoginForm from '../Components/LoginForm'
import bgImg from "../assets/frame.png"
import { FcGoogle } from "react-icons/fc";

const Template = ({title, desc1, desc2, image, formType, setIsLoggedIn}) => {
  return (
    <div className="flex justify-between  w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 ">
        <div className='w-11/12 max-w-[450px]'>
            <h1 className='text-[#f1f2ff] text-[1.875rem] leading-[2.375rem] font-semibold'>{title}</h1>
            <div className='text-[1.125rem] leading-[1.625rem] mt-4'>
                <p className=' text-[#afb299]'>{desc1}</p>
                <p className='italic text-[#2296c5]'>{desc2}</p>
            </div>

            { (formType === "Signup") ? <SignupForm setIsLoggedIn={setIsLoggedIn}/> : <LoginForm setIsLoggedIn={setIsLoggedIn}/>  }

            <div className='flex gap-x-2 my-4 items-center w-full'>
                <div className='w-full h-[1px] bg-[#2c333f]'></div>
                <p className='text-[#2c333f] font-medium leading-[1.375rem]'>OR</p>
                <div className='w-full h-[1px] bg-[#2c333f]'></div>
            </div>

            <button className='flex w-full justify-center text-[#afb299] rounded-[8px] items-center gap-x-2 mt-6 px-3 py-2 font-medium border border-[#2c333f] cursor-pointer'>
                <FcGoogle />
                <p>Sign Up with Google</p>
            </button>

        </div>

        <div className='relative w-11/12 max-w-[450px]'>
            <img src={image} alt="student" width={558} height={504} loading='lazy' className='absolute -top-4 right-4 z-20'/>
            <img src={bgImg} alt="pattern" width={558} height={504} loading='lazy' />
        </div>
    </div>
  )
}

export default Template
