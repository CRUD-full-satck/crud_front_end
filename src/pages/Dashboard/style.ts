import styled from "styled-components";
import { ContainerForm } from "../../style/containerForm";
import { Page } from "../../style/flippedOpenBook";

export const ContainerFormCreateContact = styled(ContainerForm)`
  margin-top: 2rem;
  justify-content: start;
  gap: 3.7rem;

  & form {
    transform: rotateY(180deg);
    & div {
      flex-direction: row;

      & label {
        display: flex;
        gap: 2px;
        font-size: 20px;
        align-items: center;
      }

      & div {
        border: none;
        flex-direction: row-reverse;

        width: 100%;
        & input {
          transform: rotateY(180deg);
        }
      }
    }

    & input:nth-child(4) {
      margin-top: 3.2rem;
      width: 15rem;
      height: 45px;
      font-weight: 700;
      margin-left: 135px;
      transform: rotateY(180deg);
    }
  }
`;

export const LastPage = styled(Page)`
  padding: 6rem 0 5rem 0;
  & ul {
    padding: 30px;
    padding-left: 52px;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(2, 1fr);
  }
`;
