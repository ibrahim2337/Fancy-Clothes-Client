import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader/Loader";
import Wrapper from "../../components/Wrapper/Wrapper";
import Classes from "../Home/Classes/Classes";
import useTitle from "../../hooks/useTitle";

const AllClasses = () => {
  useTitle("AllClasses");
  const getClasses = useFetch("https://fancy-clothes-server.vercel.app/course");

  const { data, loading } = getClasses;

  const classesItems = data;

  return (
    <div className="pt-28">
      <p className="text-xl font-bold text-center text-[#1EB2A6] ">
        OUR COURSES
      </p>
      <h1 className="text-4xl text-center font-bold mt-3 lg:text-5xl">
        Explore Our All Online Courses
      </h1>
      <Wrapper className='py-20'>
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="grid grid-cols-12 gap-5">
              {classesItems?.map((classesItem) => (
                <Classes
                  key={classesItem?._id}
                  img={classesItem?.image}
                  title={classesItem?.name}
                  seats={classesItem?.available_seats}
                  instructor={classesItem?.instructor?.name}
                  price={classesItem?.price}
                />
              ))}
            </div>
          </>
        )}
      </Wrapper>
    </div>
  );
};

export default AllClasses;
