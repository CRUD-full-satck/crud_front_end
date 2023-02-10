import styled from "styled-components";

export const Card = styled.li`
  display: flex;
  gap: 10px;
  padding: 10px;
  border: 2px solid black;
  border-radius: 10px;
  flex-direction: column;
  text-align: start;
  background: #ffffff;
  position: relative;

  & div {
    position: absolute;
    right: 8px;

    & svg {
      height: 20px;
      width: 20px;
    }
  }
`;
