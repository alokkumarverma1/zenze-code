import React from "react";


function Heading({heading}){
    return(<>
    <div className="text-3xl font-semibold w-full h-10 flex justify-center items-center text-white">
        <h1 >{heading}</h1>
    </div>
    
    </>)
}

export default Heading;