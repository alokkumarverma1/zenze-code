import React from "react";

function TechCard({ name }) {
  return (
    <div className="techcard w-70 h-30 rounded-2xl shadow-md hover:shadow-xl border border-gray-200 flex justify-center items-center bg-gradient-to-br from-cyan-50 via-sky-50 to-indigo-100 transition-all duration-300 hover:-translate-y-1">
      <h1 className="text-3xl font-bold text-gray-800">{name}</h1>
    </div>
  );
}

export default TechCard;