import styled from "styled-components";

const Subtitle = styled.h2`
  color: ${({ theme }) => theme.color.accent};
  font-size: ${({ theme }) => theme.size.XL};
  font-weight: 700;
`;

export default Subtitle;
