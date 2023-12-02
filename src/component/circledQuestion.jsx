const CircledQuestion = ({ind,index,questionCircleHandler}) => {
  return ( 
    <button className={`w-[2rem] h-[2rem] text-white font-semibold border-4 ${ind !== index ? "bg-cyan-600 border-cyan-600" : "bg-pink-400 border-pink-400"}  rounded-[100%] flex flex-col justify-center items-center`} onClick = {()=>{console.log(ind);
      return questionCircleHandler(()=>ind)}}>
      {ind + 1}
    </button>
  );
}
export default CircledQuestion;