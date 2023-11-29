const NextBtn = ({nextBtnHandler}) => {
  return ( 
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-[1.1rem] py-2 px-4 rounded" onClick={nextBtnHandler}>Next</button>
  );
}

export default NextBtn;