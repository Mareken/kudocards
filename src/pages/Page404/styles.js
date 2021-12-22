import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.background};
`;

export const Text = styled.p`
  font-size: 18px;
  color: ${props => props.theme.text.primary};
  margin: 32px 0px;
`;

export const CustomLink = styled.div`
  display: inline-block;
  margin-bottom: 8px;
  overflow: hidden;
  padding: 7px 0px;
  text-align: center;
  font-size: 18px;
  color: ${props => props.theme.colors.primary};
  position: relative;
  cursor: pointer;

  &::before,
  &::after {
    position: absolute;
    width: 100%;
    height: 1px;
    background: currentColor;
    top: 100%;
    left: 0;
    pointer-events: none;
  }

  &::before {
    content: '';
  }

  .link__graphic {
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    fill: none;
    stroke: ${props => props.theme.colors.primary};
    stroke-width: 1px;
  }

  .link__graphic--slide {
    top: 0px;
    stroke-width: 3px;
    transition: transform 0.7s;
    transition-timing-function: cubic-bezier(0, 0.25, 0.5, 1);
  }

  &:hover .link__graphic--slide {
    transform: translate3d(-66.6%, 0, 0);
  }
`;