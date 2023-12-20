import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
const QuizStartQuestion = ({isOpen,closeQuiz,SetTotalQuestion,SetDifficulty}) => {
  return ( 
    <div className={`absolute w-full min-h-full top-0 left-0 bg-[rgb(0,0,0,0.7)] flex flex-col justify-center items-center ${isOpen ? "" : "hidden"}`}>
        <div className="w-[30rem] h-[23rem] bg-white rounded-lg">
          <div className="w-full h-12 bg-gray-700 px-8 flex flex-row justify-between items-center text-[#d6d8da]">
            <p className="text-[1.2rem]">Category</p>
            <button className=""><IoMdCloseCircle className="text-[1.5rem]" onClick={()=> closeQuiz()}/></button>
          </div>
          <div className="w-full flex flex-col items-center">
            <div className="w-full px-8 py-8 pb-0 flex flex-col gap-4">
              <p className="">Select Total No of Questions</p>
              <select name="question" className="w-full py-[0.5rem] px-[0.75rem] rounded-sm" 
              onChange={(event)=> {
                console.log(event.target.value)
                SetTotalQuestion(event.target.value)}}
              >
                <option value="10" defaultChecked={true}>10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
              </select>
            </div>
            <div className="w-full px-8 py-8 flex flex-col gap-4">
              <p className="">Select Difficulty</p>
              <select name="difficulty" className="w-full py-[0.5rem] px-[0.75rem] rounded-sm" 
              onChange={(event)=> {
                console.log(event.target.value)
                SetDifficulty(event.target.value)}}>
                <option value="any difficulty" defaultChecked={true}>Any difficulty</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>
            <button className="px-[0.75rem] py-[0.5rem] bg-slate-700 self-center text-[#d6d8da] rounded-md">Start Quiz</button>
          </div>
        </div>
      </div>
   );
}
 
export {QuizStartQuestion};