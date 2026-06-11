import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar(){

    const [show,setShow] = useState(true);

    let change = ()=>{
        setShow(!show);
    }
    return(<>
    <div className="navbar   flex fixed  right-0  sm:w-full w-40 z-50 top-0 sm:justify-center justify-end items-center">
        {/* max area navbar  */}   
     <div className={`middle z-50 bg-white shadow-md border border-gray-200 sm:rounded-bl-2xl flex sm:justify-center  sm:rounded-br-2xl sm:h-10 h-screen sm:w-[80%] w-40 ${show ? "sm:flex hidden" : "flex sm:hidden"}`}>
      <ul className="w-full z-50 h-full flex sm:justify-around items-start  pb-2 pt-3 sm:p-0  flex-col sm:flex-row sm:items-center p-1 gap-2">
        <li className="w-full justify-start pl-2 sm:hidden "><i class="fa-solid fa-xmark cursor-pointer" onClick={change}></i></li>
        <Link to={"/profile"} className="w-full sm:hidden  rounded-[10px] h-9 flex justify-center items-center hover:bg-gray-200"><li  className="cursor-pointer flex gap-5  justify-center items-center"><i class="fa-solid fa-circle-user"></i>Profile</li></Link>
        <Link to={"/"} className="w-full  rounded-[10px] h-9 flex justify-center items-center hover:bg-gray-200"><li  className="cursor-pointer flex gap-5  justify-center items-center"><i class="fa-solid fa-house"></i>Home</li></Link>
        <Link to={"/learn"} className="w-full  rounded-[10px] h-9 flex justify-center items-center hover:bg-gray-200"><li  className="cursor-pointer flex gap-5  justify-center items-center"><i class="fa-solid fa-graduation-cap"></i>Learn</li></Link>
        <Link to={"/course"} className="w-full  rounded-[10px] h-9 flex justify-center items-center hover:bg-gray-200"><li  className="cursor-pointer flex gap-5  justify-center items-center"><i class="fa-solid fa-laptop-code"></i>Course</li></Link>
        <Link to={"/profile"} className="w-full hidden sm:flex    rounded-[10px] h-9  justify-center items-center hover:bg-gray-200"><li  className="cursor-pointer flex gap-5  justify-center items-center"><i class="fa-solid fa-circle-user"></i>Profile</li></Link>
      </ul>
     </div>

     {/* icon */}
     <div className="h-10 sm:hidden w-10 absolute right-0 top-3 rounded-2xl" onClick={change}>
      <i class="fa-solid fa-bars text-[20px]"></i>
     </div>

     {/* icon area  */}
     <div className="icon  top-2 absolute left-5 rounded-full h-9 w-9">
     
     </div>
    </div>
    </>)
}

export default Navbar;