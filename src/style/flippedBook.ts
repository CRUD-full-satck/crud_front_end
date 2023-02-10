import styled from "styled-components";

interface props {
  flipped: boolean;
}

export const Perspective = styled.div`
  width: 100%;
  height: 100%;
  perspective: 1500px;
  transform-style: preserve-3d;
  overflow: hidden;
`;

export const BookWrap = styled.div<props>`
  height: 100%;
  width: 100%;
  transform-style: preserve-3d;
  transition: all 1s ease-out;
  -webkit-transition: all 1s ease-out;
  -moz-transition: all 1s ease-out;
  -ms-transition: all 1s ease-out;
  -o-transition: all 1s ease-out;
  transform: rotateY(20deg);
  ${(props) => props.flipped && `transform:rotateY(180deg);`}
`;

export const BookFront = styled.div`
  width: 550px;
  height: 750px;
  padding: 10rem 7rem;
  border-radius: 0 20px 20px 0;
  box-shadow: 38px 0px 42px -26px rgba(0, 0, 0, 0.31) inset;
  -webkit-box-shadow: 38px 0px 42px -26px rgba(0, 0, 0, 0.31) inset;
  -moz-box-shadow: 38px 0px 42px -26px rgba(0, 0, 0, 0.31) inset;
  background-color: rgba(var(--color-book-3), 1);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  cursor: pointer;
`;

export const BookBack = styled(BookFront)`
  padding: 7rem;
  border-radius: 10px 0 0 10px;
  transform: rotate(180deg) translateZ(-30px) translateX(5px);
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
  background: black;
  transform: rotateY(-80deg) translateX(-14px);
`;
