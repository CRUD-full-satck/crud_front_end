import styled from "styled-components";

export const LoginContainer = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 26px;
  z-index: 100;

  & form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export const RegisterContainer = styled.div`
  transform: rotateX(180deg);
  height: 100%;
  width: 100%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 26px;

  & form {
    display: flex;
    z-index: 1;
    flex-direction: column;
    gap: 10px;
  }
`;
