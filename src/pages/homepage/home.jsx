import React, { useEffect, useRef } from "react";
import Navbar from "../others/navbar";
import Homecard from "../others/homecard";
import Heading from "../others/heading";
import gsap from "gsap";


function Home(){

  const box = useRef()
  // animatio section 

useEffect(() => {
  const ctx = gsap.context(() => {

    const isMobile = window.innerWidth < 640;

    gsap.from(".center", {
      opacity: 0,
      duration: 1,
      y: 50,
    });

    gsap.to(".card1", {
      delay: 1,
      duration: 2,
      x: isMobile ? -80 : -150,
      rotate: isMobile ? -40 : -45,
    });

    gsap.to(".card2", {
      delay: 1,
      duration: 2,
      x: isMobile ? 80 : 150,
      rotate: 45,
    });

  }, box);

  return () => ctx.revert();
}, []);

  

 


    return(<>
    <Navbar></Navbar>
    {/* hero section  */}
   <div ref={box} className="home shadow-md  rounded-b-3xl overflow-auto  flex justify-center items-center w-full flex-col text-center  h-screen">
    <div className="sm:w-[70%] w-full h-full flex sm:pr-5 sm:pl-5 p-3 flex-col justify-center items-center text-center">
    
   <h1 className="letter font-bold lg:text-9xl sm:text-3xl text-4xl ">
      {"ZENZE CODE".split("").map((char, index) => (
      <span
      key={index}
      className="letter inline-block"
      >
      {char === " " ? "\u00A0" : char}
      </span>
       ))}
  </h1>  
           <p className="text-[16px] details">Start your journey into software development with hands-on learning, real-world projects, and industry-relevant skills. From frontend to backend, we help you become job-ready..</p>
    </div>

    {/* animation card */}
 <div className="animation-card h-56 sm:h-80 w-full flex justify-center items-center overflow-hidden">
  <div className="center w-24 sm:w-40 h-full relative">

    <div className="card1 h-full w-full rounded-2xl shadow-xl shadow-gray-300 border border-gray-200 absolute bottom-0 flex flex-col items-center text-center p-2 sm:p-4">
      <i className="fa-solid fa-graduation-cap text-3xl sm:text-5xl bg-gradient-to-r from-green-400 via-emerald-300 to-teal-300 bg-clip-text text-transparent mt-3 sm:mt-5"></i>
      <h1 className="text-xs sm:text-lg font-semibold mt-2">
        Learn basic to advance
      </h1>
      <div className="bg-green-300 absolute bottom-0 w-full h-8 sm:h-10 rounded-t-full"></div>
    </div>

    <div className="card2 h-full w-full rounded-2xl shadow-xl shadow-gray-300 border border-gray-200 absolute bottom-0 flex flex-col bg-white items-center text-center p-2 sm:p-4">
      <i className="fa-solid fa-briefcase text-3xl sm:text-5xl bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent mt-3 sm:mt-5"></i>
      <h1 className="text-xs sm:text-lg font-semibold mt-2">
        Get your dream jobs now
      </h1>
      <div className="bg-blue-500 absolute bottom-0 w-full h-8 sm:h-10 rounded-t-full"></div>
    </div>

    <div className="card3 bg-white h-full w-full rounded-2xl shadow-xl shadow-gray-300 border border-gray-200 absolute bottom-0 flex flex-col items-center text-center p-2 sm:p-4">
      <i className="fa-solid fa-laptop-code text-3xl sm:text-5xl bg-linear-to-r from-violet-500 via-purple-400 to-pink-400 bg-clip-text text-transparent mt-3 sm:mt-5"></i>
      <h1 className="text-xs sm:text-lg font-semibold mt-2">
        Build real world projects
      </h1>
      <div className="bg-linear-to-r from-violet-500 via-purple-400 to-pink-400 absolute bottom-0 w-full h-8 sm:h-10 rounded-t-full"></div>
    </div>

  </div>
</div>

   <div className="right  w-40 h-80 rounded-r-full border-20 border-gray-200  -z-10  absolute top-0 left-0 border-l-0">
    <div className="right  w-full h-full rounded-r-full border-20 border-gray-300  -z-10  absolute top-0 left-0 border-l-0">
   </div>
   </div>

     <div className="right  w-40 h-80 rounded-l-full border-[20px] border-gray-200  -z-10  absolute bottom-0 right-0 border-r-0">
      <div className="right  w-full h-full rounded-l-full border-[20px] border-gray-300  -z-10   border-r-0">
     </div>
     </div>
     
     
 
   </div>

   {/* other learn section  */}
   
  
   
   </>)
}
 
export default Home;