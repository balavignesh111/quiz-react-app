const CircledQuestion = ({ind,index,questionCircleHandler,bgColor}) => {
  return ( 
    <button className={`w-[2rem] h-[2rem] text-white font-semibold border-4 ${ind !== index ? bgColor : "bg-pink-400 border-pink-400"}  rounded-[100%] flex flex-col justify-center items-center`} onClick = {()=>
      {
        return questionCircleHandler(()=>ind)
      }}>
      {ind + 1}
    </button>
  );
}
export default CircledQuestion;