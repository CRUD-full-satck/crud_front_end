import styled from "styled-components";

export const InputContainer = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 6px;

  & label {
    font-size: 13px;
    font-weight: 600;
    & span {
      color: red;
    }
  }
`;

export const InputBase = styled.div`
  padding: 0 5px 0 5px;
  height: 40px;
  border-radius: 8px;
  background: #ffffff;
  border: 2px solid #000070;
  display: flex;

  & input {
    border-radius: 8px;
    width: 100%;
    height: 100%;
    font-size: 14px;
    color: var(--color-font-2);
  }
`;
export const Error = styled.div`
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
    width: max-content;
    opacity: 0;
    transition: opacity 0.4s;

    &::before {
      content: "";
      border-style: solid;
      border-width: 10px 7px 0 7px;
      transform: rotate(90deg);
      border-color: #f10 transparent;
      position: absolute;
      top: 9px;
      left: -8px;
    }
  }

  & svg,
  path {
    color: var(--color-font-3);
    width: 25px;
    height: 25px;
  }
`;
