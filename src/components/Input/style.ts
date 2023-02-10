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
    border-radius: 8px;
    width: 100%;
    height: 100%;
    font-size: 18px;
  }
`;
export const Error = styled.div`
  padding-right: 5px;
  position: relative;
  display: flex;
  align-items: center;

  &:hover span {
    opacity: 1;
  }

  span {
    position: absolute;
    background: #f10;
    padding: 4px 15px;
    border-radius: 3px;
    translate: 100%;
    opacity: 0;
    transition: opacity 0.4s;

    &::before {
      content: "";
      border-style: solid;
      border-width: 10px 7px 0 7px;
      transform: rotate(90deg);
      border-color: #f10 transparent;
      position: absolute;
      top: 18px;
      left: -8px;
    }
  }

  & svg {
    width: 25px;
    height: 25px;
  }
`;
