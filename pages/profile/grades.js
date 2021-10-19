import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import WithAuthentication from "../../utils/frontend/auth/WithAuthentication";
import SubjectList from "../../components/Grades/SubjectList";
import Subject from "../../components/Grades/Subject";

const Grades = (props) => {
  const { student } = props;
  const router = useRouter();
  useEffect(() => {
    if (student === null) {
      router.push("/");
    }
  }, [student, router]);

  const [grades, setGrades] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await fetch("/api/v1/librus/grades", {
          method: "GET",
          credentials: "include",
        });
        res = await res.json();
        if (res.error === true) {
          throw new Error(res.emsg);
        }
        setGrades(res.data.grades);
      } catch (error) {
        router.push("/");
      }
    };
    fetchData();
  }, [setGrades, router]);

  return (
    <SubjectList>
      {grades.map((subject) => (
        <Subject
          key={subject.name}
          name={subject.name}
          grades={subject.semester[0].grades}
        />
      ))}
    </SubjectList>
  );
};

export default WithAuthentication(Grades);
