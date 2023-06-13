/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import InstructorCard from "../../components/InstructorCard/InstructorCard";

const Instructors = () => {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/course")
      .then((res) => res.json())
      .then((data) => {
       
        setCourse(data);
      });
  }, []);
 console.log(course);
  return (
    <div className="pt-24">
      <section className="">
        <div className="container flex flex-col items-center justify-center  mx-auto sm:p-10">
          <p className="font-bold text-center text-xl text-[#1EB2A6]">
            OUR INSTRUCTORS
          </p>
          <h1 className="text-5xl font-bold text-center mt-3">
            Definition, Skills and How To Become One
          </h1>
          <div className="flex flex-row flex-wrap-reverse justify-center mt-8">

            {
            course?.map((item) => (
              <InstructorCard key={item._id} item={item}></InstructorCard>

            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Instructors;
