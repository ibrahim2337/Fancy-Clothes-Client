import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";



const MyCart = () => {
    const {user} = useContext(AuthContext)
   

    const [cart, setCart] = useState([]);

    useEffect(() => {
      fetch(`http://localhost:5000/course-cart?email=${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
         
          setCart(data);
        });
  
    }, []);
  console.log(cart)
  
    console.log(cart);
   
    
  const handlePay = (data) => {
    data.customerName = user.displayName,
    data.customerEmail = user.email
    console.log(data);
  
    fetch("http://localhost:5000/order",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
    .then(data=> {
      console.log(data);
      window.location.replace(data.url)
    })
  }
    
    const handleDelete = (id) =>{
      
      Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
              fetch(`http://localhost:5000/course/delete/${id}`,{
                  method: 'DELETE'
              })
              .then(res => res.json())
              .then(data => {
                 
                  if(data.deletedCount>0){
               ;
                      Swal.fire(
                          'Deleted!',
                          'Your file has been deleted.',
                          'success'
                        )
                  }
              })
  
  
  
          
          }
        })
    }


    return (
        <div className="flex justify-center">
           <div className="w-full max-auto">
      <div className="pt-14 md:pt-20 space-y-14 w-[100%] lg:space-y-20">
        {!cart || cart?.length === 0 ? (
          <div className="h-[calc(100vh-10rem)] flex justify-center items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-black text-center leading-10 uppercase">
                No item available
              </h1>
              <Link
                to={"/"}
                className="flex items-center justify-center gap-2 mt-5 lg:mt-10 cursor-pointer"
              >
                <button
                  className={"rounded-sm bg-sky-500 text-white md:text-xl uppercase"}
                >
                  Go To Course
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="lg:flex lg:gap-x-4">
            <table className="table">
              
              <thead className="bg-sky-500 text-white rounded-lg">
                <tr>
                  <th></th>
                  <th>Image</th>
                  <th>Course Name</th>
                  <th>Course Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
               

                {cart?.map((course,index) => (
                  <tr key={course._id}>
                    <th>
                      <label>
                        {index + 1}
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={course.img}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{course.title}</td>
                    <td>{course.price}</td>
                    <th>

                      <button onClick={() => handlePay(course)}  className="btn btn-warning text-2xl">
                       Pay
                      </button>
                      <button onClick={()=>handleDelete(course?._id)} className="btn btn-ghost text-2xl btn-xs">
                        <AiOutlineDelete></AiOutlineDelete>
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
            
          </div>
        )}
        
      </div>
    </div>
        </div>
    );
};

export default MyCart;