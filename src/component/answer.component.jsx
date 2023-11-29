const Answer = ({options,index}) => {
  return (
    <div className="w-[100%] p-[1rem] mb-2 border-2 border-[#fff] rounded-lg shadow-md flex hover:bg-zinc-300 hover:border-zinc-300 hover:shadow-none hover:cursor-pointer">
      <input type="radio" name="myChoice" id={index} className="" />
      <label htmlFor={index} className="pl-[0.5rem] inline-block w-[100%]">{options}</label>
    </div>
  );
}

export default Answer;