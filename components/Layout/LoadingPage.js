import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: translate(-50%, -50%) rotate(0deg) ;
  }

  to {
    transform:translate(-50%, -50%)  rotate(360deg) ;
  }
`;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 100;
  background-color: ${({ theme }) => theme.color.primary};
`;

const Throbber = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  z-index: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.secondary};

  &::before {
    display: block;
    content: "";
    position: absolute;
    background-color: ${({ theme }) => theme.color.primary};
    width: 75px;
    height: 75px;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }

  &::after {
    display: block;
    content: "";
    position: absolute;
    background-color: ${({ theme }) => theme.color.primary};
    width: 50px;
    height: 100px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ${rotate} 1s infinite linear;
  }
`;

const LoadingPage = () => {
  return (
    <Wrapper>
      <Throbber />
    </Wrapper>
  );
};

export default LoadingPage;
