/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import useInstructor from "../hooks/useInstructor";


const Instructor = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const [isInstructor, isInstructorLoading] = useInstructor();

  const location = useLocation();
  if (loader || isInstructorLoading) {
    return <progress className="progress w-56"></progress>;
  }
  if (user && isInstructor) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default Instructor;
