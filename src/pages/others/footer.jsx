import React from "react";

function Footer(){
    return(<>
    <footer className="bg-gradient-to-br from-cyan-50 via-sky-50 to-indigo-100 border-t mt-20 border-gray-200">
  <div className="max-w-7xl mx-auto px-6 py-8">

    <div className="flex flex-col md:flex-row items-center justify-between gap-6">

      {/* Logo */}
     <div className="">
         <h1 className="text-3xl font-bold bg-black  bg-clip-text text-transparent">Zenze Code</h1>
         <p>Master modern technologies through structured courses, real-world projects, and practical learning experiences.</p>
     </div>
     
      {/* Social Icons */}
      <div className="flex items-center gap-4 text-xl">
        <a href="#" className="h-11 w-11 rounded-xl bg-white shadow flex items-center justify-center hover:-translate-y-1 transition">
          <i className="fa-brands fa-github"></i>
        </a>

        <a href="#" className="h-11 w-11 rounded-xl bg-white shadow flex items-center justify-center hover:-translate-y-1 transition">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>

        <a href="#" className="h-11 w-11 rounded-xl bg-white shadow flex items-center justify-center hover:-translate-y-1 transition">
          <i className="fa-brands fa-youtube"></i>
        </a>

        <a href="#" className="h-11 w-11 rounded-xl bg-white shadow flex items-center justify-center hover:-translate-y-1 transition">
          <i className="fa-brands fa-discord"></i>
        </a>
      </div>

    </div>

    <div className="mt-6 pt-6 border-t border-gray-200 text-center">
      <p className="text-sm text-gray-500">
        © 2026 Zenze Code. All Rights Reserved.
      </p>
    </div>

  </div>
</footer>
    
    </>)
}

export default Footer;