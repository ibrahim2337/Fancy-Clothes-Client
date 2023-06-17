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
              ? " border-md rounded-md text-md text-[#a4ebe5] underline"
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
              ? " border-md rounded-md text-md text-[#a4ebe5] underline"
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
              ? " border-md rounded-md text-md text-[#a4ebe5] underline"
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
              ? " border-md rounded-md text-md text-[#a4ebe5] underline"
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
              ? " border-md rounded-md text-md text-[#a4ebe5] underline"
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
              ? " border-md rounded-md text-md  text-[#a4ebe5] underline"
              : "font- text-md text-white"
          }
        >
          BLOGS
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar fixed z-10 bg-opacity-30 h-20  text-white bg-black">
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
                    className="px-6 py-2 font-bold  border-md rounded-md   bg-[#1EB2A6] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
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
        <Link className="px-5 text-2xl font-bold text-[#a4ebe5]">
          FANCY CLOTHES
        </Link>
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
        {user?.uid ? (
          <>
            <div className="dropdown dropdown-hover dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle border-2 border-[#1EB2A6] avatar ml-2"
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
                className="menu justify-center menu-compact dropdown-content p-2 shadow bg-[#1EB2A6] border rounded-md w-52"
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
                  className=" px-5 py-3 mt-5 rounded-md bg-[#1EB2A6] hover:bg-[#05887d] text-white uppercase font-bold"
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
