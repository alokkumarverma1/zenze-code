import React from "react";
import Navbar from "../others/navbar";

function Profile() {


  return (<>

  <Navbar></Navbar>
  <div className="profile flex justify-center flex-col gap-2 items-center w-full h-40 mt-20 shadow-md">
    <div className="round h-30 w-30 rounded-2xl bg-gray-200"></div>
    <h1 className="font-semibold">Alok kumar verma</h1>
  </div>
  </>);
}

export default Profile;