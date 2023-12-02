import Answer from "./answer.component";
const AnswerBox = ({answerList, userChoice, setUserChoice, updateDbHandler, dbList, index}) => {
  return (
    answerList.map((ele,listIndex)=>{
    return <Answer key={listIndex} options={ele} listIndex={listIndex} userChoice={userChoice} setUserChoice={setUserChoice} updateDbHandler = {updateDbHandler} dbList = {dbList} index={index}/>
  }))
}

export default AnswerBox;