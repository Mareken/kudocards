import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { lighten, rgba, darken } from 'polished';
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

  @media screen and (max-width: 768px) {
    position: relative;
    flex-direction: column;
  }
`;

export const Aside = styled.div`
  flex: 0 0 600px;
  background: ${props => props.theme.title === 'light' ? props.theme.colors.background : props.theme.colors.secondary};
  padding: 40px;

  @media screen and (max-width: 768px) {
    padding: 0px;
    flex: 0 0 100vh;
    width: 100%;
  }
`;

export const Heading = styled.h3`
  font-size: 24px;
  color: ${props => props.theme.text.primary};
  font-weight: bold;
  margin-bottom: 24px;
  display: block;

  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 1rem;
    padding: 24px 0px;
    margin: 0px;
  }
`;

export const Tabs = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  position: relative;
  user-select: none;
  margin-bottom: 40px;

  @media screen and (max-width: 768px) {
    justify-content: center;
    border-bottom: 1px solid ${props => props.theme.colors.border};
    margin-bottom: 0px;
  }
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

  @media screen and (max-width: 768px) {
    margin: 0px;
    flex: 1;
    justify-content: center;
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

  @media screen and (max-width: 768px) {
    bottom: -1px;
  }
`;

export const Preview = styled.div`
  flex: 1;
  background: ${props => props.theme.title === 'light' ? props.theme.colors.secondary : props.theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 10;
    justify-content: flex-start;
    padding: 24px 20px;
    background: ${props => props.theme.colors.primary};
    transition: all .45s cubic-bezier(.785,.135,.15,.86);
    transform: ${props => props.bottomSheetOpen ? 'translateY(0)' : 'translateY(100%)'};
  }
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

  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    margin: 0px;
    min-height: 200px;
  }
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

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const CardHeading = styled.h3`
  font-family: ${props => props.font};
  font-size: 24px;
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
  padding: 32px;
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.title === 'light' ? props.theme.colors.background : props.theme.colors.secondary};

  @media screen and (max-width: 768px) {
    padding: 16px;
  }
`;

export const CardMessage = styled.p`
  font-size: 18px;
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
  font-size: 18px;
  line-height: 26px;
  margin-right: 32px;
  flex: 0 0 1;
  max-width: 50%;
  font-family: ${props => props.font};

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

export const ButtonCloseBottomSheet = styled.button`
  background: ${props => darken(.1, props.theme.colors.primary)};
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .15s ease;
  margin-top: auto;
  margin-bottom: 68px;
  transform: ${props => props.bottomSheetOpen ? 'scale(1)' : 'scale(.6)'};
  opacity: ${props => props.bottomSheetOpen ? 1 : 0};
  transition: transform .6s cubic-bezier(.2,.7,.2,1.2), opacity .3s ease;
  transition-delay: ${props => props.bottomSheetOpen ? '.4s' : '0s'};

  &:active {
    transform: scale(.8);
    transition-delay: 0s;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const ButtonGoBack = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  background: ${props => props.theme.title === 'dark' ? props.theme.colors.secondary : props.theme.colors.background};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color .15s ease;
  border: 2px solid transparent;

  &:active {
    border-color: ${props => props.theme.colors.primary};
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const ButtonMobile = styled.button`
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  background: ${props => props.bottomSheetOpen ? '#fff' : props.theme.colors.primary};
  transition: all .15s ease;
  z-index: 20;
  font-weight: 500;
  
  > span {
    position: absolute;
    transition: all .3s cubic-bezier(.785,.135,.15,.86);

    &:first-of-type {
      transform: ${props => props.bottomSheetOpen ? 'translateY(0px)' : 'translateY(-100%)'};
      opacity: ${props => props.bottomSheetOpen ? 1 : 0};
      color: ${props => props.theme.colors.primary};
    }

    &:last-of-type {
      transform: ${props => props.bottomSheetOpen ? 'translateY(100%)' : 'translateY(0px)'};
      opacity: ${props => props.bottomSheetOpen ? 0 : 1};
      color: #fff;
    }
  }
`;