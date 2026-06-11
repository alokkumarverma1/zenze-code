import React from "react";
import { Link } from "react-router-dom";

function TechCard({ name ,details}) {
  return (
  <div className="techcard min-w-60 ml-5 min-h-44 flex flex-col justify-between p-5 rounded-2xl text-center shadow-md hover:shadow-2xl border border-gray-200 items-center bg-gradient-to-br from-cyan-50 via-sky-50 to-indigo-100 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]">

  <div>
    <h1 className="text-2xl font-bold text-gray-800"> {name}</h1>
    <p className="text-sm mt-3 text-gray-600 leading-relaxed">{details}</p>
  </div>

  <Link to="/learnDetails">
    <button className="mt-5 px-5 py-2 rounded-xl bg-white text-gray-700 font-medium shadow-md hover:shadow-lg transition-all duration-300">
      Explore
    </button>
  </Link>

</div>
  );
}

export default TechCard;