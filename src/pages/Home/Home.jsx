import { Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import Wrapper from "../../components/Wrapper/Wrapper";
import useFetch from "../../hooks/useFetch";
import useTitle from "../../hooks/useTitle";
import Banner from "./Banner/Banner";
import Classes from "./Classes/Classes";
import Instructors from "./Instructors/Instructors";
import { BASE_URL } from "../../hooks/global";
import Category from "../../components/Category/Category";
import Testimonials from "./Testimonials/Testimonials";
import Packages from "./Packages/Packages";
import Update from "./Update/Update";

const Home = () => {
  useTitle("Home");
  const getClasses = useFetch(`${BASE_URL}/popular-course`);

  const { data, loading } = getClasses;

  const classesItems = data;

  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <Wrapper>
        <p className="mt-20 text-xl font-bold text-center text-[#1EB2A6] ">
          OUR COURSES
        </p>
        <h1 className=" text-4xl text-center font-bold mt-3 mb-16 lg:text-5xl">
          Explore Our Popular Online Courses
        </h1>
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="grid grid-cols-12 gap-5 gap-y-10 ">
              {classesItems?.map((classesItem) => (
                <Classes
                  key={classesItem?._id}
                  courseId={classesItem?.courseId}
                  img={classesItem?.image}
                  title={classesItem?.name}
                  seats={classesItem?.available_seats}
                  instructor={classesItem?.instructor?.name}
                  price={classesItem?.price}
                />
              ))}
            </div>
            <Link to="/classes">
              <div className="flex items-center pt-5 justify-center ">
                <button className="px-8 py-2 font-bold text-cyan-50 border-md rounded-md bg-[#1EB2A6] hover:bg-[#428681] ">
                  SEE ALL CLASSES
                </button>
              </div>
            </Link>
          </>
        )}
      </Wrapper>
      <Wrapper>
        <p className="mt-20 text-xl font-bold text-center text-[#1EB2A6] ">
          OUR INSTRUCTOR
        </p>
        <h1 className=" text-4xl text-center font-bold mt-3 mb-16 lg:text-5xl">
          Our Popular Instructor
        </h1>
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="grid grid-cols-12 gap-5">
              {classesItems?.map((instructorItem) => (
                <Instructors
                  key={instructorItem?._id}
                  img={instructorItem?.instructor?.image}
                  instructor={instructorItem?.instructor?.name}
                  email={instructorItem?.instructor?.email}
                  taken={instructorItem?.instructor?.course_taken}
                />
              ))}
            </div>
            <Link to="/instructors">
              <div className="flex items-center pt-5 justify-center">
                <button className="px-8 py-2 font-bold text-cyan-50 border-md rounded-md bg-[#1EB2A6] hover:bg-[#428681]">
                  SEE ALL INSTRUCTORS
                </button>
              </div>
            </Link>
          </>
        )}
      </Wrapper>
      {/* <Featured></Featured> */}
      <Wrapper>
        <div className="py-6"></div>
      </Wrapper>
      <Packages></Packages>
      <Testimonials></Testimonials>
      <Update></Update>
    </div>
  );
};

export default Home;
