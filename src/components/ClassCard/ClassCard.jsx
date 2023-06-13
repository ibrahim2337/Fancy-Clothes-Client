import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import useCart from "../../hooks/useCard";
import { useNavigate } from "react-router-dom";

const ClassCard = ({item}) => {
   const {name,price,available_seats,image,instructor,courseId}=item;
   const {user} = useContext(AuthContext)
  //  const {refetch} = useCart()
   const {navigate} = useNavigate()

   const handleAddToCart = () => {
    if (user && user.email) {
      const courseItem = {
        courseId,
        title:name,
        img:image,
        price,
        seats:available_seats,
        instructor,
        email: user.email,
      };
      fetch('http://localhost:5000/course-cart', {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(courseItem),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.insertedId);
          if (data.insertedId) {
            // refetch();
            Swal.fire({
              position: "items-center",
              icon: "success",
              title: " add ok ",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to order the food",

        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div>
      <div className="w-full max-w-sm overflow-hidden rounded-lg shadow-lg ">
        <img
          className="object-cover object-center w-full h-56"
          src={image}
          alt="avatar"
        />

        <div className="px-6 py-4">
          <h1 className="text-xl font-semibold text-gray-800 ">
            {name}
          </h1>
          <div>
            <img src="" alt="" />
            <h3>{instructor.name}</h3>
          </div>
          <div>
            <h2>Available seats:{available_seats}</h2>
            <p>Price: ${price}</p>
          </div>
          <button onClick={() => handleAddToCart()} className="w-full px-5 py-3 mt-5 rounded-md border-2 border-[#1EB2A6] text-[#1EB2A6] uppercase font-bold hover:bg-[#1EB2A6] hover:text-white">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
