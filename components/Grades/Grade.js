import styled from "styled-components";

const GradeBox = styled.li`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.secondary};
  background-color: ${({ theme }) => theme.color.accent};
`;

const Grade = (props) => {
  const { id, value } = props;

  return <GradeBox id={id}>{value}</GradeBox>;
};

export default Grade;
