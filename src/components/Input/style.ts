import styled from "styled-components";

export const ContainerInput = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  gap: 6px;

  & label {
    font-size: 15px;
    & span {
      color: red;
    }
  }
`;

export const InputBase = styled.div`
  width: auto;
  display: flex;
  border: 2px solid black;
  border-radius: 5px;

  & input {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
  }
`;
