import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  position: relative;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const ButtonToggleEmojiPanel = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  cursor: pointer;
  position: absolute;
  z-index: 15;
  bottom: 9px;
  right: 8px;
  filter: grayscale(100%);

  &:hover {
    filter: grayscale(0);
  }
`;

export const Row = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin-bottom: 32px;
`;

export const Label = styled.label`
  color: ${props => props.theme.text.primary};
  margin-bottom: 8px;
  font-size: 1rem;
`;

export const Input = styled.input`
  height: 60px;
  border-radius: 5px;
  background: ${props => props.theme.colors.secondary};
  border: 2px solid ${props => props.theme.colors.border};
  padding: 0 16px;
  font-size: 1rem;
  line-height: 1.5;
  transition: all .15s ease;
  color: ${props => props.theme.text.primary};

  &:focus {
    background: ${props => props.theme.colors.background};
    border-color: ${props => props.theme.colors.primary};
  }
`;

export const MessageInput = styled(Input)`
  padding: 12px 12px 12px 14px;
  resize: none;
  height: 200px;

  ::-webkit-scrollbar {
    width: 5px;
    border-radius: 3px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.secondary};
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.text.secondary};
    border-radius: 3px;
  }
`;

export const FromInputContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-right: 16px;
`;