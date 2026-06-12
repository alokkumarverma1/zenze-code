import React from "react";
import Navbar from "../others/navbar";

function Profile() {
  return (
    <>
      <Navbar />

      <div className="w-full min-h-screen bg-gradient-to-br from-cyan-50 via-sky-50 to-indigo-100 pt-24 pb-10">

        {/* Profile Card */}
    <div className="w-[95%] sm:w-[80%] mx-auto bg-white rounded-2xl shadow-md p-6">
      <div className="flex flex-col items-center">
         <img src="" alt="" className="h-20 w-20 rounded-2xl bg-gray-500"/> 
         <h1 className="text-2xl font-bold mt-4"> Alok Kumar Verma</h1>
         <p className="text-gray-600">alok@gmail.com</p>
         <p className="text-gray-600">+91 9876543210</p>
      </div>
    </div>

        {/* Courses Section */}
    <div className="flex mt-5 justify-center  items-center flex-col text-center">
          <h1 className="font-bold sm:text-3xl text-2xl"><span className="bg-gradient-to-br from-cyan-500 via-sky-300 to-indigo-500 bg-clip-text text-transparent">Your</span> courses</h1>
    </div>
    <div className="couser-area">
      
    </div>



      </div>
    </>
  );
}

export default Profile;