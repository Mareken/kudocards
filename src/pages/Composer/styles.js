import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { lighten } from 'polished';
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

export const Container = styled(motion.div)`
  display: flex;
  height: 100%;
`;

export const Aside = styled.div`
  flex: 0 0 600px;
  background: ${props => props.theme.title === 'light' ? props.theme.colors.background : props.theme.colors.secondary};
  padding: 40px;
`;

export const Heading = styled.h3`
  font-size: 24px;
  color: ${props => props.theme.text.primary};
  font-weight: bold;
  margin-bottom: 24px;
  display: block;
`;

export const Tabs = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  position: relative;
  user-select: none;
  margin-bottom: 40px;
`;

export const Tab = styled.div`
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${props => props.active ? props.theme.text.primary : props.theme.text.secondary};
  font-size: 1rem;
  font-weight: 500;
  transition: all .15s ease;
  margin-right: 32px;

  &:last-of-type {
    margin: 0;
  }

  &:hover {
    color: ${props => props.theme.text.primary};
  }
`;

export const Indicator = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: ${props => props.width}px;
  transform: ${props => `translateX(${props.x}px)`};
  height: 2px;
  background: ${props => props.theme.colors.primary};
  border-radius: 4px;
  transition: all .3s cubic-bezier(.2,.7,.2,1.2);
`;

export const Preview = styled.div`
  flex: 1;
  background: ${props => props.theme.title === 'light' ? props.theme.colors.secondary : props.theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CardContainer = styled.div`
  width: 40vw;
  height: 22.5vw;
  min-height: 350px;
  margin: 64px 0 32px 0;
  border-radius: 10px;
  box-shadow: 1px 1px 1px rgba(2, 33, 48, 0.16);
  background: ${props => props.theme.title === 'light' ? props.theme.colors.background : props.theme.colors.secondary};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const ButtonDownload = styled.div`
  width: 150px;
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
  background: ${props => props.currentColor};

  &:hover {
    animation: ${squiggly} 0.25s linear infinite;
    box-shadow: 1px 1px 2px rgba(0, 169, 247, 0.16);
  }

  > svg {
    display: none;
  }
`;

export const CardHeading = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: ${props => props.theme.text.primary};
`;

export const CardLeft = styled.div`
  flex: 0 0 60%;
  max-width: 60%;
  height: 100%;
  padding: 32px;
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.title === 'light' ? props.theme.colors.background : props.theme.colors.secondary};
`;

export const CardMessage = styled.p`
  font-size: 18px;
  color: ${props => props.theme.text.primary};
  line-height: 1.5;
  margin: 16px 0;
  white-space: pre-wrap;
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
  font-size: 18px;
  line-height: 26px;
  margin-right: 32px;
  flex: 0 0 1;
  max-width: 50%;

  &::before {
    content: 'De: ';
    color: ${props => props.theme.text.primary};
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
  background: ${props => isLight(props.currentColor) ? lighten(.2, props.currentColor) : lighten(.4, props.currentColor)};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardImage = styled.div`
  width: 100%;
  height: 100%;
  background: url(${props => props.image});
  background-size: 90%;
  background-position: center;
  background-repeat: no-repeat;
`;