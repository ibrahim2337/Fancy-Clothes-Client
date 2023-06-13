import { useContext } from "react";
import useFetch from "../../hooks/useFetch";
import { AuthContext } from "../../provider/AuthProvider";

const MyEnrolled = () => {
  const { user } = useContext(AuthContext);
  const myEnroll = useFetch(
    `http://localhost:5000/my-enroll-course/${user?.email}`
  );

  const { data } = myEnroll;

  const enrolled = data;
  console.log(enrolled);

  return (
    <div className="w-full max-auto">
      <section className="container mt-10 px-4 mx-auto">
        <div className="flex  flex-evenly  items-center gap-10">
          <h2 className="lg:text-3xl text-center font-medium ">
            TOTAL ITEMS: {enrolled?.length}
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
                        className="px-4 py-3.5 text-sm font-normal text-center  "
                      >
                        <button className="flex items-center gap-x-2">
                          <span>INSTRUCTOR NAME</span>
                        </button>
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-center  "
                      >
                        <button className="flex uppercase items-center gap-x-2">
                          <span>Transaction Id</span>
                        </button>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="lg:text-center gap">
                    {enrolled?.map((course, index) => (
                      <tr key={course._id}>
                        <td className="px-4 py-4 text-sm text-center whitespace-nowrap">
                          <span>{index + 1}</span>
                        </td>
                        <td className="px-4 py-4 hidden lg:block text-sm font-medium  whitespace-nowrap">
                          <div className="inline-flex items-center gap-x-3">
                            <div className="flex items-center gap-x-2">
                              <img
                                className="object-cover w-10 h-10 rounded-md"
                                src={course?.order?.img}
                                alt=""
                              />
                            </div>
                          </div>
                        </td>

                        <td className="px-4 py-4 text-sm pl-5 md:pl-0 lg:text-center whitespace-nowrap">
                          {course?.order?.title}
                        </td>
                        <td className="px-4 py-4 text-sm text-start whitespace-nowrap">
                          {course?.order?.instructor.name}
                        </td>
                        <td className="px-4 py-4 text-sm text-start whitespace-nowrap">
                          {course?.transactionId}
                        </td>
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

export default MyEnrolled;
