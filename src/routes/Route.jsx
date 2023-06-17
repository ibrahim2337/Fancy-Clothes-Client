import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import AllClasses from "../pages/AllClasses/AllClasses";
import AllInstructors from "../pages/AllInstructors/AllInstructors";
import Dashboard from "../dashboard/Dashboard/Dashboard";
import MySelected from "../dashboard/MySelected/MySelected";
import StudentHome from "../dashboard/StudentHome/StudentHome";
import StudentPayment from "../dashboard/StudentPayment/StudentPayment";
import StudentEnrolled from "../dashboard/StudentEnrolled/StudentEnrolled";
import ManageUser from "../dashboard/Admin/ManageUser/ManageUser";
import PrivateRoute from "./PrivateRoute";

import ManageCourse from "../dashboard/Admin/ManageCourse/ManageCourse";
import Fail from "../components/Fail/Fail";
import AddClasses from "../dashboard/Instructor/AddClasses";
import Payment from "../dashboard/Payment/Payment";
import Error from "../pages/Error/Error";
import MyCourse from "../dashboard/Instructor/MyCourse";
import AdminRoute from "./AdminRoute";
import DashBoardHome from "../dashboard/DashboardHome/DashBoardHome";
import Gallery from "../pages/Gallery/Gallery";
import Blogs from "../pages/Blogs/Blogs";
import Contact from "../pages/Contuct/Contact";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/classes",
        element: (
          <PrivateRoute>
            <AllClasses></AllClasses>
          </PrivateRoute>
        ),
      },
      {
        path: "/payment/success/:tranId",
        element: <StudentPayment></StudentPayment>,
      },
      {
        path: "/payment/fail/:tranId",
        element: <Fail></Fail>,
      },
      {
        path: "/instructors",
        element: <AllInstructors></AllInstructors>,
      },
      {
        path: "/contact",
        element:<Contact></Contact>,
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
     
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "my-selected",
        element: <MySelected></MySelected>,
      },
      {
        path: "student-home",
        element: <StudentHome></StudentHome>,
      },
      {
        path: "student-enrolled",
        element: <StudentEnrolled></StudentEnrolled>,
      },
      {
        path: "payment-history",
        element: <Payment></Payment>,
      },
      {
        path: "manage-user",
        element: (
          <AdminRoute>
            <ManageUser></ManageUser>
          </AdminRoute>
        ),
      },
      {
        path: "manage-classes",
        element: (
          <AdminRoute>
            <ManageCourse></ManageCourse>
          </AdminRoute>
        ),
      },
      {
        path: "add-Class",
        element: <AddClasses></AddClasses>,
      },
      {
        path: "get-my-course",
        element: <MyCourse></MyCourse>,
      },
      {
        path: "dashboard-home",
        element: <DashBoardHome></DashBoardHome>,
      },
    ],
  },
]);
