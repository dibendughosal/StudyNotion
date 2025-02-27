import SignupForm from '../Components/SignupForm'
import LoginForm from '../Components/LoginForm'
import bgImg from "../assets/frame.png"

const Template = ({title, desc1, desc2, image, formType, setIsLoggedIn}) => {
  return (
    <div className="flex w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 ">
        <div>
            <h1 className='text-[#f1f2ff] text-[1.875rem] leading-[2.375rem] font-semibold'>{title}</h1>
            <div className='text-[1.125rem] leading-[1.625rem] mt-4'>
                <p className=' text-[#afb299]'>{desc1}</p>
                <p className='italic text-[#2296c5]'>{desc2}</p>
            </div>

            { (formType === "Signup") ? <SignupForm setIsLoggedIn={setIsLoggedIn}/> : <LoginForm setIsLoggedIn={setIsLoggedIn}/>  }

            <div>
                <div></div>
                <p>OR</p>
                <div></div>
            </div>

            <button>
                <img src="" alt="" />
                <p>Sign Up with Google</p>
            </button>

        </div>

        <div>
            <img src={image} alt="Pattern" width={558} height={504} loading='lazy' />
            <img src={bgImg} alt="Students" width={558} height={504} loading='lazy'/>
        </div>
    </div>
  )
}

export default Template
