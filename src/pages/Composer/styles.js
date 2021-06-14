import styled from 'styled-components';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { desaturate, lighten } from 'polished';

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
  max-width: 100%;
  width: 80%;
  height: auto;
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
  background: ${props => props.color};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 30px;
  font-weight: 500;

  > span {
    transform: translateZ(20px);
  }

  &:hover {
    box-shadow: 1px 1px 2px rgba(0, 169, 247, 0.16);
  }
`;

export const TiltCustom = styled(Tilt)`
  transform-style: preserve-3d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
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
  hyphens: auto;
  display: flex;
  flex-direction: column;
  background: transparent;
`;

export const CardMessage = styled.p`
  font-size: 18px;
  color: ${props => props.theme.text.primary};
  line-height: 27px;
  margin: 16px 0;
  white-space: pre-wrap;
`;

export const CardFooter = styled.div`
  display: flex;
  margin-top: auto;
  align-items: flex-start;
  border: 1px solid red;
`;

export const CardFrom = styled.p`
  display: block;
  position: relative;
  color: ${props => props.theme.colors.primary};
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
  background: ${props => lighten(.35, props.color)};
  height: 100%;
`;