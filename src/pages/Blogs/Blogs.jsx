/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import planImg1 from "../../assets/about/plan-1.jpg";
import planImg2 from "../../assets/about/plan-2.jpg";
import planImg3 from "../../assets/about/plan-3.jpg";

const Blogs = () => {
  return (
    <div className="pt-28 lg:px-28 bg-base-200">
      <div className="">
        <h1 className="text-5xl font-bold text-center ">
          Let's plan your perfect <span className="text-[#1EB2A6]">Fashion Designer</span>
        </h1>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col gap-10 lg:flex-row  lg:px-5">
            <img src={planImg1} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <p className="py-6 border bg-slate-200 p-5">
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
                consider factors like color, texture, silhouette, proportion,
                and functionality while creating their designs.
                <br />
                <br />
                Fashion designers often work in teams, collaborating with
                pattern-makers, seamstresses, and other professionals in the
                industry to bring their designs to life. They may showcase their
                creations through fashion shows, exhibitions, or retail
                displays, and their designs may be sold in stores or online.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="hero-content flex-col gap-10 lg:flex-row-reverse lg:px-5">
          <img src={planImg2} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <p className="py-6 border bg-slate-200 p-5">
              Fashion design is a multifaceted discipline that involves the
              process of creating original clothing and accessories. It combines
              artistic creativity with technical expertise to design garments
              that are visually appealing, functional, and reflective of current
              trends or personal styles. A fashion designer's goal is to create
              unique and innovative designs that resonate with consumers and
              make a statement in the fashion industry.
              <br />
              <br />
              The process of fashion design typically begins with extensive
              research and trend analysis. Designers explore various sources of
              inspiration, such as art, culture, nature, and historical
              references, to develop a concept or theme for their collection.
              They study fabric textures, colors, and patterns, as well as
              silhouette trends and garment construction techniques.
              <br />
              <br />
              Sketching is a fundamental part of the fashion design process.
              Designers use hand-drawn or digital illustrations to bring their
              ideas to life, capturing the desired shapes, proportions, and
              details of the garments. These initial sketches serve as a visual
              representation of the designer's vision and serve as the basis for
              further development.
            </p>
          </div>
        </div>
      </div>

      <div className="">
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col gap-10 lg:flex-row  lg:px-5">
            <img src={planImg3} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <p className="py-6 border bg-slate-200 p-5">
                Fashion designers also consider market trends, target
                demographics, and consumer preferences while developing their
                designs. They strive to strike a balance between artistic
                expression and commercial viability, aiming to create clothing
                that appeals to their target audience while staying true to
                their creative vision.
                <br />
                <br />
                In addition to designing clothing, fashion designers often
                extend their creative vision to accessories such as footwear,
                handbags, and jewelry, ensuring a cohesive aesthetic across
                their entire collection.
                <br />
                <br />
                Fashion design is a dynamic and competitive field that requires
                continuous innovation, adaptability to trends, and a strong
                understanding of the fashion industry. Successful fashion
                designers possess a keen eye for detail, a strong sense of
                aesthetics, and a passion for creating unique and wearable art.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
