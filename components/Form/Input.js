import styled from "styled-components";

const Input = styled.input`
  font-size: ${({ theme }) => theme.size.M};
  color: ${({ theme }) => theme.color.white};
  border: 3px solid ${({ theme }) => theme.color.accent};
  background-color: transparent;
  padding: 2px;
  margin-bottom: 8px;
  width: 60%;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.color.white};
  }
`;

export default Input;
