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
`;

export const Image = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 5px;
  background: ${props => `url(${props.bg})`};
  background-size: 90%;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${props => rgba(props.theme.colors.border, .2)};
    z-index: -1;
    border-radius: 5px;
  }

  &:hover {
    animation: ${squiggly} 0.2s linear infinite;
  }
`;