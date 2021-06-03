import styled from 'styled-components';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

export const Container = styled(motion.div)`
  display: flex;
  height: 100%;
`;

export const Aside = styled.div`
  flex: 0 0 600px;
  background: ${props => props.theme.colors.background};
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
  background: ${props => props.color};
  border-radius: 4px;
  transition: all .3s cubic-bezier(.2,.7,.2,1.2);
`;

export const Preview = styled.div`
  flex: 1;
  background: ${props => props.theme.colors.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CardContainer = styled.div`
  width: 320px;
  height: 200px;
  margin-top: 64px;
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