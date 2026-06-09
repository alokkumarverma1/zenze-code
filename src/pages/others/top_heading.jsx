import React from "react";

function TopHeading({data}){
    return(<>
    <div className=" w-full h-10 flex justify-center items-center">
        <h1 className="text-3xl font-bold">{data}</h1>
    </div>
    </>)
}

export default TopHeading;