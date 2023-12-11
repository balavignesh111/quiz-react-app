import { GrFormPrevious, GrFormNext } from "react-icons/gr";
const Leaderboard = () => {
  return ( 
    <div className="w-full min-h-full flex flex-col justify-start items-center py-8 gap-8">
      <div className="w-[45rem] flex flex-col justify-start gap-4">
        <h2 className="text-[1.25rem] font-bold text-slate-700">Leaderboard</h2>
        <div className="w-[45rem] py-0 border-[1px] border-[rgb(0,0,0) bg-slate-700 text-white">
          <div className="w-full border-b-[1px] flex flex-row justify-between items-center p-4">
            <p className="w-[20%] text-center">Rank</p>
            <p className="w-[60%] text-center">Name</p>
            <p className="w-[20%] text-center">Score</p>
          </div>
          <div className="w-full border-b-[1px] flex flex-row justify-between items-center p-4">
            <p className="w-[20%] text-center">1</p>
            <p className="w-[60%] text-center">Gowtham</p>
            <p className="w-[20%] text-center">10.00</p>
          </div>
          <div className="w-full border-b-[1px] flex flex-row justify-between items-center p-4">
            <p className="w-[20%] text-center">2</p>
            <p className="w-[60%] text-center">Abishek</p>
            <p className="w-[20%] text-center">9.00</p>
          </div>
          <div className="w-full border-b-[1px] flex flex-row justify-between items-center p-4">
            <p className="w-[20%] text-center">3</p>
            <p className="w-[60%] text-center">chiran</p>
            <p className="w-[20%] text-center">8.00</p>
          </div>
        </div>
      </div>
      <div className="w-[45rem] text-[0.9rem] flex justify-between items-center">
        <div className="w-[7rem] flex justify-evenly items-center">
          show 
          <select name="paginationLimit" className="border-2 border-black">
            <option value="10" defaultChecked={true}>10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </div>
        <div className="w-full flex justify-start items-center gap-2 px-[6rem]">
          <button className="w-[6rem] flex justify-center items-center border-2 bg-slate-700 text-white px-2 py-1 rounded-lg"> <GrFormPrevious className="text-[1rem]"/> Previous</button>
          <button className="w-[2rem] bg-slate-700 text-white flex justify-center items-center py-1 px-2 rounded-md">1</button>
          <button className="w-[2rem] bg-slate-700 text-white flex justify-center items-center py-1 px-2 rounded-md">2</button>
          <button className="w-[2rem] bg-slate-700 text-white flex justify-center items-center py-1 px-2 rounded-md">3</button>
          <button className="w-[2rem] bg-slate-700 text-white flex justify-center items-center py-1 px-2 rounded-md">...</button>
          <button className="w-[2rem] bg-slate-700 text-white flex justify-center items-center py-1 px-2 rounded-md">15</button>
          <button className="w-[6rem] flex justify-center items-center border-2 bg-slate-700 text-white rounded-lg px-2 py-1"> Next <GrFormNext className="text-[1rem]"/></button>
        </div>
        </div>
    </div>
  );
}

export {Leaderboard};