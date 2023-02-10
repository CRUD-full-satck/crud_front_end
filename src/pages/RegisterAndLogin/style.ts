import styled from "styled-components";
import { ContainerForm } from "../../style/containerForm";

export const RegisterContainer = styled(ContainerForm)`
  transform: rotateX(180deg);

  & form {
    & div {
      & div {
        & div {
          & span {
            /* max-width: 20rem;
            translate: 30%; */
          }
        }
      }
    }
  }
`;
