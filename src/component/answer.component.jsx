import { useUser } from "./context/context";

const Answer = ({options,listIndex, updateDbHandler}) => {
  const {quizData, index} = useUser();
  // function
  const updateInput = (e) =>{
    updateDbHandler(e.target.value,index,quizData);
  }
  return (
    <div className="w-[100%] pl-[0.5rem] pr-[0.5rem] mb-2 border-2 border-[#fff] rounded-lg shadow-md flex hover:bg-zinc-300 hover:border-zinc-300 hover:shadow-none hover:cursor-pointer">
      <input type="radio" name="myChoice" id={listIndex} className="" onChange={updateInput} checked = {quizData[index].selectedOption === options} value={options}/>
      <label htmlFor={listIndex} className="pl-[0.5rem] inline-block w-[100%] pt-[1rem] pb-[1rem]">{options}</label>
    </div>
  );
}

export default Answer;