import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import useAllCourse from "../../../hooks/useAllCourse";
import { useState } from "react";
import useTitle from "../../../hooks/useTitle";
import { BASE_URL } from "../../../hooks/global";
import axios from 'axios';

const ManageCourse = () => {
  useTitle("Manage Course");
  const { course, refetch } = useAllCourse();
  console.log(course);
  const [singleItem, setSingleItem] = useState({})

  const handleUpdateStatus = (item) => {
    axios.patch(`${BASE_URL}/update/course`, item).then((res) => {
      refetch();
      if (res.data.modifiedCount > 0) {
        Swal.fire("Update!", "This course is approved.", "success");
      }
    });
  };



  const handleCloseModal = () => {
    window.my_modal_3.open = false;
  };
  const handleOpenModal = () => {
    window.my_modal_3.open = true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const feedback = form.feedback.value;
    console.log({ feedback });

    singleItem.feedback = feedback
    axios.patch(`${BASE_URL}/update/course/deny`, singleItem).then((res) => {
      refetch();
      if (res.data.modifiedCount > 0) {
        setSingleItem({})
        window.my_modal_3.open = false;
        Swal.fire("Update!", "This course is denied.", "success");
      }
    });
  };

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`${BASE_URL}/course/${item._id}`).then((res) => {
          console.log("deleted res", res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
    });
  };
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
                          <span>Status</span>
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
                              <button
                                onClick={() => handleUpdateStatus(item)}
                                className="btn-sm mr-2 text-xl rounded-md text-white bg-yellow-500 transition-colors duration-200 hover:text-black focus:outline-none"
                              >
                                Pending
                              </button>
                              <button
                                onClick={() => {handleOpenModal(), setSingleItem(item)}}
                                className="btn-sm text-xl rounded-md text-white bg-red-600 transition-colors duration-200 hover:text-black focus:outline-none"
                              >
                                Deny
                              </button>
                            </>
                          )}
                        </td>

                        <td className="flex gap-5 px-4 py-4 text-sm whitespace-nowrap">
                          <button
                            onClick={() => handleDelete(item)}
                            className="btn-sm text-xl text-white bg-red-600 transition-colors duration-200 hover:text-black focus:outline-none"
                          >
                            <AiOutlineDelete></AiOutlineDelete>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <dialog id="my_modal_3" className="modal">
            <form method="dialog" onSubmit={handleSubmit} className="modal-box">
              <button
                type="button"
                onClick={() => handleCloseModal()}
                htmlFor="my-modal-3"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </button>
              <h3 className="font-bold text-lg text-center">
                Write your feedback for deny
              </h3>
              <textarea
                placeholder="Your Feedback"
                name="feedback"
                className="textarea textarea-bordered textarea-lg w-full mt-5"
              ></textarea>

              <button
                type="submit"
                className="btn btn-md bg-sky-500 text-white w-full mt-5"
              >
                Submit
              </button>
            </form>
          </dialog>
        </div>
      </section>
    </div>
  );
};

export default ManageCourse;
