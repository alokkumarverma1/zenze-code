import React from "react";

function CourseCard() {
  return (
    <div className="w-60 bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300">
      {/* Image */}
      <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3" alt="Course"className="w-full h-36 object-cover" />
      {/* Content */}
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800">React.js Mastery</h2>
        <div className="mt-3 space-y-1 text-sm text-gray-600">
          <p>• 50+ Lessons</p>
          <p>• 20 Hours Content</p>
          <p>• 10 Projects</p>
          <p>• Certificate Included</p>
        </div>
        <button className="w-full mt-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:scale-[1.02] transition">
          Purchase
        </button>
      </div>
    </div>
  );
}

export default CourseCard;