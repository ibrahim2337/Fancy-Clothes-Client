import { Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Wrapper from "../../components/Wrapper/Wrapper";
import useFetch from "../../hooks/useFetch";
import useTitle from "../../hooks/useTitle";
import Banner from "./Banner/Banner";
import Classes from "./Classes/Classes";

import Instructors from "./Instructors/Instructors";
import { BASE_URL } from "../../hooks/global";
import Featured from "./Featured/Featured";


const Home = () => {
  useTitle("Home");
  const getClasses = useFetch(`${BASE_URL}/popular-course`);

  const { data, loading } = getClasses;

  const classesItems = data;

  return (
    <div>
      <Banner></Banner>
      <Wrapper>
        <SectionTitle
          SubHeading={"MOST POPULAR"}
          heading={"CLASSES"}
        ></SectionTitle>
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
              <div className="flex items-center pt-10 justify-center ">
                <button className="px-8 py-2 font-bold text-cyan-50 border-md rounded-md bg-pink-400  bg-gradient-to-r from-pink-500 to-sky-300">
                  SEE ALL CLASSES
                </button>
              </div>
            </Link>
          </>
        )}
      </Wrapper>
      <Wrapper>
        <SectionTitle
          SubHeading={"MOST LOVED"}
          heading={"INSTRUCTORS"}
        ></SectionTitle>
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
              <div className="flex items-center pt-10 justify-center">
                <button className="px-8 py-2 font-bold text-cyan-50 border-md rounded-md bg-pink-400  bg-gradient-to-r from-pink-500 to-sky-300">
                  SEE ALL INSTRUCTORS
                </button>
              </div>
            </Link>
          </>
        )}
      </Wrapper>
      <Featured></Featured>
      <Wrapper>
      <div className="py-6">
      </div>
      </Wrapper>
    </div>
  );
};

export default Home;
