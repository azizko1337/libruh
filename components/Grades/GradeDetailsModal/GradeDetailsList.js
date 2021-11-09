import styled from "styled-components";

const GradeDetailsList = styled.ul`
  list-style: square;
  color: ${({ theme }) => theme.color.accent};
  font-size: ${({ theme }) => theme.size.L};
`;

export default GradeDetailsList;
