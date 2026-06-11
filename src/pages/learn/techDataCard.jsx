import React from "react";

function TechDataCard(){
    return(<>
    <div className="techdatacard w-full min-h-20 p-3 rounded-2xl border border-gray-200 shadow-md">
     <h1 className="font-semibold mb-1">Heading tag</h1>
     <p className="mb-3"><span className="text-blue-700">Code</span> -  {"<Heading><Heading/>"}</p>
     <p className="text-[15px] text-gray-500"> this tag use for wirte heading in your page</p>
       
      {/* video link */}
      <div className=" bg-gradient-to-br from-cyan-200 via-sky-100 to-indigo-300 rounded-2xl h-9 w-25 flex justify-center items-center mt-3">
        <button><i class="fa-solid fa-circle-play"></i>Video</button>
      </div>


    </div>
    </>)
}

export default TechDataCard;