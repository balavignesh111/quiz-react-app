import CircledQuestion from "./circledQuestion";
const QuestionSideBar = ({index, db, questionCircleHandler}) => {
  // submit quiz
  const submitQuiz = () =>{
    let res = db.reduce((acc,ele)=>{
      if(ele.selectedOption === ele.correct_answer){
        acc += 1;
      }
      return acc;
    },0)
    alert('your score is ' + res);
  }

  return ( 
    <div className="w-[25%] p-[2rem] shadow-md flex flex-col gap-[2.5rem] justify-between">
      <div className="w-[100%] flex flex-col gap-[1.5rem] ">
        <div className="flex flex-row justify-between pb-[1rem]">
          <p className="text-[1.2rem]">Question {index + 1}/{db.length}</p>
          <p className="text-[1.2rem]">Instruction</p>
        </div>
        <div className="w-[100%] flex flex-wrap justify-around gap-[2rem]">
          {db.map((ele,ind)=>{
            return <CircledQuestion key = {ind} ind = {ind} index = {index} questionCircleHandler = {questionCircleHandler}/>
          })}
        </div>
      </div>
      <div className="w-[100%]">
        <button className="text-white bg-green-500 w-[100%] font-bold text-[1.1rem] py-2 px-8 rounded" onClick={submitQuiz}>Submit Quiz</button>  
      </div>
      
    </div>
  );
}

export default QuestionSideBar;