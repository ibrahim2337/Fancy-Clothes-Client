/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import planImg1 from "../../assets/plan/plan-1.jpg";
import planImg2 from "../../assets/plan/plan-2.jpg";
import planImg3 from "../../assets/plan/plan-3.jpg";

const Blogs = () => {
  return (
    <div className="py-10 lg:px-28 bg-base-200">
      <div className="">
        <h1 className="text-5xl font-bold text-center ">
          Let's plan your perfect photoshoot
        </h1>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col gap-10 lg:flex-row  lg:px-5">
            <img src={planImg1} className="max-w-sm rounded-lg shadow-2xl" />
            <div >
              <p className="py-6 border bg-slate-200 p-5">
                {" "}
                <span className="font-bold text-lg">
                  That sounds like a fun idea! I'd be happy to help you plan a
                  perfect photoshoot. Here are some steps we can take to make it
                  a great experience:
                </span>{" "}
                <br />
                <br />
                1.Choose a Theme or Concept: Determine the overall theme or
                concept for the photoshoot. It could be something like "Vintage
                Glamour," "Nature-inspired," or "Urban Exploration." Having a
                clear theme will help guide the location, props, outfits, and
                poses...... <br />
                <br />
                2.Select the Location: Think about the setting that best
                complements your chosen theme. It could be a beautiful outdoor
                location like a beach, park, or forest, or an indoor setting
                like a studio, a historic building, or a vibrant city street.
                Consider the lighting conditions, accessibility, and any permits
                or permissions required for shooting at specific locations.{" "}
                <br />
                <br />
                3.Arrange for a Photographer: Find a skilled photographer whose
                style aligns with your vision for the photoshoot. Look at their
                portfolio, read reviews, and discuss your ideas with them to
                ensure they understand your concept and can capture it
                effectively.
                <br />
                <br />
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
              4.Gather Props and Wardrobe: Depending on your chosen theme, you
              may need specific props and outfits to enhance the visual
              storytelling. Coordinate with the photographer and any models
              involved to ensure everyone has appropriate attire and
              accessories. Consider renting or borrowing items if needed.
              <br />
              <br />
              5.Plan the Shot List: Create a shot list that outlines the
              specific photos you want to capture during the photoshoot. This
              can include various poses, locations, and compositions. This will
              help keep the shoot organized and ensure you don't miss any
              important shots.
              <br /> <br />
              6.Coordinate Hair and Makeup: If you're working with models or
              want to have a specific look, arrange for a hairstylist and makeup
              artist. Discuss your vision with them and schedule their services
              accordingly. Make sure to allow enough time for hair and makeup
              preparation on the day of the shoot.
              <br />
              <br />
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
                7.Prepare for Contingencies: It's always a good idea to have a
                backup plan in case of unexpected weather changes or other
                unforeseen circumstances. Check the weather forecast beforehand
                and have alternative indoor or outdoor locations ready if
                needed.
                <br />
                <br />
                8.Communication and Logistics: Stay in touch with your
                photographer, models, and any other team members involved in the
                shoot. Confirm the date, time, and meeting location. Share all
                the necessary details, including the shot list, concept, and any
                specific requirements.
                <br />
                <br />
                9.Enjoy the Experience: On the day of the photoshoot, arrive
                early to ensure everything is set up as planned. Stay relaxed,
                have fun, and encourage everyone involved to enjoy the
                experience. Great photos often come from a positive and
                comfortable atmosphere.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
