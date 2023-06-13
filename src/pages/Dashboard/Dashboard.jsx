// const Dashboard = () => {
//   return (
//     <div className="flex pt-[92px]">
//       <div className="flex flex-col h-full p-3 w-60 dark:bg-gray-900 dark:text-gray-100">
//         <div className="space-y-3">
//           <div className="flex items-center justify-between">
//             <h2>Fancy Clothes</h2>
//           </div>

//           <div className="flex-1 ">
//             <ul className="pt-2 pb-64 space-y-1 text-sm">
//               <li className="rounded-sm">
//                 <a
//                   rel="noopener noreferrer"
//                   href="#"
//                   className="flex items-center p-2 space-x-3 rounded-md"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 512 512"
//                     className="w-5 h-5 fill-current dark:text-gray-400"
//                   >
//                     <path d="M469.666,216.45,271.078,33.749a34,34,0,0,0-47.062.98L41.373,217.373,32,226.745V496H208V328h96V496H480V225.958ZM248.038,56.771c.282,0,.108.061-.013.18C247.9,56.832,247.756,56.771,248.038,56.771ZM448,464H336V328a32,32,0,0,0-32-32H208a32,32,0,0,0-32,32V464H64V240L248.038,57.356c.013-.012.014-.023.024-.035L448,240Z"></path>
//                   </svg>
//                   <span>Home</span>
//                 </a>
//               </li>

//               <li className="rounded-sm">
//                 <a
//                   rel="noopener noreferrer"
//                   href="/dashboard/my-cart"
//                   className="flex items-center p-2 space-x-3 rounded-md"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 512 512"
//                     className="w-5 h-5 fill-current dark:text-gray-400"
//                   >
//                     <path d="M203.247,386.414,208,381.185V355.4L130.125,191H93.875L16,355.4v27.042l4.234,4.595a124.347,124.347,0,0,0,91.224,39.982h.42A124.343,124.343,0,0,0,203.247,386.414ZM176,368.608a90.924,90.924,0,0,1-64.231,26.413h-.33A90.907,90.907,0,0,1,48,369.667V362.6l64-135.112L176,362.6Z"></path>
//                     <path d="M418.125,191h-36.25L304,355.4v27.042l4.234,4.595a124.347,124.347,0,0,0,91.224,39.982h.42a124.343,124.343,0,0,0,91.369-40.607L496,381.185V355.4ZM464,368.608a90.924,90.924,0,0,1-64.231,26.413h-.33A90.907,90.907,0,0,1,336,369.667V362.6l64-135.112L464,362.6Z"></path>
//                     <path d="M272,196.659A56.223,56.223,0,0,0,309.659,159H416V127H309.659a55.991,55.991,0,0,0-107.318,0H96v32H202.341A56.223,56.223,0,0,0,240,196.659V463H136v32H376V463H272ZM232,143a24,24,0,1,1,24,24A24,24,0,0,1,232,143Z"></path>
//                   </svg>
//                   <span>Orders</span>
//                 </a>
//               </li>

//               <li className="rounded-sm">
//                 <a
//                   rel="noopener noreferrer"
//                   href="#"
//                   className="flex items-center p-2 space-x-3 rounded-md"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 512 512"
//                     className="w-5 h-5 fill-current dark:text-gray-400"
//                   >
//                     <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
//                     <rect width="32" height="64" x="256" y="232"></rect>
//                   </svg>
//                   <span>Logout</span>
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="flex items-center p-2 mt-12 space-x-4 justify-self-end">
//           <img
//             src="https://source.unsplash.com/100x100/?portrait"
//             alt=""
//             className="w-12 h-12 rounded-lg dark:bg-gray-500"
//           />
//           <div>
//             <h2 className="text-lg font-semibold">Leroy Jenkins</h2>
//             <span className="flex items-center space-x-1">
//               <a
//                 rel="noopener noreferrer"
//                 href="#"
//                 className="text-xs hover:underline dark:text-gray-400"
//               >
//                 View profile
//               </a>
//             </span>
//           </div>
//         </div>
//       </div>
//       {/* <div>
//         <div className="">
//           <h2 className="text-center text-4xl font-bold mt-3">
//             Welcome to Dashboard
//           </h2>
//         </div>
//         <img
//           className=""
//           src="https://i.ibb.co/7jQZ9pc/dashboard-banner.jpg"
//           alt=""
//         />
//       </div> */}
//     </div>
//   );
// };

// export default Dashboard;


import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart ,FaWallet , FaHome , FaBookmark,FaUtensils, FaBook, FaUsers } from 'react-icons/fa';
import { AiOutlineMenu,AiOutlineHome,AiOutlineContacts } from "react-icons/ai";





const Dashboard = () => {

  const isAdmin = false;
  return (
    <div className="drawer lg:drawer-open">
    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content w-full flex flex-col mx-auto  items-center justify-center">
    <label htmlFor="my-drawer-2" className="btn bg-[#D1A054] drawer-button lg:hidden">Open drawer</label>
      <Outlet></Outlet>
      
    
    </div> 
    <div className="drawer-side">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
      <ul className="menu p-4 w-80 text-center text-xl h-[100%] bg-[#D1A054] text-base-content">
        {/* Sidebar content here */}

        <h2 className="text-4xl py-6">Bistro Boss</h2>

        {
          isAdmin?<>
            <li><NavLink
          to="/dashboard/home"
          aria-label="Our HomePage"
          title="Our HomePage"
          className={({ isActive }) =>
            isActive
              ? " border-md rounded-md bg-red-950 text-white"
              : "font-medium  text-white"
          }
        >
         <FaHome></FaHome> ADMIN HOME
        </NavLink></li>
        <li><NavLink
          to="/dashboard/add-item"
          aria-label="Our HomePage"
          title="Our HomePage"
          className={({ isActive }) =>
            isActive
              ? " border-md rounded-md bg-red-950 text-white"
              : "font-medium  text-white"
          }
        >
         <FaUtensils></FaUtensils> ADD ITEMS
        </NavLink></li>
        <li><NavLink
          to="/dashboard/manage-items"
          aria-label="Our HomePage"
          title="Our HomePage"
          className={({ isActive }) =>
            isActive
              ? " border-md rounded-md bg-red-950 text-white"
              : "font-medium  text-white"
          }
        >
         <FaWallet></FaWallet> MANAGE ITEMS
        </NavLink></li>
        <li><NavLink
          to="/dashboard/"
          aria-label="Our HomePage"
          title="Our HomePage"
          className={({ isActive }) =>
            isActive
              ? " border-md rounded-md bg-red-950 text-white"
              : "font-medium  text-white"
          }
        >
         <FaBook></FaBook> MANAGE BOOKINGS
        </NavLink></li>
        <li><NavLink
          to="/dashboard/all-users"
          aria-label="Our HomePage"
          title="Our HomePage"
          className={({ isActive }) =>
            isActive
              ? " border-md rounded-md bg-red-950 text-white"
              : "font-medium  text-white"
          }
        >
         <FaUsers></FaUsers>  ALL USERS
        </NavLink></li>
        
          
          
          </>:<>
            <li><NavLink
          to="/dashboard/home"
          aria-label="Our HomePage"
          title="Our HomePage"
          className={({ isActive }) =>
            isActive
              ? " border-md rounded-md bg-red-950 text-white"
              : "font-medium  text-white"
          }
        >
         <FaHome></FaHome> USER HOME
        </NavLink></li>
        
        <li><NavLink
          to="/dashboard/payment-history"
          aria-label="Our HomePage"
          title="Our HomePage"
          className={({ isActive }) =>
            isActive
              ? " border-md rounded-md bg-red-950 text-white"
              : "font-medium  text-white"
          }
        >
         <FaWallet></FaWallet>PAYMENT HISTORY
        </NavLink></li>
        <li><NavLink
          to="/dashboard/my-cart"
          aria-label="Our HomePage"
          title="Our HomePage"
          className={({ isActive }) =>
            isActive
              ? " border-md rounded-md bg-red-950 text-white"
              : "font-medium  text-white"
          }
        >
         <FaShoppingCart></FaShoppingCart> MY SELECTED CLASS 
        </NavLink></li>
      
        <li><NavLink
          to="/dashboard/my-enroll"
          aria-label="Our HomePage"
          title="Our HomePage"
          className={({ isActive }) =>
            isActive
              ? " border-md rounded-md bg-red-950 text-white"
              : "font-medium  text-white"
          }
        >
         <FaBookmark></FaBookmark>MY ENROLLED
        </NavLink></li>
          </>
        }
      
        <div className="divider"></div>
        <li><NavLink
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
        </NavLink></li>
        <li><NavLink
          to="/menu"
          aria-label="Our HomePage"
          title="Our HomePage"
          className={({ isActive }) =>
            isActive
              ? " border-md rounded-md bg-red-950 text-white"
              : "font-medium  text-white"
          }
        >
         <AiOutlineMenu></AiOutlineMenu> MENU
        </NavLink></li>
        <li><NavLink
          to="/shop"
          aria-label="Our HomePage"
          title="Our HomePage"
          className={({ isActive }) =>
            isActive
              ? " border-md rounded-md bg-red-950 text-white"
              : "font-medium  text-white"
          }
        >
         <FaShoppingCart></FaShoppingCart> SHOP
        </NavLink></li>
       
      
        <li><NavLink
          to="/contact"
          aria-label="Our HomePage"
          title="Our HomePage"
          className={({ isActive }) =>
            isActive
              ? " border-md rounded-md bg-red-950 text-white"
              : "font-medium  text-white"
          }
        >
         <AiOutlineContacts></AiOutlineContacts> CONTACT
        </NavLink></li>
       
        
      </ul>
    
    </div>
  </div>
  );
};

export default Dashboard;
