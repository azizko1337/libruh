import { useState, useEffect } from "react";

const useStudent = () => {
  const [student, setStudent] = useState("loading");
  useEffect(() => {
    const fetchStudent = async () => {
      try {
        let res = await fetch(`/api/v1/profile`, {
          cors: "cors",
          credentials: "same-origin",
        });
        res = await res.json();
        if (res.error === false) {
          setStudent(res.data.student);
        } else {
          throw new Error(res.emsg);
        }
      } catch (error) {
        setStudent(null);
      }
    };
    fetchStudent();
  }, []);

  return student;
};

export default useStudent;
