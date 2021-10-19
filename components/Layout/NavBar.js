import styled from "styled-components";

const NavBar = styled.nav`
  width: 100%;
  height: 10vh;
  background-color: ${({ theme }) => theme.color.secondary};
  background-image: url("../logo.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  position: fixed;
  top: 0;
  left: 0;

  transition: background-color 0.2s;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.color.accent};
  }
`;

export default NavBar;
