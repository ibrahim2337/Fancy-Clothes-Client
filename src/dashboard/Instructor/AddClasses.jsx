import Swal from "sweetalert2";
import Wrapper from "../../components/Wrapper/Wrapper";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useTitle from "../../hooks/useTitle";
import { BASE_URL } from "../../hooks/global";

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddClasses = () => {
  useTitle("Add Classes");
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const courseName = form.courseName.value;
    const coursePrice = form.coursePrice.value;
    const seat = form.seat.value;
    const duration = form.duration.value;
    const description = form.description.value;
    const coursePhoto = form.coursePhoto.files[0];
    const formData = new FormData();
    formData.append("image", coursePhoto);
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        const img = data.data.display_url;

        const newCourse = {
          name: courseName,
          description,
          price: parseFloat(coursePrice),
          duration,
          available_seats: seat,
          image: img,
          instructor: {
            name: user?.displayName,
            email: user?.email,
            image: user.photoURL,
            course_name: courseName,
            course_taken: 1,
          },
        };
        console.log(newCourse);

        fetch(
          `${BASE_URL}/course`,
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(newCourse),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              form.reset();
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Course added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      });
  };

  return (
    <div className="w-full ">
      <Wrapper>
        <SectionTitle
          SubHeading="What's New"
          heading="Add Course"
        ></SectionTitle>
        <form onSubmit={handleSubmit}>
          <div className="form-control w-full max-auto">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Instructor name*</span>
              </label>
              <input
                readOnly
                type="text"
                placeholder="Instructor name"
                defaultValue={user?.displayName}
                name="userName"
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Instructor Email*</span>
              </label>
              <input
                readOnly
                type="Email"
                placeholder="Instructor Email"
                defaultValue={user?.email}
                name="email"
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Course Name*</span>
              </label>
              <input
                type="text"
                placeholder="Course Name"
                name="courseName"
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Course Price*</span>
              </label>
              <input
                type="number"
                placeholder="Course Price"
                name="coursePrice"
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Available Seats*</span>
              </label>
              <input
                type="number"
                placeholder="Available Seats"
                name="seat"
                className="input input-bordered w-full "
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Course Duration*</span>
              </label>
              <textarea
                className="textarea textarea-bordered h-24"
                name="duration"
                placeholder="Bio"
              ></textarea>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Course Description*</span>
              </label>
              <textarea
                className="textarea textarea-bordered h-24"
                name="description"
                placeholder="Description"
              ></textarea>
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Pick a Class Image*</span>
              </label>
              <input
                name="coursePhoto"
                type="file"
                className="file-input file-input-bordered w-full  mb-5"
              />
            </div>

            <input
              type="submit"
              className="btn bg-sky-500 "
              value="Add Course"
            />
          </div>
        </form>
      </Wrapper>
    </div>
  );
};

export default AddClasses;
