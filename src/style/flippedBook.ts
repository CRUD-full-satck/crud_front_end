import styled from "styled-components";

interface props {
  flipped: boolean;
  effectLogin: boolean;
}

export const Perspective = styled.div`
  width: 100%;
  height: 100%;
  perspective: 1500px;
  transform-style: preserve-3d;
  overflow: hidden;
`;

export const BookWrap = styled.div<props>`
  position: absolute;
  height: 100%;
  width: 100%;
  transform-style: preserve-3d;
  transition: all 1s ease-out;
  -webkit-transition: all 1s ease-out;
  -moz-transition: all 1s ease-out;
  -ms-transition: all 1s ease-out;
  -o-transition: all 1s ease-out;
  transform: rotatey(20deg) rotatex(10deg);

  ${(props) => props.flipped && `transform:rotateY(180deg);`}

  ${(props) =>
    props.effectLogin &&
    `
    {
      transform: rotateX(40deg);
      translate: 17rem;
      scale: 1.2;
    }
  `}
`;

export const BookFront = styled.div`
  width: 550px;
  height: 750px;
  padding: 15rem 7rem;
  border-radius: 0 20px 20px 0;
  box-shadow: 38px 0px 42px -16px rgba(0, 0, 0, 0.31) inset;
  -webkit-box-shadow: 38px 0px 42px -16px rgba(0, 0, 0, 0.31) inset;
  -moz-box-shadow: 38px 0px 42px -16px rgba(0, 0, 0, 0.31) inset;
  background-image: url("public/img/book_front.png");
  background-size: 160%;
  background-position: 57%;
  background-repeat: no-repeat;
  background-color: var(--color-book-1);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  cursor: pointer;
`;

export const BookBack = styled(BookFront)`
  padding: 8.5rem 7rem;
  border-radius: 10px 0 0 10px;
  background-image: url("public/img/book_back.png");
  background-position: 50%;
  transform: rotate(180deg) translateZ(-30px) translateX(5px);
  box-shadow: -38px 0px 42px -16px rgba(0, 0, 0, 0.4) inset;
  -webkit-box-shadow: -38px 0px 42px -16px rgba(0, 0, 0, 0.4) inset;
  -moz-box-shadow: -38px 0px 42px -16px rgba(0, 0, 0, 0.4) inset;
`;

export const BorderBook = styled.div`
  content: "";
  height: 750px;
  width: 30px;

  position: absolute;
  right: 0;
  left: -550px;
  top: 0;
  bottom: 0;
  margin: auto;
  background: var(--color-book-2);

  transform: rotateY(-80deg) translateX(-14px);
`;

export const BorderBottonBook = styled(BorderBook)`
  height: 0px;
  width: 539px;

  left: 10px;
  top: -15px;
  bottom: -750px;
  background: transparent;
  translate: 0 0 -15px;

  border-bottom: 27px solid #ffffff;
  border-left: 6px solid transparent;

  transform: rotateX(-90deg) translateX(-15px);
`;
