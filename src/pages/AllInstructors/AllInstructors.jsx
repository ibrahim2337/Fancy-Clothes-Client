import Loader from "../../components/Loader/Loader";
import Wrapper from "../../components/Wrapper/Wrapper";
import useInstructor from "../../hooks/useInstructor";
import useTitle from "../../hooks/useTitle";
import Instructors from "../Home/Instructors/Instructors";


const AllInstructors = () => {
  useTitle("Instructor");

  const { course: instructor, isLoading } = useInstructor();
  console.log(instructor);

  return (
    <div className="pt-28">
      <p className="text-xl font-bold text-center text-[#1EB2A6] ">
        OUR COURSES
      </p>
      <h1 className="text-4xl text-center font-bold mt-3 lg:text-5xl">
      Definition, Skills and How To Become On
      </h1>
      <Wrapper className="py-20">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <div className="grid grid-cols-12 gap-5">
              {instructor?.map((instructorItem) => (
                <Instructors
                  key={instructorItem?.instructor?._id}
                  img={instructorItem?.instructor?.image}
                  instructor={instructorItem?.instructor?.name}
                  email={instructorItem?.instructor?.email}
                  taken={instructorItem?.instructor?.course_taken}
                />
              ))}
            </div>
          </>
        )}
      </Wrapper>
    </div>
  );
};

export default AllInstructors;
