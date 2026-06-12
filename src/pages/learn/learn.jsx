import React from "react";
import Navbar from "../others/navbar";
import TechCard from "./techCard";
import Footer from "../others/footer";
import LearnProjectCard from "./learnProjectCard";

function Learn(){
    return(<>
    <Navbar></Navbar>
  <div className="flex mt-5 sm:mt-20 justify-center  items-center flex-col text-center p-3 sm:pr-10 sm:pl-10">
   <h1 className="font-bold sm:text-3xl text-2xl"><span className="bg-gradient-to-br from-cyan-500 via-sky-300 to-indigo-500 bg-clip-text text-transparent">Popular</span> Tech</h1>
 </div>
    <div className="learn w-full h-60 pt-5 pb-5 mt-10 flex">
     {/* all tech */}
        <TechCard name={"Html"} details={"Learn html basic to advane i full details in esay way"}></TechCard>
    </div>
    <div className="arrow sm:hidden flex justify-center items-center w-full h-10">
        <p><i className="fa-solid fa-arrow-right"></i></p>
    </div>

    {/* other project vidoe */}
 <div className="flex justify-center mt-10 items-center flex-col text-center p-3 sm:pr-10 sm:pl-10">
   <h1 className="font-bold sm:text-3xl text-2xl bg-gradient-to-br from-cyan-500 via-sky-300 to-indigo-500 bg-clip-text text-transparent">Practis your skill</h1>
   <h1 className="font-bold sm:text-3xl text-2xl mb-5">with these projects</h1>
 </div>
 <div className="learnProjects min-h-50 w-full flex gap-5 p-5">
   <LearnProjectCard></LearnProjectCard>
   <LearnProjectCard></LearnProjectCard>
   <LearnProjectCard></LearnProjectCard>
    <LearnProjectCard></LearnProjectCard>
   <LearnProjectCard></LearnProjectCard>
   <LearnProjectCard></LearnProjectCard>

 </div>
 <div className="arrow sm:hidden flex justify-center items-center w-full h-10">
        <p><i className="fa-solid fa-arrow-right"></i></p>
 </div>

 {/* pre build content */}
  <div className="flex justify-center mt-10 items-center flex-col text-center p-3 sm:pr-10 sm:pl-10">
   <h1 className="font-bold sm:text-3xl text-2xl text-blue-500">Just copy <span className="text-black">and use</span></h1>
 </div>
 <div className="prebuildconent min-h-100">



 </div>

    {/* footer */}
    <Footer></Footer>
    
    </>)
}

export default Learn;