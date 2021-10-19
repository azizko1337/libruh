import styled from "styled-components";

const Lesson = styled.li`
  color: ${({ theme }) => theme.color.white};
  border: 4px solid ${({ theme }) => theme.color.accent};

  min-height: 65px;
  width: 100%;
  padding: 4px;
`;

export default Lesson;
