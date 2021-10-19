import styled from "styled-components";

const Paragraph = styled.p`
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.size.M};
  width: 100%;
  text-align: justify;
  font-weight: normal;
  max-width: 400px;
  padding: 5px;
`;

export default Paragraph;
