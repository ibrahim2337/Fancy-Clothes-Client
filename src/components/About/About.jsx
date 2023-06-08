/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import aboutImg from "../../assets/about/aboutImg.jpg";
import icon1 from '../../assets/about/storytelling.png'
import icon2 from '../../assets/about/diploma.png'
import icon3 from '../../assets/about/athlete.png'

const About = () => {
  return (
    <div className=" lg:px-28 bg-base-200">
      <div className="hero py-28 ">
        <div className="hero-content grid gap-10 lg:grid-cols-2">
          <img src={aboutImg} className="rounded-lg shadow-2xl" />
          <div className="">
            <h3 className="font-bold text-[#1EB2A6]">LEARN ANYTHING</h3>
            <h1 className="text-5xl font-bold mt-5">
            Benefits About Online Learning Expertise
            </h1>

            <div className="flex border px-5 py-5 mt-5 hover:bg-[#1EB2A6] hover:text-white rounded-md">
              <div>
               <img className="h-[80px] w-[150px]" src={icon1} alt="" />
              </div>
              <div className="px-5">
                <h2 className="text-xl font-bold">Online Courses</h2>
                <p className="text-base mt-2">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
            </div>
            <div className="flex border px-5 py-5 mt-5 hover:bg-[#1EB2A6] hover:text-white rounded-md">
              <div>
               <img className="h-[60px] w-[150px]" src={icon2} alt="" />
              </div>
              <div className="px-5">
                <h2 className="text-xl font-bold">Online Courses</h2>
                <p className="text-base mt-2">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
            </div>

            <div className="flex border px-5 py-5 mt-5 hover:bg-[#1EB2A6] hover:text-white rounded-md">
              <div>
               <img className="h-[60px] w-[150px]" src={icon3} alt="" />
              </div>
              <div className="px-5">
                <h2 className="text-xl font-bold">Online Courses</h2>
                <p className="text-base mt-2">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
            </div>
           
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
