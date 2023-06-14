import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

import { LuShoppingBag } from "react-icons/lu";
import useCart from "../../hooks/useCart";


const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const { course } = useCart();

  const signOut = () => {
    logOut()
      .then(() => {
        refreshPage();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const refreshPage = () => {
    window.location.reload();
  };

  const navItem = (
    <>
      <li>
        <NavLink
          to="/home"
          aria-label="Home"
          title="Home"
          className={({ isActive }) =>
            isActive
              ? " border-md rounded-md text-md bg-[#1EB2A6] text-white"
              : "font- text-md text-white"
          }
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/gallery"
          aria-label="Gallery"
          title="Gallery"
          className={({ isActive }) =>
            isActive
              ? " border-md rounded-md text-md bg-[#1EB2A6] text-white"
              : "font- text-md text-white"
          }
        >
          GALLERY
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/classes"
          aria-label="Classes"
          title="CLasses"
          className={({ isActive }) =>
            isActive
              ? " border-md rounded-md text-md bg-[#1EB2A6] text-white"
              : "font- text-md text-white"
          }
        >
          CLASSES
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/instructors"
          aria-label="Instructors"
          title="Instructors"
          className={({ isActive }) =>
            isActive
              ? " border-md rounded-md text-md bg-[#1EB2A6] text-white"
              : "font- text-md text-white"
          }
        >
          INSTRUCTORS
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/contact"
          aria-label="Our ContactPage"
          title="Our ContactPage"
          className={({ isActive }) =>
            isActive
              ? " border-md rounded-md text-md bg-[#1EB2A6] text-white"
              : "font- text-md text-white"
          }
        >
          CONTACT US
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blogs"
          aria-label="Blogs"
          title="Blogs"
          className={({ isActive }) =>
            isActive
              ? " border-md rounded-md text-md bg-[#1EB2A6] text-white"
              : "font- text-md text-white"
          }
        >
          BLOGS
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar fixed z-10 bg-opacity-30 h-20  text-white bg-sky-300">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52"
          >
            {navItem}

            {user?.uid ? (
              <>
                <li>
                  <Link
                    to="/login"
                    className="px-6 py-2 font-bold  border-md rounded-md hidden   "
                    aria-label="login"
                    title="login"
                  >
                    login
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/login"
                    className="px-6 py-2 font-bold  border-md rounded-md   bg-fuchsia-900  hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                    aria-label="login"
                    title="login"
                  >
                    login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <Link className="lg:ps-20 text-2xl font-bold text-[#a4ebe5]">FANCY CLOTHES</Link>
      </div>
      <div className="navbar-center hidden lg:flex lg:gap-10">
        <ul className=" text-xl menu-horizontal lg:gap-8 px-1">{navItem}</ul>
        {user?.uid ? (
          <NavLink
            to="/dashboard/dashboard-home"
            aria-label="Our HomePage"
            title="Our HomePage"
            className={({ isActive }) =>
              isActive
                ? "  underline decoration-double text-xl decoration-sky-600 text-white"
                : "font-medium text-xl  text-white"
            }
          >
            DASHBOARD
          </NavLink>
        ) : (
          ""
        )}
      </div>
      <div className="navbar-end gap-4">
        <div className="flex items-center ">
          <label className="swap swap-rotate">
            <input type="checkbox" />

            <svg
              className="swap-on fill-current w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            <svg
              className="swap-off fill-current w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
        {user?.uid ? (
          <>
            <div className="dropdown dropdown-hover dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle border-2 border-primary avatar ml-2"
              >
                <div className="w-10 rounded-full">
                  {user?.photoURL ? (
                    <img alt="" src={user.photoURL} />
                  ) : (
                    <img
                      alt=""
                      src="https://i.ibb.co/VvZScTP/blank-avatar.png"
                    />
                  )}
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content p-2 shadow bg-sky-600  border rounded-md w-52"
              >
                <li>
                  <Link>{user?.displayName}</Link>
                </li>
                <li>
                  <Link to="/dashboard/dashboard-home">Dashboard</Link>
                </li>
                <li>
                  <Link>Profile</Link>
                </li>
                <li>
                  <Link onClick={signOut}>Logout</Link>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <ul className="col-span-3 justify-end items-center hidden space-x-8 lg:flex">
              <li>
                <Link
                  to="/login"
                  className="px-8 py-2 uppercase font-bold text-cyan-50 border-md rounded-md bg-pink-400  bg-gradient-to-r from-sky-500 to-pink-300"
                  aria-label="login"
                  title="login"
                >
                  Login
                </Link>
              </li>
            </ul>
          </>
        )}
        <Link to="/dashboard/my-selected">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator text-2xl">
                <LuShoppingBag></LuShoppingBag>
                <span className="badge badge-sm indicator-item">
                  +{course?.length}
                </span>
              </div>
            </label>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
