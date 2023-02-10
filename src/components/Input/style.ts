import styled from "styled-components";

export const InputContainer = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 6px;

  & label {
    /* color: white; */
    font-size: 13px;
    & span {
      color: red;
    }
  }
`;

export const InputBase = styled.div`
  height: 40px;
  border-radius: 8px;
  background: white;
  display: flex;

  & input {
    width: 100%;
    height: 100%;
    font-size: 18px;
    /* background-color: red; */
  }
`;
// export const InputContainer = styled.div``
