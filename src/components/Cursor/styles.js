import styled from 'styled-components';

export const Circle = styled.circle``;

export const Container = styled.svg`
  display: none;

  @media (any-pointer: fine) {
    position: fixed;
    top: 0;
    left: 0;
    display: block;
    pointer-events: none;

    ${Circle} {
      fill: #000;
      stroke: #000;
      stroke-width: 1px;
    }
  }
`;
