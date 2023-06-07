/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import planImg from "../../assets/plan/planning.jpg";
import { Link } from "react-router-dom";

const Plan = () => {
  return (
    <div className=" lg:px-28 bg-base-200">
      <div className="hero py-28 ">
        <div className="hero-content flex-col gap-10 lg:flex-row">
          <img src={planImg} className="rounded-lg shadow-2xl" />
          <div className="">
            <h1 className="text-5xl font-bold">
              Let's plan your perfect photoshoot
            </h1>
            <p className="py-6">
              That sounds like a fun idea! I'd be happy to help you plan a
              perfect photoshoot. Here are some steps we can take to make it a
              great experience: <br />
              <br />
              1.Choose a Theme or Concept: Determine the overall theme or
              concept for the photoshoot. It could be something like "Vintage
              Glamour," "Nature-inspired," or "Urban Exploration." Having a
              clear theme will help guide the location, props, outfits, and
              poses......
            </p>
            <Link to="/blogs">
              <button className="btn btn-primary ">Read More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
