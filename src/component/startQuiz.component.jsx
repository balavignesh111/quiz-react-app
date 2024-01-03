import QuizBox from './quizBox'
import QuestionSideBar from './questionSideBox'
import Congratulation from './congrats.component';
import { useEffect, useState } from 'react'
import { useUser } from "../component/context/context"
// import data from '../constants';

import { createPreviousAttemptCollection, getPreviousAttemptDetails} from '../utils/firebase';

const StartQuiz = () => {
  const {quizData,index,setIndex,userEmail,totalQuestion,score,setScore,category,difficulty} = useUser();
  console.log(userEmail)
  // useState hooks for updating questions and answers
  const [db, setDb] = useState(((quizData)))
  const [isSubmitted,SetIsSubmitted] = useState(false);

  // check for existing data in db
  let previousList = [];
  (async () => {
    const res = await getPreviousAttemptDetails(userEmail);
    console.log(res);
    // previousList = [...res._document.data.value.mapValue.fields]
    // console.log(previousList);
  })();


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
      // updates previously selected val
      setIndex((index)=> (index -= 1))
    }
  }



  // func to update db -> which updates the user selected value
  const updateDb = (val,index,db)=>{
    setDb(()=>{
      return (db.map((ele,ind)=>{
        if(index === ind){
          ele.selectedOption = val;
          console.log(ele);
          return ele;
        }
        return ele;
      }))
    })
    console.log(db)
  }

  // retake quiz function
  const init = ()=>{
    setScore(0);
    SetIsSubmitted(()=>(false));
    setIndex(0);
    setDb(modifiedData());
  }

  // score
  const submitQuiz = () =>{
    // return score
    let res = quizData.reduce((acc,ele)=>{
      if(ele.selectedOption === ele.correct_answer){
        acc += 1;
      }
      return acc;
    },0)
    setScore(()=>res);

    // sending data to db
    try{
      console.log("try block")
      createPreviousAttemptCollection(quizData,userEmail,category,res,totalQuestion,difficulty,)
      console.log("hit");
    }catch(error){
      console.log("error occurred in sending data",error);
      console.log(error.message);
    }
  }
  

  return ( 
    <div className='w-[100%] min-h-full'>
      <h1 className='text-center font-semibold text-[2rem]'>Quiz Title</h1>
      <div className='w-[100%] flex flex-row justify-around'>
        <QuizBox  
          nextBtnHandler = {nextBtn}
          prevBtnHandler = {prevBtn} 
          updateDb = {updateDb}
        />
        <QuestionSideBar questionCircleHandler = {setIndex} submitQuizHandler = {submitQuiz} submittedHandler = {SetIsSubmitted}></QuestionSideBar>
      </div>
      {
        isSubmitted ? 
          <Congratulation 
            retryHandler = {init} 
            score = {score}
          /> : ''}
    </div>
  );
}
 
export default StartQuiz;