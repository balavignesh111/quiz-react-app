import { MdOutlineMailLock } from "react-icons/md";
import { RiLockPasswordLine  } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
  return ( 
  <div className="w-full min-h-[100vh] flex flex-col justify-center items-center bg-blue-300">
    <div className="w-[25rem] border-2 border-black p-4 flex flex-col justify-evenly items-center rounded-lg shadow-xl bg-gray-100">
      <h2 className="text-center text-[1.25rem] font-bold">SIGN IN</h2>
      <div className="w-full flex flex-col justify-center items-start px-[1rem] py-2 gap-1">
        <label htmlFor="email">Email</label>
        <div className="w-full relative">
          <div className="absolute top-3 left-2">
            <MdOutlineMailLock className="text-[1.25rem]"/>
          </div>
          <div className="w-full">
            <input type="email" id="email" className="pl-[2.25rem] p-[0.5rem] w-full rounded-md border-2 border-black" placeholder="Enter your Email"></input>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-start px-[1rem] py-2 gap-2">
        <label htmlFor="password">Password</label>
        <div className="w-full relative">
          <div className="absolute top-3 left-2">
            <RiLockPasswordLine className="text-[1.25rem]"/>
          </div>
          <input type="password" className="pl-[2.25rem] p-[0.5rem] w-full rounded-md border-2 border-black" id="password" placeholder="Enter Password"></input>
        </div>
        
      </div>
      <div className="px-4 py-2 w-full mt-2">
        <button className="w-full px-4 py-1 bg-blue-300 rounded-md border-2 border-black">
          Login
        </button>
      </div>
      <div className="w-full px-4 py-2 mt-8">
        <div className="w-full border-t-2 border-black flex flex-row justify-center items-center relative">
          <div className="w-[2rem] text-center border-2 border-black bg-white absolute top-[-1rem]">OR</div>
        </div>
      </div>
      <div className="w-full px-4 py-2 flex justify-center items-center">
        <button className="w-[3rem] h-[3rem] border-2 rounded-[50%] flex justify-center items-center"><FcGoogle className="text-[3rem]"/></button>
      </div>
      <div className="">
        <p className="">
          New User? <a href="#">Register</a>
        </p>
      </div>
    </div>
  </div> );
}

export default Login;