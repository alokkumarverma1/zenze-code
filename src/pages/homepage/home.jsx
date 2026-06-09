import React, { useEffect, useRef } from "react";
import Navbar from "../others/navbar";
import Homecard from "../others/homecard";
import gsap from "gsap";
import TopHeading from "../others/top_heading";


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
   <div ref={box} className="home  rounded-b-3xl overflow-auto  flex justify-center items-center w-full flex-col text-center  h-screen">
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
           <p className="text-[16px] details text-gray-600">Start your journey into software development with hands-on learning, real-world projects, and industry-relevant skills. From frontend to backend, we help you become job-ready..</p>
    </div>

    {/* animation card */}
 <div className="animation-card h-56 sm:h-80 w-full flex justify-center items-center overflow-hidden">
  <div className="center w-24 sm:w-40 h-full relative">

    <div className="card1 h-full w-full rounded-2xl shadow-xl shadow-gray-300 border border-gray-200 absolute bottom-0 flex flex-col items-center text-center p-2 sm:p-4">
      <i className="fa-solid fa-graduation-cap text-3xl sm:text-5xl bg-gradient-to-r from-green-400 via-emerald-300 to-teal-300 bg-clip-text text-transparent mt-3 sm:mt-5"></i>
      <h1 className="text-xs sm:text-[15px] font-semibold mt-2">
        Learn basic to advance
      </h1>
      <div className="bg-green-300 absolute bottom-0 w-full h-8 sm:h-10 rounded-t-full"></div>
    </div>

    <div className="card2 h-full w-full rounded-2xl shadow-xl shadow-gray-300 border border-gray-200 absolute bottom-0 flex flex-col bg-white items-center text-center p-2 sm:p-4">
      <i className="fa-solid fa-briefcase text-3xl sm:text-5xl bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent mt-3 sm:mt-5"></i>
      <h1 className="text-xs sm:text-[15px] font-semibold mt-2">
        Get your dream jobs now
      </h1>
      <div className="bg-blue-500 absolute bottom-0 w-full h-8 sm:h-10 rounded-t-full"></div>
    </div>

    <div className="card3 bg-white h-full w-full rounded-2xl shadow-xl shadow-gray-300 border border-gray-200 absolute bottom-0 flex flex-col items-center text-center p-2 sm:p-4">
      <i className="fa-solid fa-laptop-code text-3xl sm:text-5xl bg-linear-to-r from-violet-500 via-purple-400 to-pink-400 bg-clip-text text-transparent mt-3 sm:mt-5"></i>
      <h1 className="text-xs sm:text-[15px] font-semibold mt-2">
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
   <div className="other mt-20 mb-10 min-h-50 flex gap-10 p-3 justify-center items-center flex-col ">

 <div className="first w-full sm:w-[80%] min-h-24 flex flex-col sm:flex-row items-center gap-3 sm:gap-6 p-4 rounded-2xl shadow-lg border border-gray-200 bg-white">

  <div className="round h-14 w-20 sm:h-16 sm:w-20 rounded-full flex justify-center items-center bg-gradient-to-br from-blue-500 via-violet-500 to-purple-500 shadow-lg">
    <i className="fa-solid fa-code text-white text-xl sm:text-2xl"></i>
  </div>

  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
    Learn your favorite and most in-demand programming languages from beginner to advanced level, including Java, JavaScript, Python, C++, React, and many more through structured lessons and hands-on practice.
  </p>

</div>

<div className="first w-full sm:w-[80%] min-h-24 flex flex-col sm:flex-row items-center gap-3 sm:gap-6 p-4 rounded-2xl shadow-lg border border-gray-200 bg-white">

  <div className="round h-14 w-20 sm:h-16 sm:w-20 rounded-full flex justify-center items-center bg-gradient-to-br from-emerald-400 via-green-500 to-teal-500 shadow-lg">
    <i className="fa-solid fa-diagram-project text-white text-xl sm:text-2xl"></i>
  </div>

  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
    Build real-world projects from beginner to advanced level and gain practical experience by creating professional applications that strengthen your portfolio and prepare you for internships and jobs.
  </p>

</div>

 <div className="first w-full sm:w-[80%] min-h-24 flex flex-col sm:flex-row items-center gap-3 sm:gap-6 p-4 rounded-2xl shadow-lg border border-gray-200 bg-white">

  <div className="round h-14 w-20 sm:h-16 sm:w-20 rounded-full flex justify-center items-center bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-600 shadow-lg">
    <i className="fa-solid fa-briefcase text-white text-xl sm:text-2xl"></i>
  </div>

  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
    Prepare for internships and high-paying tech jobs with industry-focused learning paths, interview preparation, coding challenges, resume guidance, and career-focused projects.
  </p>

</div>


   </div>
  
  {/* course area */}
 <TopHeading data={"Popular cources"}></TopHeading>
  <div className="course w-full mb-10 mt-10 min-h-50 flex flex-wrap justify-center gap-10 items-center" >
<div className="c-card h-40 w-60 rounded-2xl p-3 shadow text-center">
  <h1 className="font-semibold">Frontend Development</h1>
  <p className="text-[15px] mt-2  text-gray-600 leading-relaxed">Learn frontend basic to advance with modern technology</p>
  <h1 className="mt-5 font-bold">learn 1000+</h1>
</div>
<div className="c-card h-40 w-60 rounded-2xl p-3 shadow text-center">
  <h1 className="font-semibold">Mern stack</h1>
  <p className="text-[15px] mt-2  text-gray-600 leading-relaxed">Learn frontend basic to advance with modern technology</p>
  <h1 className="mt-5 font-bold">learn 3000+</h1>
</div>
<div className="c-card h-40 w-60 rounded-2xl p-3 shadow text-center">
  <h1 className="font-semibold">Java backend</h1>
  <p className="text-[15px] mt-2  text-gray-600 leading-relaxed">Learn frontend basic to advance with modern technology</p>
  <h1 className="mt-5 font-bold">learn 1500+</h1>
</div>

  </div>

  {/* cirtificate for students */}
<div className="flex justify-center items-center flex-col text-center p-3 sm:pr-10 sm:pl-10">
   <h1 className="font-bold sm:text-3xl text-2xl text-blue-500">Earn a Certificate That</h1>
    <h1 className="font-bold sm:text-3xl text-2xl mb-5">Showcases Your Skills</h1>
 </div>
    
   <div className="certificate mb-10 w-full min-h-100 gap-10 flex sm:flex-row flex-col justify-around items-center">

    <div className="leftimag sm:h-70 sm:w-90 h-40 w-50 rounded-2xl bg-gray-200">
      <img src="home.png" alt="" />
    </div>

   <div className="rightdata h-[80%] sm:w-140 w-70 flex flex-col gap-4 p-3">
  {/* Item 1 */}
  <div className="first p-4 border sm:flex-row flex-col border-gray-200 rounded-2xl flex gap-4 hover:shadow-lg transition-all">
    <div className="round bg-green-100 rounded-2xl h-12 w-12 flex justify-center items-center">
      <i className="fa-solid fa-award text-green-600"></i>
    </div>

    <div>
      <h1 className="font-bold text-lg">
        Industry-Ready Recognition
      </h1>
      <p className="text-gray-600 text-sm mt-1">
        Demonstrate your practical skills and real-world project experience
        with a professional certificate.
      </p>
    </div>
  </div>

  {/* Item 2 */}
  <div className="first p-4 border sm:flex-row flex-col border-gray-200 rounded-2xl flex gap-4 hover:shadow-lg transition-all">
    <div className="round bg-blue-100 rounded-2xl h-12 w-12 flex justify-center items-center">
      <i className="fa-solid fa-briefcase text-blue-600"></i>
    </div>

    <div>
      <h1 className="font-bold text-lg">
        Boost Your Career Profile
      </h1>
      <p className="text-gray-600 text-sm mt-1">
        Add your certificate to resumes, portfolios, and professional
        networking platforms.
      </p>
    </div>
  </div>

  {/* Item 3 */}
  <div className="first p-4 border border-gray-200 rounded-2xl flex sm:flex-row flex-col gap-4 hover:shadow-lg transition-all">
    <div className="round bg-violet-100 rounded-2xl h-12 w-12 flex justify-center items-center">
      <i className="fa-solid fa-trophy text-violet-600"></i>
    </div>

    <div>
      <h1 className="font-bold text-lg">
        Proof of Achievement
      </h1>
      <p className="text-gray-600 text-sm mt-1">
        Showcase your dedication, learning progress, and successful course
        completion with confidence.
      </p>
    </div>
  </div>

</div>

     </div>











 

   
   </>)
}
 
export default Home;