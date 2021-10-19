import styled from "styled-components";

const Form = styled.form`
  width: 100%;
  max-width: 500px;
  flex-grow: 1;
  padding: 8px;

  border-style: solid;
  border-right: 5px;
  border-top: 5px;
  border-color: ${({ theme }) => theme.color.secondary};

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  @media (min-width: 1024px) {
    justify-content: center;
    border-bottom: 0;
  }
`;

export default Form;
