/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import aboutImg from "../../assets/about/aboutImg.jpg";
import icon1 from '../../assets/about/storytelling.png'
import icon2 from '../../assets/about/diploma.png'
import icon3 from '../../assets/about/athlete.png'

const About = () => {
  return (
    <div className=" lg:px-28">
      <div className="hero mt-24">
        <div className="hero-content grid gap-10 lg:grid-cols-2">
          <img src={aboutImg} className="rounded-lg shadow-xl h-[750px] w-full" />
          <div className="">
            <h3 className="font-bold text-xl text-[#1EB2A6]">LEARN ANYTHING</h3>
            <h1 className="text-5xl mt-3 font-bold ">
            Benefits About Online Learning Expertise
            </h1>

            <div className="flex border px-5 py-5 mt-10 hover:bg-[#1EB2A6] hover:text-white rounded-md">
              <div>
               <img className="h-[80px] w-[190px]" src={icon1} alt="" />
              </div>
              <div className="px-5">
                <h2 className="text-xl font-bold">Online Courses</h2>
                <p className="text-base mt-2">A fashion design course provides comprehensive training in various aspects of the field, including sketching, pattern-making, draping, garment construction, and textile selection.</p>
              </div>
            </div>
            <div className="flex border px-5 py-5 mt-5 hover:bg-[#1EB2A6] hover:text-white rounded-md">
              <div>
               <img className="h-[60px] w-[190px]" src={icon2} alt="" />
              </div>
              <div className="px-5">
                <h2 className="text-xl font-bold">Earn A Certificates</h2>
                <p className="text-base mt-2"> Earning a Fashion Design Certificate demonstrates your commitment and proficiency in the field, enhancing your credibility and making you more appealing to potential employers, clients, or fashion institutions..</p>
              </div>
            </div>

            <div className="flex border px-5 py-5 mt-5 hover:bg-[#1EB2A6] hover:text-white rounded-md">
              <div>
               <img className="h-[60px] w-[190px]" src={icon3} alt="" />
              </div>
              <div className="px-5">
                <h2 className="text-xl font-bold">Learn with Expert</h2>
                <p className="text-base mt-2">As a fashion design expert, you gain recognition and establish a strong reputation within the industry. Your expertise and knowledge make you a go-to resource for fashion-related advice, consultation, and collaboration.</p>
              </div>
            </div>
           
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
