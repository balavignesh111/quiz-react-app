
const QuestionBox = ({ index, qtn }) => {
  
  return (
    <div className="w-[100%] min-h-[8rem] bg-gray-300 p-[1rem] flex flex-col gap-2 border-2 rounded">
      <h2 className="font-bold text-[1.25rem]">Question {index + 1}</h2>
      <p className="text-[1.25rem]">{qtn}</p>
    </div>
  );
}
 
export default QuestionBox;