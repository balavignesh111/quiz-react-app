import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";

import {useUser} from "../context/context"

// data from index.js
import data from "../../constants/index"
import {useNavigate} from "react-router-dom"

const QuizStartQuestion = ({isOpen,closeQuiz}) => {
  const dataList = (data.length) ? [...data] : [];
  const navigation = useNavigate();
  const {category, difficulty, totalQuestion,SetTotalQuestion, SetDifficulty,setQuizData,quizData}= useUser();

  // functions

  // to generate random number
  const getRandomNo = ()=>{
    return Math.trunc(Math.random()*4);
  }
  // shuffled answer list
  const answerList = (index,list,correct_answer)=>{
    let ansList = list.splice(getRandomNo(),0,correct_answer);
    return list;
  }

  // modifies the data structure
  const modifiedData = (data)=>{
    return data?.map((ele,ind)=>{
      console.log(answerList(ind,[...ele.incorrect_answers],ele.correct_answer));
      let optionList = answerList(ind,[...ele.incorrect_answers],ele.correct_answer);
      console.log(optionList)
      const obj = {
        ...ele,
        "selectedOption" : "",
        "answerList" : optionList
      }
      return obj;
    })
  }

  const startQuizHandler = ()=>{
    let filteredData = (dataList.length > 0) ? (dataList.filter((ele)=>{
      if(ele.category === category && ele.difficulty === difficulty){
        return ele;
      }
    })) : [];
    filteredData = (filteredData.length) ? filteredData.slice(0,totalQuestion) : [];
    filteredData = modifiedData(filteredData);
    setQuizData(()=>{
      return filteredData;
    })
    navigation("/startquiz");
    // if(quizData.length > 0 && quizData.length === totalQuestion){
    //   console.log('hit');
    //   navigation("/startquiz");
    // }
    // console.log(data);
  }
  return ( 
    <div className={`absolute w-full min-h-full top-0 left-0 bg-[rgb(0,0,0,0.7)] flex flex-col justify-center items-center ${isOpen ? "" : "hidden"}`}>
        <div className="w-[30rem] h-[23rem] bg-white rounded-lg">
          <div className="w-full h-12 bg-gray-700 px-8 flex flex-row justify-between items-center text-[#d6d8da]">
            <p className="text-[1.2rem]">{category}</p>
            <button className=""><IoMdCloseCircle className="text-[1.5rem]" onClick={()=> closeQuiz()}/></button>
          </div>
          <div className="w-full flex flex-col items-center">
            <div className="w-full px-8 py-8 pb-0 flex flex-col gap-4">
              <p className="">Select Total No of Questions</p>
              <select name="question" className="w-full py-[0.5rem] px-[0.75rem] rounded-sm" 
              onChange={(event)=> {
                console.log(Number(event.target.value))
                SetTotalQuestion(Number(event.target.value))
              }}
              value={totalQuestion}
              >
                <option value="10">10</option>
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
                  SetDifficulty(event.target.value)
                }}
                value={difficulty}
                >
                <option value="any difficulty">Any difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
            <button 
              className="px-[0.75rem] py-[0.5rem] bg-slate-700 self-center text-[#d6d8da] rounded-md" onClick={startQuizHandler}>Start Quiz</button>
          </div>
        </div>
      </div>
   );
}
 
export {QuizStartQuestion};