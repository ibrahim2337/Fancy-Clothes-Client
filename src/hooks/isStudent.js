import { useEffect, useState } from "react";
import { BASE_URL } from "./global";

const useStudent = (email) => {
  const [isStudent, setIsStudent] = useState(false);
  const [isStudentLoading, setIsStudentLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`${BASE_URL}/users/${email}`)
        .then((res) => res.json())
        .then((data) => {
          

          if (data?.role === "student") {
            setIsStudent(true);
            setIsStudentLoading(false);
          }

          return;
        });
    }
  }, [email]);
  return [isStudent, isStudentLoading];
};

export default useStudent;
