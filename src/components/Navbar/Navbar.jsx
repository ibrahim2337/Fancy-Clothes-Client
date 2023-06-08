import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="image ">
        <div className=" navbar px-5 lg:px-20 py-5 fixed z-50 opacity-40 bg-black">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 "
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
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
              >
                <li>
                  <a>Home</a>
                  <a>Gallery</a>
                  <a>Our Course</a>
                  <a>My Course</a>
                  <a>Contact us</a>
                  <a>Blogs</a>
                </li>
              </ul>
            </div>
            <NavLink to="/" className="text-3xl text-white">
            Fancy Clothes
            </NavLink>
          </div>
          <div className="navbar-center hidden lg:flex">
            <div className="menu menu-horizontal px-1 gap-3 ">
              <Link to="/home" className=" text-xl font-semibold text-white">
                Home
              </Link>
              <Link to="/gallery" className="text-xl font-semibold text-white">
                Gallery
              </Link>
              <Link to="/our-course" className=" text-xl font-semibold text-white">
                Our Course
              </Link>
              <Link to="/my-course" className=" text-xl font-semibold text-white">
                My Course
              </Link>
              <Link to="/contact" className=" text-xl font-semibold text-white">
                Contact Us
              </Link>
              <Link to="/blogs" className=" text-xl font-semibold text-white">
                Blogs
              </Link>
            </div>
          </div>
          <div className="navbar-end">
            <Link to="/login">
              <button className="px-8 py-3 rounded-md font-semibold text-lg bg-[#1EB2A6] hover:bg-[#05887d] text-white">
                LogIn
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
