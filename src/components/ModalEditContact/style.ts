import styled from "styled-components";

export const Modal = styled.div`
  padding: 20px;
  border: 2px solid black;
  border-radius: 10px;
  background: #ffffff;
  cursor: default;

  & svg {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }

  & form {
    display: flex;
    flex-direction: column;
    gap: 6px;
    transform: rotateY(180deg);

    & input:nth-child(4) {
      margin-top: 6px;
      transform: rotateY(180deg);
    }

    & div {
      width: 19rem;
      & div {
        flex-direction: row-reverse;
        & input {
          transform: rotateY(180deg);
        }

        & div {
          & svg {
            width: 25px;
            height: 25px;
          }
        }
      }
    }
  }
`;
