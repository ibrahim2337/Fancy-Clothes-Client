/* eslint-disable react/prop-types */
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import useTitle from "../../../hooks/useTitle";
const Instructors = ({ img, instructor, email, taken }) => {
  useTitle("Instructor");
  useEffect(() => {
    AOS.init();
}, []);
  return (
   
    <div className=" col-span-12 lg:col-span-4 rounded-lg shadow-lg ">
      <div className="card w-auto bg-base-100  shadow-xl">
      <div data-aos="zoom-in"> <figure>
          <img className="rounded-md w-full object-cover" src={img} alt="Instructor" />
        </figure></div>
        <div className="card-body">
          <h2 className="card-title">{instructor}</h2>
          <p>Email : {email}</p>
          <p>Classes taken : {taken}</p>
          <div className="card-actions justify-end">
            <div className=" px-5 py-2 mt-5 rounded-md bg-[#1EB2A6] hover:bg-[#05887d] text-white uppercase font-bold ">See Classes</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructors;
