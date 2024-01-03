import { useUser } from "../component/context/context"
const QuestionBox = () => {
  
  const {index,quizData} = useUser();
  const {question}= quizData[index]
  return (
    <div className="w-[100%] min-h-[8rem] bg-gray-300 p-[1rem] flex flex-col gap-2 border-2 rounded">
      <h2 className="font-bold text-[1.25rem]">Question {index + 1}</h2>
      <p className="text-[1.25rem]">{question}</p>
    </div>
  );
}

export default QuestionBox;