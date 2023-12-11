import { FaEarthAfrica } from "react-icons/fa6";
import { IoBookSharp } from "react-icons/io5";
import { PiFilmReelFill } from "react-icons/pi";
import { SiApplemusic } from "react-icons/si";
import { CgGames } from "react-icons/cg";
import { PiTelevisionFill } from "react-icons/pi";
import { FaComputer } from "react-icons/fa6";
import { FaCarSide } from "react-icons/fa";
import { GiTigerHead } from "react-icons/gi";
import { TbMathSymbols } from "react-icons/tb";

const QuizCategory = () => {
  return (
    <div className="w-full flex flex-row justify-center py-8">
      <div className="w-[45rem] flex flex-col gap-4">
          <h2 className="text-[1.25rem]">Select a category to start the quiz</h2>
          <div className="w-full flex justify-between items-center flex-wrap min-h-[20rem]">
            <button className="w-[8rem] h-[7rem] p-2 bg-gray-700 flex flex-col justify-center items-center text-[#d6d8da] rounded-lg flex flex-col gap-2" value={"General knowledge"}>
              <FaEarthAfrica className="text-[2rem]"/>
              <span className="text-[0.9rem]">General knowledge</span>
            </button>
            <button className="w-[8rem] h-[7rem] p-2 bg-gray-700 flex flex-col justify-center items-center text-[#d6d8da] rounded-lg flex flex-col gap-2" value={"Books"}>
              <IoBookSharp className="text-[2rem]"/>
              <span className="text-[0.9rem]">Books</span>
            </button>
            <button className="w-[8rem] h-[7rem] p-2 bg-gray-700 flex flex-col justify-center items-center text-[#d6d8da] rounded-lg flex flex-col gap-2" value={"Film"}>
              <PiFilmReelFill className="text-[2rem]"/>
              <span className="text-[0.9rem]">Film</span>
            </button>
            <button className="w-[8rem] h-[7rem] p-2 bg-gray-700 flex flex-col justify-center items-center text-[#d6d8da] rounded-lg flex flex-col gap-2" value={"Music"}>
              <SiApplemusic className="text-[2rem]"/>
              <span className="text-[0.9rem]">Music</span>
            </button>
            <button className="w-[8rem] h-[7rem] p-2 bg-gray-700 flex flex-col justify-center items-center text-[#d6d8da] rounded-lg flex flex-col gap-2" value={"Video Games"}>
              <CgGames className="text-[2rem]"/>
              <span className="text-[0.9rem]">Video Games</span>
            </button>
            <button className="w-[8rem] h-[7rem] p-2 bg-gray-700 flex flex-col justify-center items-center text-[#d6d8da] rounded-lg flex flex-col gap-2" value={"Television"}>
              <PiTelevisionFill className="text-[2rem]"/>
              <span className="text-[0.9rem]">Television</span>
            </button>
            <button className="w-[8rem] h-[7rem] p-2 bg-gray-700 flex flex-col justify-center items-center text-[#d6d8da] rounded-lg flex flex-col gap-2">
              <FaComputer className="text-[2rem]"/>
              <span className="text-[0.9rem]">Computer</span>
            </button>
            <button className="w-[8rem] h-[7rem] p-2 bg-gray-700 flex flex-col justify-center items-center text-[#d6d8da] rounded-lg flex flex-col gap-2" value={"Vehicles"}>
              <FaCarSide className="text-[2rem]"/>
              <span className="text-[0.9rem]">Vehicles</span>
            </button>
            <button className="w-[8rem] h-[7rem] p-2 bg-gray-700 flex flex-col justify-center items-center text-[#d6d8da] rounded-lg flex flex-col gap-2" value={"Animal"}>
              <GiTigerHead className="text-[2rem]"/>
              <span className="text-[0.9rem]">Animal</span>
            </button>
            <button className="w-[8rem] h-[7rem] p-2 bg-gray-700 flex flex-col justify-center items-center text-[#d6d8da] rounded-lg flex flex-col gap-2" value={"Maths"}>
              <TbMathSymbols className="text-[2rem]"/>
              <span className="text-[0.9rem]">Maths</span>
            </button>
          </div>
      </div>
    </div>
    );
}

export default QuizCategory;