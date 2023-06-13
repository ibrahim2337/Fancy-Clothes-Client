import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import Homepage from './pages/HomePage/Homepage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Blogs from './pages/Blogs/Blogs';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import AuthProvider from './provider/AuthProvider';
import Gallery from './pages/Gallery/Gallery';
import ContactPage from './pages/ContactPage/ContactPage';
import Instructors from './pages/Instructors/Instructors';
import CLasses from './pages/CLasses/CLasses';
import Dashboard from './pages/Dashboard/Dashboard';
import MyCart from './components/DashboardComponents/MyCart';
import PaymentFail from './components/Paymentfail/PaymentFail';
import PaymentSuccess from './components/PaymentSuccess/PaymentSuccess';
import PaymentHistory from './components/DashboardComponents/PaymentHistory';
import MyEnrolled from './components/DashboardComponents/MyEnrolled';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/home",
        element: <Homepage />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/instructors",
        element: <Instructors />,
      },
      {
        path: "/classes",
        element: <CLasses />,
      },
      {
        path: "/payment/fail/:tranId",
        element: <PaymentFail />,
      },
      {
        path:"/payment/success/:tranId",
        element: <PaymentSuccess />,
      },
     
    ]
  },

  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "my-cart",
        element: <MyCart />,
      },
      {
        path: "payment-history",
        element: <PaymentHistory />,
      },
      {
        path: "my-enroll",
        element: <MyEnrolled />,
      },
     
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <div>
      <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </React.StrictMode>,
)
