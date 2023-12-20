import { RiAccountPinCircleLine, RiAccountCircleLine } from "react-icons/ri";
import { VscSignOut } from "react-icons/vsc";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useState} from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return ( 
    <div className="w-full h-[3.5rem] bg-slate-700 p-2 flex flex-row justify-between relative">
        <div className="w-[25rem] flex justify-around items-center">
          <div className="bg-gkLogo w-[2.75rem] h-[100%] bg-contain bg-no-repeat"></div>
          <NavLink to="/dashboard/home" 
          className={({isActive})=>(isActive ? "text-white text-[0.9rem]" : "text-[#e4e6e7BF] text-[0.9rem]")}>HOME</NavLink>
          <NavLink to="/dashboard/leaderboard" className={({isActive})=>(isActive ? "text-white text-[0.9rem]" : "text-[#e4e6e7BF] text-[0.9rem]")}>LEADERBOARD</NavLink>
          <NavLink to="/dashboard/history" className={({isActive})=>(isActive ? "text-white text-[0.9rem]" : "text-[#e4e6e7BF] text-[0.9rem]")}>HISTORY</NavLink>
        </div>
        <div className="w-[4rem]">
          <div className="w-[2rem] h-[2rem] bg-white flex justify-center items-center rounded-[50%]">
            <RiAccountPinCircleLine className="text-[2rem]" onClick={()=>(setIsOpen(true))}/>
          </div>
        </div>
        {/* profile signout */}
        <div className={`w-[16rem] bg-[#f3f3f3] absolute top-[3.5rem] right-9 rounded-lg p-4 flex flex-col gap-4 shadow-lg ${isOpen ? "" : "hidden"}`}>
          <button className="w-[2rem] h-[2rem] text-[2rem] self-end absolute top-[-3rem] right-1 bg-[#f3f3f3] rounded-lg">
            <IoMdCloseCircleOutline onClick={()=>(setIsOpen(false))}/>  
          </button>
          <div className="w-full flex flex-row justify-around items-center pb-2 gap-4 border-b-[1px] border-black">
            <div className="w-[2rem] h-[2rem] bg-white rounded-[50%] flex justify-center items-center">
              <RiAccountCircleLine className="text-[2rem]"/>
            </div>
            <div className="w-full">
              <p className="font-extrabold">Username</p>
              <p className="">Username@gmail.com</p>
            </div>
          </div>
          <div className="w-full flex flex-row justify-around items-center pb-2 gap-4 border-b-[1px] border-black">
            <button className="w-[2rem] h-[2rem] bg-white rounded-[50%] flex justify-center items-center">
              <VscSignOut className="text-[2rem]"/>
            </button>
            <p className="w-full">Sign out</p>
          </div>
        </div>
      </div>
   );
}
 
export default Navbar;