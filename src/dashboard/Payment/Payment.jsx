import { useContext } from "react";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../hooks/global";
import { AuthContext } from "../../Provider/AuthProvider";

const Payment = () => {
  const { user } = useContext(AuthContext);
  const myEnroll = useFetch(`${BASE_URL}/my-enroll-course/${user?.email}`);

  const { data } = myEnroll;

  const enrolled = data;
  console.log(enrolled);

  return (
    <div className="w-full max-auto">
      <section className="container mt-10 px-4 mx-auto">
        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-auto">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border  md:rounded-lg">
                <table className="min-w-full divide-y ">
                  <thead className=" bg-[#1EB2A6]">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4  text-sm font-normal text-center  "
                      >
                        <div className="flex items-center gap-x-3"></div>
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
                        <button className="flex uppercase items-center gap-x-2">
                          <span>Price</span>
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
                    {enrolled.map((course, index) => (
                      <tr key={course._id}>
                        <td className="px-4 py-4 text-sm text-center whitespace-nowrap">
                          <span>{index + 1}</span>
                        </td>

                        <td className="px-4 py-4 text-sm pl-5 md:pl-0 lg:text-center whitespace-nowrap">
                          {course?.order?.title}
                        </td>
                        <td className="px-4 py-4 text-sm pl-5 md:pl-0 lg:text-start whitespace-nowrap">
                          {course?.order?.price}
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

export default Payment;
