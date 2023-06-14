import { useContext, useEffect, useState } from "react";
import { BASE_URL } from "./global";
import { AuthContext } from "../Provider/AuthProvider";

const useAdmin = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetch(`${BASE_URL}/users/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          

          if (data?.role === "admin") {
            setIsAdmin(true);
            setIsAdminLoading(false);
          }

          return;
        });
    }
  }, [user?.email]);
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
