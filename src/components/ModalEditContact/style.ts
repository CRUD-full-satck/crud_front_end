import styled from "styled-components";

export const Modal = styled.div`
  padding: 20px;
  border: 2px solid black;
  border-radius: 10px;
  background: #ffffff;

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
      width: 100%;
      padding: 0 10px 0 10px;
      border: 2px solid rgba(var(--color-book-1), 1);
      background: transparent;
      color: rgba(var(--color-book-1), 1);
      margin-top: 6px;
      transform: rotateY(180deg);
    }

    & div {
      width: 19rem;
      & div {
        flex-direction: row-reverse;
        border: 2px solid rgba(var(--color-book-1), 1);
        & input {
          transform: rotateY(180deg);
          border-radius: 8px;
        }

        & div {
          border: none;
          & span {
            width: 10rem;
            translate: 100%;
          }
        }
      }
    }
  }
`;
