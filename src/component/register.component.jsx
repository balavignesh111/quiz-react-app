import { MdOutlineMailLock } from "react-icons/md";
import { RiLockPasswordLine  } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../utils/firebase/index"
import { useUser } from "./context/context";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = () => {

  const navigation = useNavigate();

  const {formFields, setFormFields, setUser} = useUser();
  const {displayName, email, password,confirmPassword} = formFields;

  // state variables
  const [validUsername, setValidUsername]= useState(true);
  const [validEmail, setValidEmail]= useState(true);
  const [validPassword, setValidPassword]= useState(true);
  const [validConfirmPassword, setValidConfirmPassword]= useState(true);

  const [usernameCnt,setUsernameCnt] = useState("");
  const [emailCnt,setEmailCnt] = useState("");
  const [passwordCnt, setPasswordCnt] = useState("");
  const [confirmPasswordCnt,setConfirmPassword] = useState("");

  const validate =()=>{
    // username
    if(!displayName){
      setValidUsername(false);
      setUsernameCnt("Username cannot be empty");
    }else{
      if(displayName.length < 5){
        setValidUsername(false);
        setUsernameCnt("Username should be less than 5");
      }else if(displayName.length > 15){
        setValidUsername(false);
        setUsernameCnt("Username should not be more than 15");
      }else if((displayName.length > 2) && (displayName.length <= 15)){
        setValidUsername(true);
        setUsernameCnt("");
      }
    }
    // email
    if(email === ""){
      setValidEmail(false);
      setEmailCnt("Email cannot be empty")
    }else{
      (email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) ? (setValidEmail(true),setEmailCnt("")) : (setValidEmail(false),setEmailCnt("Invalid Email"));
    }
    // password
    if(!password){
      setValidPassword(false);
      setPasswordCnt(`Password cannot be empty`)
    }else{
      if(password.length < 8){
        setValidPassword(false);
        setPasswordCnt(`Password should be more than 7 characters`)
      }else{
        setValidPassword(true);
        setPasswordCnt(``)
      }
    }
    // confirm password
    if(!confirmPassword){
      setValidConfirmPassword(false);
      setConfirmPassword(`Confirm Password cannot be empty`)
    }else{
      if(confirmPassword !== password){
        setValidConfirmPassword(false);
        setConfirmPassword(`Password Mismatch`)
      }else{
        setValidConfirmPassword(true);
        setConfirmPassword(``);
      }
    }
  }

  const submitHandler = async() =>{
    console.log('111');
    validate();
    if(validUsername || validPassword || validConfirmPassword || validEmail){
      console.log("inside if")
    }
    else if(password !== confirmPassword) return;
    console.log('111');
    try{
      const {user} = await createAuthUserWithEmailAndPassword(email,password);
      createUserDocumentFromAuth(user,{displayName});
      setFormFields({
        displayName: "",
        email:"",
        password:"",
        confirmPassword:"",
      })
      navigation("/");
    }catch(err){
      console.log(err)
      if(err.code === "auth/email-already-in-use"){
        alert("email already exist");
      }
    }
  }

  const changeHandler = (e)=>{
    const {name,value} = e.target;
    setFormFields({...formFields,[name]:value})
    setValidUsername(true);
    setValidEmail(true);
    setValidPassword(true);
    setValidConfirmPassword(true);
  }

  return (
    <div className="w-full min-h-[100vh] flex flex-col justify-center items-center bg-blue-300">
    <div className="w-[25rem] border-2 border-black p-4 flex flex-col justify-evenly items-center rounded-lg shadow-xl bg-gray-100">
      <h2 className="text-center text-[1.25rem] font-bold">SIGN UP</h2>
      <div className="w-full flex flex-col justify-center items-start px-[1rem] py-2 gap-1">
        <label htmlFor="email">Username</label>
        <div className="w-full relative">
          <div className="absolute top-3 left-2">
            <CgProfile className="text-[1.25rem]"/>
          </div>
          <div className="w-full">
            <input type="text" 
            id="username" 
            name="displayName"
            className="pl-[2.25rem] p-[0.5rem] w-full rounded-md border-2 border-black" 
            placeholder="Enter your name"
            onChange={(e)=>changeHandler(e)}
            value={displayName}
            ></input>
          </div>
          <div className={"text-red-700 pl-4" + (validUsername ? " hidden" : "")}>{usernameCnt}</div>
        </div>
      </div>
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
            name="email" 
            className="pl-[2.25rem] p-[0.5rem] w-full rounded-md border-2 border-black" 
            placeholder="Enter your Email"
            onChange={(e)=>changeHandler(e)}
            value={email}></input>
          </div>
          <div className={"text-red-700 pl-4" + (validEmail ? " hidden" : "")}>{emailCnt}</div>
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
            name="password"
            placeholder="Create Password"
            onChange={(e)=>changeHandler(e)}
            value={password}></input>
            <div className={"text-red-700 pl-4" + (validPassword ? " hidden" : "")}>{passwordCnt}</div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-start px-[1rem] py-2 gap-2">
        <label htmlFor="password">Confirm Password</label>
        <div className="w-full relative">
          <div className="absolute top-3 left-2">
            <RiLockPasswordLine className="text-[1.25rem]"/>
          </div>
          <input 
            type="password" 
            className="pl-[2.25rem] p-[0.5rem] w-full rounded-md border-2 border-black" 
            id="confirm-password" 
            name="confirmPassword" 
            placeholder="Confirm Password"
            onChange={(e)=>changeHandler(e)}
            value={confirmPassword}
            ></input>
            <div className={"text-red-700 pl-4" + (validConfirmPassword ? " hidden" : "")}>{confirmPasswordCnt}</div>
        </div>
      </div>
      <div className="px-4 py-2 w-full mt-2">
        <button 
          className="w-full px-4 py-1 bg-blue-300 rounded-md border-2 border-black"
          onClick={submitHandler}
        >
          Create Account
        </button>
      </div>
    </div>
  </div> );
}
 
export default Register;