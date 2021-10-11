import styled from 'styled-components';
import { motion } from 'framer-motion';
import { rgba } from 'polished';

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
      border-top: 2px solid ${props.theme.colors.secondary};
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

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 15;
  background: ${props => props.theme.colors.primary};
  opacity: 0;
`;

export const Modal = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  background: ${props => props.theme.colors.background};
  border-radius: 8px;
  padding: 24px 0px;
  display: flex;
  flex-direction: column;
  z-index: 20;
  width: 300px;

  @media screen and (max-width: 768px) {
    width: calc(100% - 40px);
  }
`;

export const ButtonCloseModal = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  border-radius: 50%;
  transition: all .15s ease;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: ${props => props.theme.colors.background};

  &:hover,
  &:active {
    background: ${props => rgba(props.theme.colors.primary, .1)};
  }
`;

export const ModalHeading = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.text.primary};
  display: flex;
  align-items: center;
  margin: 0px 0px 24px 24px;
  font-weight: 500;
`;

export const Radio = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid ${props => props.selected ? props.theme.colors.primary : props.theme.colors.border};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.background};
  transition: all .3s cubic-bezier(.2,.7,.2,1.3);

  &::before {
    content: '';
    position: absolute;
    width: 50%;
    height: 50%;
    border-radius: 50%;
    background: ${props => props.selected ? props.theme.colors.primary : props.theme.colors.border};
    transition: all .3s cubic-bezier(.2,.7,.2,1.3);
    transform: ${props => props.selected ? 'scale(1)' : 'scale(0)'};
  }
`;

export const Language = styled.p`
  color: ${props => props.selected ? props.theme.text.primary : props.theme.text.secondary};
  transition: all .15s ease;
  margin-left: 16px;
`;

export const ButtonChangeLanguage = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all .15s ease;
  height: 50px;
  padding: 0 24px;
  background: ${props => props.selected ? rgba(props.theme.colors.primary, .2) : props.theme.colors.background};

  &:hover,
  &:active {
    background: ${props => rgba(props.theme.colors.primary, .2)};
  }
`;