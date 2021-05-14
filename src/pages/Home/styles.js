import styled, { keyframes } from 'styled-components';

const flip = keyframes`
	0% {
    transform: rotateX(0);
  }
  5% {
		transform: rotateX(0);
  }
	15% {
    transform: rotateX(-0.5turn);
  }
  20% {
		transform: rotateX(-0.5turn);
  }
  30% {
    transform: rotateX(-1turn);
  }
  35% {
		transform: rotateX(-1turn);
  }
	45% {
    transform: rotateX(-1.5turn);
  }
  50% {
		transform: rotateX(-1.5turn);
  }
  60% {
    transform: rotateX(-2turn);
  }
  65% {
		transform: rotateX(-2turn);
  }
	75% {
    transform: rotateX(-2.5turn);
  }
  80% {
		transform: rotateX(-2.5turn);
  }
  90% {
    transform: rotateX(0);
  }
  100% {
		transform: rotateX(0);
  }
`;

export const Container = styled.div`
  height: 100%;
  background: #fff;
  display: grid;
  place-items: center;
  position: relative;
`;

export const Center = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TitleContainer = styled.div`
  perspective: 1000px;
`;

export const Title = styled.div`
  margin-bottom: 4.5rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: 50% 50%;
  animation: ${flip} 10s cubic-bezier(.2,.7,.2,1.3) infinite forwards;
  will-change: transform;
  transform-style: preserve-3d;
`;

export const Word = styled.p`
  color: #292423;
  font-size: 5rem;
  font-weight: bold;
  position: absolute;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;

  &:first-of-type {
    z-index: 3;

    &::after {
      content: '.';
      color: #00A9F7;
    }
  }

  &:last-of-type {
    transform: rotateX(180deg);
    z-index: 2;

    &::before {
      content: '#';
      color: #00A9F7;
    }
  }
`;

export const Button = styled.button`
  width: 250px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background: #00A9F7;
  cursor: pointer;
  transition: all .3s cubic-bezier(.2,.7,.2,1.3);

  &:hover {
    transform: scale(1.07);
    box-shadow: 1px 1px 2px rgba(0, 169, 247, 0.16);
  }
`;

export const Label = styled.p`
  color: #fff;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 500;
`;

const HomeImage = styled.img`
  position: absolute;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  touch-action: none;
  pointer-events: none;
  transition: all .2s ease;
`;

export const Hand = styled(HomeImage)`
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 30%;
`;

export const Diamond = styled(HomeImage)`
  top: 0;
  left: 0;
  height: 15%;
`;

export const Dog = styled(HomeImage)`
  bottom: -5%;
  right: 1%;
  width: 32%;
`;

export const Man = styled(HomeImage)`
  left: 5%;
  top: 5%;
  width: 25%;
`;

export const Woman = styled(HomeImage)`
  left: 4%;
  bottom: 5%;
  width: 25%;
`;

export const Laptop = styled(HomeImage)`
  width: 30%;
  top: 0;
  right: 0;
`;

export const Wave = styled(HomeImage)`
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 30%;
`;