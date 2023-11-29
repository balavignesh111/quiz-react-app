import Answer from "./answer.component";
const AnswerBox = ({answerList}) => {
  return (
    answerList.map((ele,index)=>{
    return <Answer key={index} options={ele} index={index}/>
  }))
}

export default AnswerBox;