import { useRef, useState, useEffect} from 'react'
import './login.css'
import { IoMdEyeOff } from 'react-icons/io'
import LoginFooter from './LoginFooter'
import { Link } from 'react-router-dom'




const Login = () => {
    const userRef = useRef
    const errRef = useRef

    const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState('')

    useEffect(() => {
        useRef.current/focus()
    }, [])

    useEffect(() => {
        setErrMsg('')
    }, [user,pwd])
   
  return (
    <div className="bg-neutral-700 items-center justify-center">
    <div className="head">
      <div className="px-6 py-8 m-auto max-w-[700px] w-full">
    <h2 className="text-3xl tracking-wider text-white font-primaryMedium p-6">Login</h2>
      <div className="p-6 gap-4">
        <form className="flex flex-col gap-4">
          <label className="text-[17px] tracking-wider font-primaryRegular text-white px-2">Email</label>
          <input type="email" placeholder="Enter Work Email" className="w-full rounded-lg py-4 px-6 bg-gray-200 text-base"
          />
          
          <label className="text-[17px] tracking-wider text-white px-2 font-primaryRegular">Password</label>
          <div className="relative">
            <IoMdEyeOff  className='absolute top-[30%] left-[94%] items-center' size={18}/>
          <input type="password" placeholder="**********" className="w-full rounded-lg py-4 px-6 bg-gray-200 text-base"
          />
          </div>
          <div className="flex justify-between items-center text-center">
            
            <div className='ml-auto'>
              <Link to="/FPassword" className="pass font-primaryThin tracking-wider text-xs text-right">Forget Password?</Link>
            </div>
          </div>

          <button className="btn w-full text-black rounded-lg py-4 font-primaryRegular" onClick={() => history.push('/dashboard')}>Sign in</button>

          <div className="text-white text-sm text-center font-primaryThin tracking-widest">Don't have an Account?<Link to="/signup" className="create font-primaryRegular"> Create Account</Link></div>
        </form>
      <div className="grid gap-2 mt-4 place-content-center">
      <div className="grid grid-flow-col items-center">
        <hr className="border-gray-400"/>
        <p class="text-center text-sm text-white">OR</p>
        <hr className="border-gray-400"/>
      </div>
      <div className="text-white flex gap-2 items-center font-primaryThin text-[15px]">Login with <a href="#"><img src="/src/images/google.png" alt="google" width={70} height={70} className='items-center' /></a></div>
      </div>
      </div>
      </div>
    </div>
    <LoginFooter />
    </div>
  );
};

export default Login;
