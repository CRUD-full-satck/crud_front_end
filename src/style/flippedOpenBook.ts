import styled from "styled-components";
import { BookFront } from "./flippedBook";

interface props {
  effect?: boolean;
}

export const BookContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1000px;
  position: relative;
`;

export const Book = styled.div<props>`
  display: flex;
  align-items: center;
  position: absolute;
  transform-style: preserve-3d;
  transform: rotateX(40deg);
  transition: all 4s;
  cursor: pointer;

  ${(props) =>
    props.effect &&
    `
    transform: rotateX(10deg);
    
    & div:nth-child(1) {
      transform: rotateY(-180deg);
    }
    & div:nth-child(n + 2):nth-child(-n + 6) {
      transform: rotateY(-180deg);
      z-index: 2;
    }
  `}
`;

export const BookOpenFront = styled(BookFront)`
  width: 650px;
  height: 850px;
  transition: all 3s;
  transform-origin: center left;
  z-index: 1;

  & div {
    & h1 {
      transform: rotateY(180deg);
    }
  }
`;

export const BookOpenBack = styled(BookFront)`
  width: 650px;
  height: 850px;
  transform-origin: center left;
  z-index: -2;
`;

export const Page = styled.div`
  width: 640px;
  height: 830px;
  background-image: url("/img/page.png");
  background-size: cover;
  background-position: center;
  cursor: default;

  border-radius: 0 10px 10px 0;
  transform-origin: center left;
  box-shadow: 79px 0px 66px -82px rgba(0, 0, 0, 0.56) inset;
  -webkit-box-shadow: 79px 0px 66px -82px rgba(0, 0, 0, 0.56) inset;
  -moz-box-shadow: 79px 0px 66px -82px rgba(0, 0, 0, 0.56) inset;
  position: absolute;
  z-index: -1;

  &:nth-child(n + 3):nth-child(-n + 5) {
    box-shadow: 200px 0px 400px -152px rgba(0, 0, 0, 1) inset;
    -webkit-box-shadow: 200px 0px 400px -152px rgba(0, 0, 0, 1) inset;
    -moz-box-shadow: 200px 0px 400px -152px rgba(0, 0, 0, 1) inset;
  }

  &:nth-child(2) {
    transition-duration: 3.4s;
  }
  &:nth-child(3) {
    transition-duration: 3.8s;
  }
  &:nth-child(4) {
    transition-duration: 4.2s;
  }
  &:nth-child(5) {
    transition-duration: 4.6s;
  }
  &:nth-child(6) {
    padding: 10rem 4rem;
    transition-duration: 5s;

    & a {
      display: flex;
      align-items: center;
      transform: rotateY(180deg);
      position: absolute;
      bottom: 35px;
      right: 50px;
      text-decoration: underline;
    }
  }
`;
