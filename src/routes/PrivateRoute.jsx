/* eslint-disable react/prop-types */
import { useContext } from "react";

import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const location = useLocation();

  if (loader) {
    return (
      <div className="flex justify-center h-20">
        <span className="loading loading-spinner text-warning"></span>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PrivateRoute;