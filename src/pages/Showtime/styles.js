import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { lighten, rgba } from 'polished';
import tinycolor from 'tinycolor2';

const squiggly = keyframes`
  0% {
    filter: url("#squiggly-0");
  }
  25% {
    filter: url("#squiggly-1");
  }
  50% {
    filter: url("#squiggly-2");
  }
  75% {
    filter: url("#squiggly-3");
  }
  100% {
    filter: url("#squiggly-4");
  }
`;

function isLight (color) {
  const c = tinycolor(color);
  return (c.getBrightness() > 130);
}

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.border};
`;

export const Heading = styled(motion.p)`
  font-size: min(4vw, 3rem);
  color: ${props => props.theme.text.primary};
  font-weight: 700;
  margin-bottom: 32px;
  position: relative;
  z-index: 5;

  > span {
    color: ${props => props.theme.colors.primary};
  }

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const CardContainer = styled(motion.div)`
  width: 55vw;
  height: 30.9375vw;
  margin: 32px 0;
  border-radius: 10px;
  box-shadow: 1px 1px 1px rgba(2, 33, 48, 0.16);
  background: ${props => props.theme.title === 'light' ? props.theme.colors.background : props.theme.colors.secondary};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  z-index: 5;

  @media screen and (max-width: 768px) {
    width: calc(100% - 20px);
    height: auto;
    margin-top: 0px;
    min-height: 200px;
  }
`;

export const CardHeading = styled.h3`
  font-family: ${props => props.font};
  font-size: 2vw;
  font-weight: bold;
  color: ${props => props.theme.text.primary};

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const CardLeft = styled.div`
  flex: 0 0 60%;
  max-width: 60%;
  height: 100%;
  padding: 4%;
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.title === 'light' ? props.theme.colors.background : props.theme.colors.secondary};

  @media screen and (max-width: 768px) {
    padding: 16px;
  }
`;

export const CardMessage = styled.p`
  font-size: 1.75vw;
  color: ${props => props.theme.text.primary};
  line-height: 1.5;
  margin: 16px 0;
  white-space: pre-wrap;
  font-family: ${props => props.font};

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  margin-top: auto;
  align-items: flex-start;
`;

export const CardFrom = styled.p`
  display: block;
  position: relative;
  color: ${props => props.currentColor};
  font-weight: bold;
  font-size: 1.75vw;
  line-height: 26px;
  margin-right: 32px;
  flex: 0 0 1;
  max-width: 50%;

  &::before {
    content: 'De: ';
    color: ${props => props.theme.text.primary};
  }

  @media screen and (max-width: 768px) {
    font-size: 12px;
    line-height: 1.5;
  }
`;

export const CardTo = styled(CardFrom)`
  &::before {
    content: 'Para: ';
  }
`;

export const CardRight = styled.div`
  flex: 0 0 40%;
  height: 100%;
`;

export const CardImageContainer = styled.div`
  background: ${props => props.currentColor === 'rgba(0,0,0,0)' ? 'rgba(0,0,0,0)' : (rgba(isLight(props.currentColor) ? lighten(.2, props.currentColor) : lighten(.4, props.currentColor), .25))};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardImage = styled.div`
  width: 100%;
  height: 100%;
  background: url(${props => props.image});
  background-size: 80%;
  background-position: center;
  background-repeat: no-repeat;
`;

export const ButtonGoHome = styled.div`
  width: 250px;
  height: 60px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 30px;
  font-weight: 500;
  background: transparent;
  user-select: none;
  font-size: 18px;
  background: ${props => props.currentColor};

  &:hover {
    animation: ${squiggly} 0.25s linear infinite;
    box-shadow: 1px 1px 2px rgba(0, 169, 247, 0.16);
  }

  > svg {
    display: none;
  }

  @media screen and (max-width: 768px) {
    width: 150px;
    font-size: 1rem;
    height: 50px;
  }
`;