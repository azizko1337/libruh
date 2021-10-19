import styled from "styled-components";

const HighlightedLink = styled.a`
  display: inline;
  color: ${({ theme, color }) => theme.color[color]};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default HighlightedLink;
