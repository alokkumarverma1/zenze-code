import React, { useState } from "react";
import Navbar from "../others/navbar";
import Footer from "../others/footer";
import { Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    number: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <Navbar></Navbar>

      <div className="login w-full min-h-screen bg-linear-to-br flex justify-center items-center from-cyan-50 via-sky-50 to-indigo-100">
        <div className="userdata mt-20 mb-30 w-[90%] flex flex-col items-center rounded-2xl p-3 sm:p-10 pt-5 shadow-md border border-gray-100 min-h-100 bg-white">
          
          <div className="flex mb-5 justify-center items-center flex-col text-center">
            <h1 className="font-bold sm:text-3xl text-2xl">
              <span className="bg-gradient-to-br from-cyan-500 via-sky-300 to-indigo-500 bg-clip-text text-transparent">
                Login
              </span>{" "}
              account
            </h1>
          </div>

          <form
            onSubmit={handleSubmit}
            className="w-full h-full flex flex-col items-center gap-5"
          >
            <input
              type="number"
              name="number"
              placeholder="User number"
              value={formData.number}
              onChange={handleChange}
              className="w-full bg-white/80 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            />

            <input
              type="password"
              name="password"
              placeholder="User password"
              value={formData.password}
              onChange={handleChange}
              className="w-full bg-white/80 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            />

            <button
              type="submit"
              className="sm:w-[50%] w-full h-10 border rounded-[10px] bg-linear-to-br from-cyan-300 via-sky-200 to-indigo-300 text-white"
            >
              Login
            </button>
          </form>

          {/* change page */}
          <div className="mt-3 mb-10">
            <p> Don't have an account{" "}<span className="text-blue-500 font-semibold cursor-pointer"><Link to={"/register"}>Register</Link></span>
            </p>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

export default Login;