import React from "react";

function ReviewCard({name , review, image}) {
  return (
    <div className="bg-white shadow-lg min-w-70 h-50 hover:bg-linear-to-br from-cyan-100 via-sky-50 to-indigo-100  rounded-2xl p-6 max-w-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
      
      {/* User Info */}
      <div className="flex items-center gap-2">
        <img src={`${image}`} alt="user" className="w-14 h-14 rounded-full object-cover"/>
        <div>
          <h3 className="font-semibold text-lg">{name}</h3>
        </div>
      </div>
      {/* Review */}
      <p className="text-gray-600 mt-1 leading-relaxed text-sm">{review}</p>
       {/* Rating */}
      <div className="flex gap-1 mt-2 text-yellow-400 text-xl justify-center">
        ★★★★★
      </div>

    </div>
  );
}

export default ReviewCard;