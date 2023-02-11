import styled from "styled-components";
import { ContainerForm } from "../../style/containerForm";

export const LoginContainer = styled(ContainerForm)`
  & form {
    & div {
      & label {
        color: var(--color-font-1);
      }
      & div {
        & div {
          & span {
            translate: 13%;
          }
        }
      }
    }
  }
`;

export const RegisterContainer = styled(LoginContainer)`
  transform: rotateX(180deg);
`;

export const Paragraph = styled.p`
  position: absolute;
  bottom: 30px;
  width: 19rem;
  font-weight: 500;
  font-size: 14px;
`;
