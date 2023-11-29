import CircledQuestion from "./circledQuestion";
const QuestionSideBar = ({index, db}) => {
  return ( 
    <div className="w-[25%] p-[2rem] shadow-md flex flex-col gap-[1.5rem]">
      <div className="flex flex-row justify-between pb-[1rem]">
        <p className="text-[1.2rem]">Question {index + 1}/{db.length}</p>
        <p className="text-[1.2rem]">Instruction</p>
      </div>
      <div className="w-[100%] flex flex-wrap justify-around gap-[2rem]">
        {db.map((ele,ind)=>{
          return <CircledQuestion key = {ind} ind = {ind} index = {index}/>
        })}
      </div>
      
    </div>
   );
}
 
export default QuestionSideBar;