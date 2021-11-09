import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 70vh;
  background-color: ${({ theme }) => theme.color.primary};
  border: 2px solid ${({ theme }) => theme.color.accent};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
  gap: 20px;
`;

export default Wrapper;
