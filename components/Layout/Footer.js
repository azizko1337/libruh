import styled from "styled-components";

const Footer = styled.footer`
  width: 100%;
  height: 10vh;
  background-color: ${({ theme }) => theme.color.secondary};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.2s;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.color.accent};
  }
`;

export default Footer;
