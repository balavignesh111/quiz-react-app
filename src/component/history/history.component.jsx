import { getPreviousAttemptDetails } from "../../utils/firebase";
import { useUser } from "../context/context";
import { useState, useEffect } from "react";

const History = () => {
  const { userEmail,category } = useUser();
  const [data,setData] = useState([]);

  useEffect(
    ()=>{
      console.log("inside use effect")
      fetchData();
    },[]
  )

  const fetchData = async()=>{
    try{
      let res = await getPreviousAttemptDetails(userEmail);
      if(res.data() !== "" && res.data() !== undefined){
        console.log(res.data());
        console.log(...Object.values(res.data()));
        setData(...Object.values(res.data()))
      }
    }catch(error){
      console.log('error in fetching data ',error.message)
    }
  }
  console.log(data);
  return (  
  <div className="w-[100%] min-h-full flex flex-wrap justify-start items-center px-[6rem] py-[2rem] gap-4">
    <div className="w-full flex flex-col justify-start items-center gap-8">
      <div className="w-[70rem]">
        <h2 className="text-[1.5rem] font-bold text-slate-700 self-start">History / Previous Records</h2>
      </div>
      <div className="w-[70rem] flex flex-wrap justify-start items-center gap-8">
      {(data.length > 0) ? data.map((ele)=>{
      return(
        <div className="w-[16rem] rounded-md p-6 shadow-md bg-slate-700 text-white flex flex-col justify-center items-stretch gap-4">
          <h2 className="font-bold text-[1.25rem] border-b-2 pb-2">{ele.category}</h2>
          <div className="w-full flex justify-between items-center">
            <span className="">Total questions</span>
            <span className="">{ele.totalQuestion}</span>
          </div>
          <div className="w-full flex justify-between items-center">
            <span className="">Correct Answers</span>
            <span className="">{ele.correctAnswer}/{ele.totalQuestion}</span>
          </div>
          <div className="w-full flex justify-between items-center">
            <span className="">Incorrect Answers</span>
            <span className="">{ele.wrongAnswer}/{ele.totalQuestion}</span>
          </div>
          <div className="w-full flex justify-between items-center">
            <span className="">Score</span>
            <span className="">{ele.score}</span>
          </div>
        </div>
      )
    }) : "No previous records found"}
      </div>
    </div>
  </div> 
  );
}

export {History};