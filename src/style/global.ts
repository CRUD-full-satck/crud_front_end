import styled from "styled-components";

export const FormBase = styled.div`
  width: 20rem;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  border-radius: 10px;
  border: 2px solid black;

  & h1 {
    font-size: 25px;
    font-weight: 700;
  }

  & form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
  }
`;

export const ButtomForm = styled.input`
  padding: 10px;
  font-size: 16px;
  font-weight: 600;
  border: 3px solid black;
  border-radius: 5px;
  background-color: transparent;
`;
