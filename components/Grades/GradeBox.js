import styled from "styled-components";

const GradeBox = styled.li`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.secondary};
  background-color: ${({ theme }) => theme.color.accent};

  ${({ inline }) =>
    inline
      ? `
    display:inline-block;
    line-height:50px;
  `
      : null}
`;

export default GradeBox;
