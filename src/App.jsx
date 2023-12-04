import QuizBox from './component/quizBox'
import QuestionSideBar from './component/questionSideBox'
import Congratulation from './component/congrats.component';
import { useEffect, useState } from 'react'
import data from './constants';

function App() {
  // functions
  // to generate random number
  const getRandomNo = ()=>{
    return Math.trunc(Math.random()*4);
  }
  // shuffled answer list
  const answerList = (index)=>{
    let list = [...data[index].incorrect_answers]
    list.splice(getRandomNo(),0,data[index].correct_answer);
    return list;
  }

  // modifies the data structure
  const modifiedData = ()=>{
    return data.map((ele,ind)=>{
      const obj = {
        ...ele
      }
      obj["selectedOption"] = undefined;
      obj["answerList"] = answerList(ind);
      return obj;
    })
  }

  // useState hooks for updating questions and answers
  const [db, setDb] = useState(()=>{
    return modifiedData();
  });
  console.log(db)
  const [index, setIndex] = useState(0);
  const [qtn, SetQtn] = useState(db[index].question);
  const [userChoice,setUserChoice]= useState('');
  const [score,setScore] = useState(0);
  const [isSubmitted,SetIsSubmitted] = useState(false);
  const [highScore,setHighScore] = useState(0);

  // next btn
  const nextBtn = ()=>{
    if(index === db.length - 1){
      setIndex(()=> 0);
    }else if(index > 0 || index < db.length-1){
      setUserChoice(()=>(''));
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


  // qtn useState
  const qtnHandler = (index) =>{
    SetQtn(()=>(db[index].question))
  }

  useEffect(()=>{
    qtnHandler(index);
  },[index])

  // func to update db
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
    setHighScore(score);
    setScore(0);
    SetIsSubmitted(()=>(false));
    setIndex(0);
    setDb(modifiedData());
  }

  // score
  const submitQuiz = () =>{
    let res = db.reduce((acc,ele)=>{
      if(ele.selectedOption === ele.correct_answer){
        acc += 1;
      }
      return acc;
    },0)
    setScore(()=>res);
    return res;
  }
  console.log(score)


  return (
    <div className='w-[100%] min-h-full p-4'>
      <h1 className='text-center font-semibold text-[2rem]'>Quiz Title</h1>
      <div className='w-[100%] flex flex-row justify-around'>
        <QuizBox 
          answerList = {db[index].answerList}
          index = {index} 
          nextBtnHandler = {nextBtn}
          prevBtnHandler = {prevBtn} 
          qtn = {qtn}
          setUserChoice = {setUserChoice}
          updateDb = {updateDb}
          dbList = {db}
        />
        <QuestionSideBar index = {index} db = {db} questionCircleHandler = {setIndex} submitQuizHandler = {submitQuiz} submittedHandler = {SetIsSubmitted}></QuestionSideBar>
      </div>
      {
        isSubmitted ? 
          <Congratulation 
            retryHandler = {init} 
            score = {score}
            highScore = {highScore}
          /> : ''}
    </div>
  )
}

export default App
