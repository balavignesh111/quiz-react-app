import CircledQuestion from "./circledQuestion";
const QuestionSideBar = ({index, db, questionCircleHandler, submitQuizHandler, submittedHandler}) => {
  const submitBtnHandler = ()=>{
    submitQuizHandler();
    submittedHandler(()=>(true));
  }
  return ( 
    <div className="w-[25%] p-[2rem] shadow-md flex flex-col gap-[2.5rem] justify-between">
      <div className="w-[100%] flex flex-col gap-[1.5rem] ">
        <div className="flex flex-row justify-between pb-[1rem]">
          <p className="text-[1.2rem]">Question {index + 1}/{db.length}</p>
          <p className="text-[1.2rem]">Instruction</p>
        </div>
        <div className="w-[100%] flex flex-wrap justify-start gap-[2rem] items-start">
          {db.length>0 && db.map((ele,ind)=>{
            let bgColor = (ele.selectedOption === undefined ? "bg-gray-400 border-gray-400" : "bg-cyan-600 border-cyan-600" );
            return <CircledQuestion key = {ind} ind = {ind} index = {index} questionCircleHandler = {questionCircleHandler} bgColor={bgColor}/>
          })}
        </div>
      </div>
      <div className="w-[100%]">
        <button className="text-white bg-green-500 w-[100%] font-bold text-[1.1rem] py-2 px-8 rounded" onClick={submitBtnHandler}>Submit Quiz</button>  
      </div>
      
    </div>
  );
}

export default QuestionSideBar;