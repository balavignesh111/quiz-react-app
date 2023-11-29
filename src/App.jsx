import QuizBox from './component/quizBox'
import QuestionSideBar from './component/questionSideBox'
import { useEffect, useState } from 'react'
import data from './constants';

function App() {
  // functions
  const getRandomNo = ()=>{
    return Math.trunc(Math.random()*4);
  }
  
  const answerList = (index)=>{
    let list = [...db[index].incorrect_answers]
    list.splice(getRandomNo(),0,db[index].correct_answer);
    return list;
  }

  // useState hooks for updating questions and answers
  const [db, setDb] = useState(data);
  const [index, setIndex] = useState(0);
  const [qtn, SetQtn] = useState(db[index].question);
  const [answers, SetAnswers] = useState(()=>{
    return answerList(index)
  });

  console.log(index);
  console.log(db[index]);
  console.log(qtn);
  console.log(answers)

  
  // next btn
  const nextBtn = ()=>{
    if(index === db.length - 1){
      setIndex(()=> 0);
    }else if(index > 0 || index < db.length-1){
      setIndex((index)=> (index += 1))
    }
  }

  // prev btn
  const prevBtn = ()=>{
    if(index <= 0){
      setIndex(()=>(db.length-1))
    }else if(index > 0 || index <= db.length-1){
      setIndex((index)=> (index -= 1))
    }
  }

  // qtn useState
  const qtnHandler = (index) =>{
    SetQtn(()=>(db[index].question))
  }

  // answer handler
  const answerHandler = (index)=>{
    SetAnswers(()=>(answerList(index)))
  }

  useEffect(()=>{
    answerHandler(index);
    qtnHandler(index);
  },[index])
  return (
    <div className='w-[100%] min-h-full p-4'>
      <h1 className='text-center font-semibold text-[2rem]'>Quiz Title</h1>
      <div className='w-[100%] flex flex-row justify-around'>
        <QuizBox 
        answerList = {answers}
        index = {index} 
        nextBtnHandler = {nextBtn} prevBtnHandler = {prevBtn} 
        qtn = {qtn}
        />
        <QuestionSideBar index = {index} db = {db}></QuestionSideBar>
      </div>
    </div>
  )
}

export default App
