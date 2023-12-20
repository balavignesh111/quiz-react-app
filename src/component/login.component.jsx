import { MdOutlineMailLock } from "react-icons/md";
import { RiLockPasswordLine  } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";

import { 
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword
} from "../utils/firebase";
import { useUser } from "./context/context";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigation = useNavigate();
  const signInWithGoogle = async ()=>{
    const { user } = await signInWithGooglePopup();
    console.log(user.emailVerified);
    navigate(user); 
  }

  const navigate = (user) => {
    if(user && user.emailVerified === true){
      navigation('/dashboard/home');
    }else{
      alert('user mismatch')
    }
  }
  const {formFields, setFormFields, setUser} = useUser();
  console.log(useUser())
  const {displayName, email, password, confirmPassword} = formFields;

  const submitHandler = async (e) =>{
    // e.preventDefault();
    console.log("hit");
    if(email && password){
      try{
        const { user } = await signInAuthUserWithEmailAndPassword(
          email,
          password
        )
        console.log({user});
        setFormFields({email: "", password: "", confirmPassword: ""});

        if(user){
          setUser(user.email, user.displayName);
          console.log(user.email);
          console.log(user.displayName);
        }
      }catch (err){
        console.log("Error occured while login", err.message);
        console.log(err.code);
        if(err.code === "auth/invalid-credential"){
          alert('Invalid Credentials')
        }
      }
    }
  }

  const changeHandler = (e) =>{
    const { name, value } = e.target;
    setFormFields({...formFields,[name] : value})
  }

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
            <input 
              type="email" 
              id="email" 
              name = "email"
              className="pl-[2.25rem] p-[0.5rem] w-full rounded-md border-2 border-black" 
              onChange={changeHandler}
              placeholder="Enter your Email"></input>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-start px-[1rem] py-2 gap-2">
        <label htmlFor="password">Password</label>
        <div className="w-full relative">
          <div className="absolute top-3 left-2">
            <RiLockPasswordLine className="text-[1.25rem]"/>
          </div>
          <input 
            type="password" 
            className="pl-[2.25rem] p-[0.5rem] w-full rounded-md border-2 border-black" 
            id="password" 
            name = "password"
            onChange={changeHandler}
            placeholder="Enter Password"></input>
        </div>
        
      </div>
      <div className="px-4 py-2 w-full mt-2">
        <button className="w-full px-4 py-1 bg-blue-300 rounded-md border-2 border-black" onClick={()=>submitHandler()}>
          Login
        </button>
      </div>
      <div className="w-full px-4 py-2 mt-8">
        <div className="w-full border-t-2 border-black flex flex-row justify-center items-center relative">
          <div className="w-[2rem] text-center border-2 border-black bg-white absolute top-[-1rem]">OR</div>
        </div>
      </div>
      <div className="w-full px-4 py-2 flex justify-center items-center">
        <button 
        className="w-[3rem] h-[3rem] border-2 rounded-[50%] flex justify-center items-center"
        onClick={()=>signInWithGoogle()}
        ><FcGoogle className="text-[3rem]"/></button>
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