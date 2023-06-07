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
              Let's plan your perfect  Fashion Designer
            </h1>
            <p className="py-6">
            Fashion design is the art and profession of creating clothing
                and accessories. It involves the process of designing and
                producing garments that are aesthetically pleasing, functional,
                and suitable for various occasions or purposes. Fashion
                designers are responsible for conceptualizing and creating new
                styles, trends, and collections.
                <br />
                <br />
                Fashion design encompasses several stages, including research,
                sketching, fabric selection, pattern-making, garment
                construction, and presentation. Designers draw inspiration from
                various sources such as art, culture, history, nature, and
                current trends to develop unique and innovative designs. They
                consider factors like color, texture, silhouette.....
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
