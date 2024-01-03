import Answer from "./answer.component";
import { useUser } from "./context/context";

const AnswerBox = ({ updateDbHandler}) => {

  const {quizData,index} = useUser();
  const {answerList} = quizData[index]
  console.log(answerList,"\n",quizData)

  return (
    answerList?.map((ele,listIndex)=>{
    return <Answer key={listIndex} options={ele} listIndex={listIndex} updateDbHandler = {updateDbHandler} />
  }))
}

export default AnswerBox;