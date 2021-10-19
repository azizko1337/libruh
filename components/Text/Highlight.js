import styled from "styled-components";

const Highlight = styled.span`
  color: ${({ theme, color }) => theme.color[color]};
  font-weight: 900;
  text-decoration: underline;
`;

export default Highlight;
