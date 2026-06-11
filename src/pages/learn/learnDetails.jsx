import React  from "react";
import Navbar from "../others/navbar";
import TechDataCard from "./techDataCard";

function LaearnDetails(){
    return(<>
    <Navbar></Navbar>
    <div className="learndetails mt-20">
     
     {/* basic */}
     <div className="basic w-full border min-h-100 p-5">
      <TechDataCard></TechDataCard>

     </div>


     {/* advance */}
     <div className="advance">

     </div>



    </div>
    
    </>)
}

export default LaearnDetails;