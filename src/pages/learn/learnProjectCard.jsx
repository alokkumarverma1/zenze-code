import React from "react";

function LearnProjectCard(){
    return(<>
   <div className="learnproject card justify-center bg-gradient-to-br from-cyan-50 via-sky-50 to-indigo-50  items-center p-3 gap-5 flex flex-col sm:flex-row  min-w-60 sm:min-w-100  shadow-md sm:h-50 h-90  hover:shadow-xl rounded-2xl">
     <div className="right w-full sm:w-60 border h-60  sm:h-35 bg-gray-300 rounded-2xl">
       <img src="" alt="" />
     </div>
     <div className="left w-full sm:w-40 h-full flex flex-col justify-start items-start">
      <h1 className="font-semibold text-[15px]">Modern portfolio</h1>
      <p className="text-gray-600 text-sm mt-1">learn how to craete a modern and attractive design portfolio desin in simple way</p>
     
      <div className="techInLearnProject  gap-1 w-full   mt-3  flex">
         <div className="bg-gray-300 rounded-[10px] flex justify-center items-center min-w-10 pr-2 pl-2 h-7  text-[13px]"><p>html</p></div>
         <div className="bg-gray-300 rounded-[10px] flex justify-center items-center min-w-10 pr-2 pl-2 h-7  text-[13px]"><p>css</p></div>
         <div className="bg-gray-300 rounded-[10px] flex justify-center items-center min-w-10 pr-2 pl-2 h-7  text-[13px]"><p>react</p></div>
         <div className="bg-gray-300 rounded-[10px] flex justify-center items-center min-w-10 pr-2 pl-2 h-7  text-[13px]"><p>java</p></div>
         <div className="bg-gray-300 rounded-[10px] flex justify-center items-center min-w-20 pr-2 pl-2 h-7  text-[13px]"><p>springboot</p></div>
   
      </div>

     </div>
   </div>
    
    </>)
}

export default LearnProjectCard;