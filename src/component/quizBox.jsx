import QuestionBox from "./questionBox";
import NextBtn from "./nextBtn.component";
import PrevBtn from "./prevBtn.component";
import AnswerBox from "./answerBox";

const QuizBox = ({answerList,index,nextBtnHandler, prevBtnHandler, qtn }) => {
  return ( 
    <div className="w-[60%] p-[2rem]">
      <QuestionBox index = {index} qtn = {qtn}/>
      <div className="pt-[1rem]">
        <AnswerBox 
        answerList={answerList}/>
      </div>
      <div className="w-[100%] pt-[1rem] pb-[1rem] flex flex-row justify-center gap-[3rem]">
        <PrevBtn prevBtnHandler = {prevBtnHandler}/>
        <NextBtn nextBtnHandler = {nextBtnHandler}/>
      </div>
    </div>
  );
}

export default QuizBox;