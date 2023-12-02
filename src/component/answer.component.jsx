const Answer = ({options,listIndex,userChoice,setUserChoice, updateDbHandler, dbList, index}) => {
  // function
  const updateInput = (e) =>{
    setUserChoice(()=>(e.target.value));
    updateDbHandler(e.target.value,index,dbList);
  }
  return (
    <div className="w-[100%] pl-[0.5rem] pr-[0.5rem] mb-2 border-2 border-[#fff] rounded-lg shadow-md flex hover:bg-zinc-300 hover:border-zinc-300 hover:shadow-none hover:cursor-pointer">
      <input type="radio" name="myChoice" id={listIndex} className="" onChange={updateInput} checked = {dbList[index].selectedOption === options} value={options}/>
      <label htmlFor={listIndex} className="pl-[0.5rem] inline-block w-[100%] pt-[1rem] pb-[1rem]">{options}</label>
    </div>
  );
}

export default Answer;