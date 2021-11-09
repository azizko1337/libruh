import { useState } from "react";
import styled from "styled-components";
import Subtitle from "../Text/Subtitle";
import GradeList from "./GradeList";
import Grade from "./Grade";
import GradeDetailsModal from "./GradeDetailsModal/GradeDetailsModal";

const SubjectWrapper = styled.li`
  border-bottom: 2px solid ${({ theme }) => theme.color.secondary};
  padding: 8px 0;
`;

const Subject = (props) => {
  const { name, grades } = props;
  const [showGradeDetails, setShowGradeDetails] = useState(false);

  const getGradeDetails = async (e) => {
    e.preventDefault();
    const { id: gradeID } = e.target;

    try {
      let res = await fetch(`/api/v1/librus/grade/${gradeID}`, {
        method: "GET",
        credentials: "include",
      });
      res = await res.json();
      if (res.error === true) {
        throw new Error(res.emsg);
      }
      const { grade } = res.data;
      setShowGradeDetails(grade);
    } catch (error) {
      router.push("/");
    }
  };

  return (
    <>
      {showGradeDetails !== false ? (
        <GradeDetailsModal
          onClick={() => setShowGradeDetails(false)}
          grade={showGradeDetails}
        />
      ) : null}
      <SubjectWrapper>
        <Subtitle>{name}</Subtitle>
        <GradeList>
          {grades.map((grade) => (
            <Grade
              onClick={getGradeDetails}
              key={grade.id}
              id={grade.id}
              value={grade.value}
            ></Grade>
          ))}
        </GradeList>
      </SubjectWrapper>
    </>
  );
};

export default Subject;
