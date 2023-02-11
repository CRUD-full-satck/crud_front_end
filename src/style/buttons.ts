import styled from "styled-components";

export const ButtonForm = styled.input`
  height: 40px;
  border-radius: 8px;
  border: 3px solid var(--color-book-2);
  background: #ffffff;
  transition: 1s;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  color: var(--color-book-2);
  cursor: pointer;

  &:hover {
    color: #ffffff;
    border-color: #ffffff;
    background: var(--color-book-2);
  }
`;

export const ButtonForm2 = styled(ButtonForm)`
  &:hover {
    border-color: var(--color-book-2);
  }
`;
