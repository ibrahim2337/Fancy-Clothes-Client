import { useEffect, useState } from "react";
import ClassCard from "../ClassCard/ClassCard";

const ClassMenu = () => {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/course")
      .then((res) => res.json())
      .then((data) => {
       
        setCourse(data);
      });
  }, []);
 

  return (
    <div className="mt-24">
      <p className="text-xl font-bold text-center text-[#1EB2A6] ">
        OUR COURSES
      </p>
      <h1 className="text-4xl text-center font-bold mt-3 lg:text-5xl">
        Explore Our Popular Online Courses
      </h1>
      <div className="px-5 mt-12 lg:px-32 grid gap-5 lg:grid-cols-3">
      
       {
        course?.slice(0,6)?.map((item)=><ClassCard key={item._id} item={item}></ClassCard>)
       }
       
      </div>
    </div>
  );
};

export default ClassMenu;
