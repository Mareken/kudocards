import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  height: 100%;
  background: ${props => props.theme.colors.background};
  display: grid;
  place-items: center;
  position: relative;
`;

export const Center = styled(motion.div)`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
  margin: 1.5rem 0 2.25rem 0;
  font-size: 5rem;
  font-weight: 700;
  color: ${props => props.theme.text.primary};
`;

export const TitleLetter = styled(motion.span)`
  display: inline-block;
  text-shadow: -.5px -.5px 0 ${props => props.theme.text.primary},  
               .5px -.5px 0 ${props => props.theme.text.primary},
               -.5px .5px 0 ${props => props.theme.text.primary},
               .5px .5px 0 ${props => props.theme.text.primary};

  &:last-of-type {
    color: #00A9F7;
    text-shadow: none;
  }
`;

export const Button = styled(motion.button)`
  width: 250px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  background: #00A9F7;
  cursor: pointer;
  transition: all .3s cubic-bezier(.2,.7,.2,1.3);
  position: relative;
  z-index: 5;
`;

export const Label = styled.p`
  color: #fff;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 500;
`;

export const ImagesContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
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
  width: 25%;
`;

export const Diamond = styled(HomeImage)`
  top: 0;
  left: 0;
  height: 15%;
`;

export const Dog = styled(HomeImage)`
  bottom: -12%;
  right: 1%;
  width: 32%;
`;

export const Man = styled(HomeImage)`
  left: 8%;
  top: 0;
  width: 23%;
`;

export const Woman = styled(HomeImage)`
  left: 5%;
  bottom: 2%;
  width: 24%;
`;

export const Laptop = styled(HomeImage)`
  width: 30%;
  top: -10%;
  right: 0;
`;

export const Wave = styled(HomeImage)`
  top: -5%;
  left: 40%;
  transform: translateX(-50%);
  width: 30%;
`;

export const TransitionOverlay = styled(motion.div)`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  background: ${props => props.theme.colors.secondary};
  z-index: 20;
  transform: translateY(100%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TransitionOverlayText = styled(Title)`
  font-size: 2.125rem;

  &::before {
    content: '#';
    color: #00A9F7;
  }
`;