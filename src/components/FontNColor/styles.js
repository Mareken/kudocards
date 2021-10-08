import styled from 'styled-components';
import { motion } from 'framer-motion';
import { darken, lighten, rgba } from 'polished';
import tinycolor from 'tinycolor2';

export const Container = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    padding: 24px 20px 82px 20px;
  }
`;

function isLight (color) {
  const c = tinycolor(color);
  return (c.getBrightness() > 130);
}

export const FontSelect = styled.div`
  height: 60px;
  border-radius: 5px;
  background: ${props => props.selecting ? props.theme.colors.background : lighten(.08, props.theme.colors.secondary)};
  border: 2px solid ${props => props.selecting ? props.theme.colors.primary : props.theme.colors.border};
  padding: 0 16px;
  font-size: 1rem;
  line-height: 1.5;
  transition: all .15s ease;
  color: ${props => props.theme.text.primary};
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;

  &:hover {
    border-color: ${props => props.theme.text.secondary};
  }
`;

export const FontSelectedText = styled.span`
  color: ${props => props.theme.text.primary};
  font-size: 1rem;
  font-family: ${props => props.fontFamily};
`;

export const LabelText = styled.span`
  color: ${props => props.theme.text.primary};
  margin-bottom: 8px;
  font-size: 1rem;
`;

export const OptionsContainer = styled.div`
  position: absolute;
  width: 240px;
  top: calc(100% + 2px);
  left: 0;
  background: ${props => props.theme.title === 'light' ? props.theme.colors.background : props.theme.colors.secondary};
  box-shadow: ${props => props.theme.title === 'light' ? '0 2px 10px rgba(0,0,0,.07)' : 'none'};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  transition: all .3s ease;
  padding: 4px;
  opacity: ${props => props.selecting ? 1 : 0};
  pointer-events: ${props => props.selecting ? 'auto' : 'none'};
  transform: ${props => props.selecting ? 'translateY(0)' : 'translateY(15px)'};
  z-index: 15;
`;

export const Option = styled.button`
  cursor: pointer;
  height: 50px;
  padding: 0 16px;
  width: 100%;
  text-align: left;
  background: transparent;
  transition: all .1s ease;
  color: ${props => props.theme.text.primary};
  border-radius: 5px;
  font-size: 1rem;
  font-family: ${props => props.value};

  &:hover {
    background: ${props => props.theme.colors.primary};
    color: #fff;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const ColorSelectContainer = styled.div`
  margin-top: 4px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
`;

export const Color = styled.div`
  cursor: pointer;
  background: ${props => props.value};
  width: 60px;
  height: 60px;
  border-radius: ${props => props.selected ? '50%' : '5px'};
  transition: all .15s ease;
  border: 2px solid ${props => props.selected ? props.value : 'transparent'};
  box-shadow: ${props => props.selected ? `0 0 0 4px ${props.theme.title === 'light' ? props.theme.colors.background : props.theme.colors.secondary} inset` : 'none'};
  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    pointer-events: none;

    > path {
      transition: all .15s ease;
      stroke: ${props => props.selected ? (isLight(props.value) ? darken(.3, props.value) : lighten(.5, props.value)) : props.value};
    }
  }

  &:hover {
    border-radius: 50%;
  }
`;

export const ButtonPickColor = styled.button`
  cursor: pointer;
  background: ${props => props.theme.colors.secondary};
  width: 60px;
  height: 60px;
  border-radius: 5px;
  transition: all .15s ease;
  border: 2px solid ${props => props.theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  background:
        linear-gradient(red, transparent),
        linear-gradient(to top left, lime, transparent),
        linear-gradient(to top right, blue, transparent);
    background-blend-mode: screen;
  position: relative;

  &:hover {
    border-radius: 50%;
  }

  .sketch-picker {
    position: absolute !important;
    top: 0;
    left: 0;
  }
`;

export const ButtonSetTransparent = styled.button`
  cursor: pointer;
  width: 60px;
  height: 60px;
  border-radius: ${props => props.selected ? '50%' : '5px'};
  transition: all .15s ease;
  background: ${props => props.theme.title === 'light' ? 'repeating-conic-gradient(#ddd 0% 25%, transparent 0% 50%) 50% / 15px 15px' : 'repeating-conic-gradient(#000 0% 25%, transparent 0% 50%) 50% / 15px 15px'};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${props => props.theme.colors.border};

  &:hover {
    border-radius: 50%;
  }

  > svg {
    pointer-events: none;

    > path {
      transition: all .15s ease;
      opacity: ${props => props.selected ? 1 : 0};
    }
  }
`;

export const SelectOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  transition: all .15s ease;
  background: ${props => props.clickable ? rgba(props.theme.colors.background, .35) : 'transparent'};
  pointer-events: ${props => props.clickable ? 'auto' : 'none'};
`;
