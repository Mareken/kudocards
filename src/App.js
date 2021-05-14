import React from 'react';

import styled from 'styled-components';
import Routes from './routes';
import GlobalStyle from './styles/global';
import { MouseOverProvider } from './context/MouseOver'

const Container = styled.div`
  height: 100%;
`;

function App() {
  return (
    <Container>
        <MouseOverProvider>
        <GlobalStyle />
        <Routes />
      </MouseOverProvider>
    </Container>
  );
}

export default App;
