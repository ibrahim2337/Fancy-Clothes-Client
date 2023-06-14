/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import useAdmin from "../hooks/isAdmin";

const AdminRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin();
  console.log({user});
  console.log({loader});
  console.log({isAdmin});
  console.log({isAdminLoading});
  const location = useLocation();
  if (loader || isAdminLoading) {
    return <progress className="progress w-56"></progress>;
  }
  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
