import { NavLink, Outlet } from "react-router-dom";
import {
  FaShoppingCart,
  FaWallet,
  FaHome,
  FaBookmark,
  FaUsers,
} from "react-icons/fa";
import { MdOutlineClass } from "react-icons/md";
import { AiTwotoneFileAdd } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import useAdmin from "../../hooks/isAdmin";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";
import useStudent from "../../hooks/isStudent";
import useInstructorDashboard from "../../hooks/isInstructor";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isStudent] = useStudent(user?.email);
  const [isInstructor] = useInstructorDashboard(user?.email);

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content w-full flex flex-col mx-auto  items-center justify-center">
        <label htmlFor="my-drawer-2" className="btn  drawer-button lg:hidden">
          Open drawer
        </label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-90 text-center text-xl h-[100%] bg-[#1EB2A6] text-base-content">
          {/* Sidebar content here */}

          <h2 className="text-4xl text-white py-6">FANCY CLOTHES</h2>

          {isAdmin && (
            <>
              <li>
                <NavLink
                  to="/dashboard/dashboard-home"
                  aria-label="Our HomePage"
                  title="Our HomePage"
                  className={({ isActive }) =>
                    isActive
                      ? " border-md uppercase rounded-md bg-white text-black"
                      : "font-medium uppercase text-white"
                  }
                >
                  <FaHome></FaHome> ADMIN HOME
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/manage-classes"
                  aria-label="Our HomePage"
                  title="Our HomePage"
                  className={({ isActive }) =>
                    isActive
                      ? " border-md uppercase rounded-md bg-white text-black"
                      : "font-medium uppercase text-white"
                  }
                >
                  <FaWallet></FaWallet> Manage Classes
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/manage-user"
                  aria-label="Our HomePage"
                  title="Our HomePage"
                  className={({ isActive }) =>
                    isActive
                      ? " border-md uppercase rounded-md bg-white text-black"
                      : "font-medium uppercase text-white"
                  }
                >
                  <FaUsers></FaUsers> Manage USERS
                </NavLink>
              </li>
            </>
          )}
          {isStudent && (
            <>
              <li>
                <NavLink
                  to="/dashboard/dashboard-home"
                  aria-label="Our HomePage"
                  title="Our HomePage"
                  className={({ isActive }) =>
                    isActive
                      ? " border-md uppercase rounded-md bg-white text-black"
                      : "font-medium uppercase text-white"
                  }
                >
                  <FaHome></FaHome> MY HOME Page
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/payment-history"
                  aria-label="Our HomePage"
                  title="Our HomePage"
                  className={({ isActive }) =>
                    isActive
                      ? " border-md uppercase rounded-md bg-white text-black"
                      : "font-medium uppercase text-white"
                  }
                >
                  <FaWallet></FaWallet>MY PAYMENT HISTORY
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/my-selected"
                  aria-label="Our HomePage"
                  title="Our HomePage"
                  className={({ isActive }) =>
                    isActive
                      ? " border-md uppercase rounded-md bg-white text-black"
                      : "font-medium uppercase text-white"
                  }
                >
                  <FaShoppingCart></FaShoppingCart> My Selected Classes{" "}
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/student-enrolled"
                  aria-label="Our HomePage"
                  title="Our HomePage"
                  className={({ isActive }) =>
                    isActive
                      ? " border-md uppercase rounded-md bg-white text-black"
                      : "font-medium uppercase text-white"
                  }
                >
                  <FaBookmark></FaBookmark>My Enrolled Classes
                </NavLink>
              </li>
            </>
          )}

          {isInstructor && (
            <>
              <li>
                <NavLink
                  to="/dashboard/add-Class"
                  aria-label="Our HomePage"
                  title="Our HomePage"
                  className={({ isActive }) =>
                    isActive
                      ? " border-md uppercase rounded-md bg-white text-black"
                      : "font-medium uppercase text-white"
                  }
                >
                  <AiTwotoneFileAdd></AiTwotoneFileAdd>Add Class
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/get-my-course"
                  aria-label="Our HomePage"
                  title="Our HomePage"
                  className={({ isActive }) =>
                    isActive
                      ? " border-md uppercase rounded-md bg-white text-black"
                      : "font-medium uppercase text-white"
                  }
                >
                  <MdOutlineClass></MdOutlineClass>MY Class
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li>
            <NavLink
              to="/"
              aria-label="Our HomePage"
              title="Our HomePage"
              className={({ isActive }) =>
                isActive
                  ? " border-md rounded-md bg-red-950 text-white"
                  : "font-medium  text-white"
              }
            >
              <AiOutlineHome></AiOutlineHome> HOME
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
