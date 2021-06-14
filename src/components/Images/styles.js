import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  height: calc(100vh - 200px);
  overflow: hidden auto;
  padding-right: 4px;
  position: relative;

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

export const Image = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 5px;
  background: ${props => `url(${props.bg})`};
  background-size: cover;
  background-position: center;
  transform-style: preserve-3d;
`;