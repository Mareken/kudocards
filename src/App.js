import React from 'react';

import styled from 'styled-components';
import Routes from './routes';
import GlobalStyle from './styles/global';

const Container = styled.div`
  height: 100%;
`;

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Routes />
    </Container>
  );
}

export default App;
