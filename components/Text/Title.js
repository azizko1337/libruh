import styled from "styled-components";

const Title = styled.h1`
  color: ${({ theme }) => theme.color.secondary};
  font-size: ${({ theme }) => theme.size.XXL};
  letter-spacing: 2px;
  font-weight: 900;
  text-transform: capitalize;
  text-align: center;
`;

export default Title;
