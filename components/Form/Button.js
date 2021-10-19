import styled from "styled-components";

const Button = styled.button`
  color: ${({ theme }) => theme.color.accent};
  font-size: ${({ theme }) => theme.size.L};
  background-color: transparent;
  border: 3px solid ${({ theme }) => theme.color.accent};
  padding: 8px;

  margin: 10px 0;
  ${({ center }) =>
    center
      ? `
    margin:10px auto;
  `
      : null}

  cursor: pointer;
  transition: background-color 0.2s;

  position: relative;
  z-index: 1;
  &::after {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    background-color: ${({ theme }) => theme.color.accent};
    transition: width 0.2s;
    z-index: -1;
  }

  &:hover {
    &::after {
      width: 100%;
    }
    color: ${({ theme }) => theme.color.white};
  }
`;

export default Button;
