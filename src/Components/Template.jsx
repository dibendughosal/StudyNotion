import SignupForm from '../Components/SignupForm'
import LoginForm from '../Components/LoginForm'

const Template = ({title, desc1, desc2, image, formType, setIsLoggedIn}) => {
  return (
    <div className="">
        <div>
            <h1>{title}</h1>
            <div>
                <p>{desc1}</p>
                <p>{desc2}</p>
            </div>

            { (FormData === "Signup") ? <SignupForm/> : <LoginForm/>  }

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
    </div>
  )
}

export default Template
