import styled from "styled-components";
import Subtitle from "../Text/Subtitle";
import GradeList from "./GradeList";
import Grade from "./Grade";

const SubjectWrapper = styled.li`
  border-bottom: 2px solid ${({ theme }) => theme.color.secondary};
  padding: 8px 0;
`;

const Subject = (props) => {
  const { name, grades } = props;

  return (
    <SubjectWrapper>
      <Subtitle>{name}</Subtitle>
      <GradeList>
        {grades.map((grade) => (
          <Grade key={grade.id} id={grade.id} value={grade.value}></Grade>
        ))}
      </GradeList>
    </SubjectWrapper>
  );
};

export default Subject;
