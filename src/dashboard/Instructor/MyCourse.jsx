import { useContext } from "react";
import { BASE_URL } from "../../hooks/global";
import useFetch from "../../hooks/useFetch";
import { AuthContext } from "../../Provider/AuthProvider";
import { AiOutlineCreditCard } from "react-icons/ai";
import useTitle from "../../hooks/useTitle";

const MyCourse = () => {
  useTitle("My Course");
  const { user } = useContext(AuthContext);

  const getMyClasses = useFetch(`${BASE_URL}/get-my-course/${user.email}`);

  const { data } = getMyClasses;

  const course = data;
console.log(course);
  return (
    <div className="w-full max-auto">
      <section className="container mt-10 px-4 mx-auto">
        <div className="flex  flex-evenly  items-center gap-10">
          <h2 className="lg:text-3xl text-center font-medium ">
            TOTAL ITEMS: {course?.length}
          </h2>
        </div>

        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-auto">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border  md:rounded-lg">
                <table className="min-w-full divide-y ">
                  <thead className=" bg-sky-500">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4  text-sm font-normal text-center  "
                      >
                        <div className="flex items-center gap-x-3"></div>
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-center hidden lg:block "
                      >
                        <div className="flex w-full justify-center items-center gap-x-3">
                          <span>COURSE IMAGE</span>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className=" py-3.5 text-sm font-normal text-center   "
                      >
                        <button className="flex w-full items-center pl-5 md:pl-0 lg:justify-center gap-x-2">
                          <p>COURSE NAME</p>
                        </button>
                      </th>
                      <th
                        scope="col"
                        className=" py-3.5 text-sm font-normal text-center   "
                      >
                        <button className="flex w-full items-center pl-5 md:pl-0 lg:justify-center gap-x-2">
                          <p>INSTRUCTOR NAME</p>
                        </button>
                      </th>
                      <th
                        scope="col"
                        className=" py-3.5 text-sm font-normal text-center   "
                      >
                        <button className="flex w-full items-center pl-5 md:pl-0 lg:justify-center gap-x-2">
                          <p>INSTRUCTOR EMAIL</p>
                        </button>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-center  "
                      >
                        <button className="flex items-center gap-x-2">
                          <span>PRICE</span>
                        </button>
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-center  "
                      >
                        <button className="flex items-center gap-x-2">
                          <span>ENROLLED</span>
                        </button>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-center  "
                      >
                        <button className="flex items-center gap-x-2">
                          <span>Status</span>
                        </button>
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-center  "
                      >
                        <button className="flex items-center gap-x-2">
                          <span>Feedback</span>
                        </button>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-center  "
                      >
                        ACTION
                      </th>
                    </tr>
                  </thead>
                  <tbody className="lg:text-center">
                    {course.map((item, index) => (
                      <tr key={item.id}>
                        <td className="px-4 py-4 text-sm text-center whitespace-nowrap">
                          <span>{index + 1}</span>
                        </td>
                        <td className="px-4 py-4 hidden lg:block text-sm font-medium  whitespace-nowrap">
                          <div className="inline-flex items-center gap-x-3">
                            <div className="flex items-center gap-x-2">
                              <img
                                className="object-cover w-10 h-10 rounded-md"
                                src={item.image}
                                alt=""
                              />
                            </div>
                          </div>
                        </td>

                        <td className="px-4 py-4 text-sm pl-5 md:pl-0 lg:text-center whitespace-nowrap">
                          {item.name}
                        </td>
                        <td className="px-4 py-4 text-sm pl-5 md:pl-0 lg:text-center whitespace-nowrap">
                          {item?.instructor.name}
                        </td>
                        <td className="px-4 py-4 text-sm pl-5 md:pl-0 lg:text-center whitespace-nowrap">
                          {item?.instructor?.email}
                        </td>
                        <td className="px-4 py-4 text-sm text-start whitespace-nowrap">
                          {item.price}
                        </td>
                        <td className="px-4 py-4 text-sm text-start whitespace-nowrap">
                          {item.totalEnroll}
                        </td>
                        
                        

                        <td className="px-4 py-4 text-sm text-start whitespace-nowrap">
                          {item.status === "approve" ? (
                            <button className="btn-sm text-xl cursor-default rounded-md text-white bg-green-500 transition-colors duration-200 hover:text-black focus:outline-none">
                              Approved
                            </button>
                          ) : item.status === "deny" ? (
                            <button className="btn-sm text-xl cursor-default rounded-md text-white bg-red-600 transition-colors duration-200 hover:text-black focus:outline-none">
                              Denied
                            </button>
                          ) : (
                            <>
                              <button className="btn-sm text-xl cursor-default rounded-md text-white bg-red-600 transition-colors duration-200 hover:text-black focus:outline-none">
                                Pending
                              </button>
                            </>
                          )}
                        </td>
                        <td className="px-4 py-4 text-sm text-start whitespace-nowrap">
                          {item.feedback}
                        </td>
                        <th>
                          <button className="btn btn-ghost text-2xl btn-xs">
                            <AiOutlineCreditCard></AiOutlineCreditCard>
                          </button>
                        </th>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyCourse;
