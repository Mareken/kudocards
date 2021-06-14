import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  display: flex;
  align-items: center;
`;

export const Button = styled.div`
  cursor: pointer;
  margin: 0 8px;
  background: ${props => props.theme.title === 'dark' ? props.theme.colors.secondary : (props.inComposer ? props.theme.colors.background : props.theme.colors.secondary)};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color .15s ease;
  border: 2px solid transparent;
  position: relative;
  
  ${props => props.audio && `
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: ${props.playing ? 'rotate(45deg) translate(-50%, -50%) scaleX(0)' : 'rotate(45deg) translate(-50%, -50%) scaleX(1)'};
      width: 80%;
      height: 2px;
      border-top: 2px solid ${props.inComposer ? props.theme.colors.background : props.theme.colors.secondary};
      background: ${props.theme.text.primary};
      border-radius: 2px;
      transform-origin: top left;
      transition: all .15s ease;
    }
  `}

  &:hover {
    border-color: ${props => props.theme.colors.primary};
  }
`;