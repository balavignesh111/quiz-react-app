import Answer from "./answer.component";
const AnswerBox = ({answerList, setUserChoice, updateDbHandler, dbList, index}) => {
  return (
    answerList?.map((ele,listIndex)=>{
    return <Answer key={listIndex} options={ele} listIndex={listIndex} setUserChoice={setUserChoice} updateDbHandler = {updateDbHandler} dbList = {dbList} index={index}/>
  }))
}

export default AnswerBox;