import { rgba } from 'polished';
import styled, { keyframes } from 'styled-components';

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

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  > svg {
    display: none;
  }

  @media screen and (max-width: 768px) {
    padding: 24px 20px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  height: calc(100vh - 190px);
  overflow-y: auto;
  padding: 0 12px 32px 0;
  position: relative;

  ::-webkit-scrollbar {
    width: 4px;
    border-radius: 3px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => rgba(props.theme.colors.secondary, 0)};
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => rgba(props.theme.text.secondary,.2)};
    border-radius: 3px;
  }

  @media screen and (max-width: 768px) {
    height: auto;
    padding: 0px;
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 5px;
  background: ${props => `url(${props.bg})`};
  background-size: contain;
  padding: 20px;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  position: relative;
  background-origin: content-box;
  border: 2px solid transparent;
  transition: border-color .15s ease;
  border-color: ${props => props.selected ? props.theme.colors.primary : props.theme.colors.border};

  @media screen and (min-width: 768px) {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: ${props => rgba(props.theme.colors.border, .2)};
      z-index: -1;
      border-radius: 5px;
    }
  
    &:hover {
      animation: ${squiggly} 0.2s linear infinite;
    }
  }

  @media screen and (max-width: 768px) {
    height: 100px;
    padding: 15px;
    border: 1px solid ${props => props.theme.colors.border};
    background: ${props => rgba(props.theme.colors.border, 0) + ' url(' + props.bg + ')'};
    background-repeat: no-repeat;
    background-blend-mode: multiply;
    background-size: contain;
    background-position: center;
    background-origin: content-box;
    transition: all .15s ease;

    &:active {
      background: ${props => rgba(props.theme.colors.border, .4) + ' url(' + props.bg + ')'};
      background-repeat: no-repeat;
      background-blend-mode: multiply;
      background-size: contain;
      background-position: center;
      background-origin: content-box;
    }
  }
`;