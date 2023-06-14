import { useContext, useEffect, useState } from "react";
import { BASE_URL } from "./global";
import { AuthContext } from "../Provider/AuthProvider";

const useInstructorDashboard = () => {
  const { user } = useContext(AuthContext);
  const [isInstructor, setIsInstructor] = useState(false);
  const [isInstructorLoading, setIsInstructorLoading] = useState(true);
  useEffect(() => {
    if (user?.email) {
      fetch(`${BASE_URL}/users/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
         

          if (data?.role === "instructor") {
            setIsInstructor(true);
            setIsInstructorLoading(false);
          }

          return;
        });
    }
  }, [user?.email]);
  return [isInstructor, isInstructorLoading];
};

export default useInstructorDashboard;
