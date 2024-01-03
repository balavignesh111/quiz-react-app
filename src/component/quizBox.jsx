import QuestionBox from "./questionBox";
import NextBtn from "./nextBtn.component";
import PrevBtn from "./prevBtn.component";
import AnswerBox from "./answerBox";
import { useUser } from "../component/context/context"


const QuizBox = ({nextBtnHandler, prevBtnHandler,updateDb}) => {

  const {quizData,index,setIndex} = useUser();


  return ( 
    <div className="w-[60%] p-[2rem] shadow-md">
      <QuestionBox/>
      <div className="pt-[1rem]">
        <AnswerBox 
          updateDbHandler={updateDb}
        />
      </div>
      <div className="w-[100%] pt-[1rem] pb-[1rem] flex flex-row justify-center gap-[3rem]">
        <PrevBtn prevBtnHandler = {prevBtnHandler}/>
        <NextBtn nextBtnHandler = {nextBtnHandler}/>
      </div>
    </div>
  );
}

export default QuizBox;