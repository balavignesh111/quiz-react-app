const Congratulation = ({retryHandler, score}) => {
  const retry = ()=>{
    retryHandler();
  }
  return (
    <div className="w-full h-full bg-[rgb(0,0,0,0.4)] absolute top-0 left-0">
      <div className="w-[100%] h-[100%] p-[2rem] flex flex-col items-center justify-center">
        <div className="w-[30rem] bg-white p-[2rem] flex flex-col items-center justify-around gap-4 rounded-lg">
          <div className="bg-awardImg w-[100%] h-[10rem] bg-contain bg-no-repeat bg-center">
          </div>
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-[2rem] font-black">Congratulations!</h2>
            <p className="text-[1.3rem] text-center">Thank you for Participating in our quiz <br />Your Score is - <span className="font-black">{score}</span> </p>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 font-bold text-[1.1rem] text-white py-2 px-4 rounded-md" 
          onClick={retry}>Retry Quiz</button>
        </div>
      </div>
    </div>
  );
}

export default Congratulation;