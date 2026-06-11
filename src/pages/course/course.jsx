import React from "react";
import CourseCard from "./courseCard";
import Navbar from "../others/navbar";
import Footer from "../others/footer";

function Course(){
    return(<>
    <Navbar></Navbar>
    <div className="course flex sm:mt-20 mt-10 gap-5 p-5 flex-wrap mb-20">
     <CourseCard></CourseCard>
     <CourseCard></CourseCard>
     <CourseCard></CourseCard>

    </div>

    {/* footer */}
    <Footer></Footer>
    </>)
}

export default Course;