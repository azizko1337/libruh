import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Wrapper;
