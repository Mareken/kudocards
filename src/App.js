import React from 'react';

import styled, { ThemeProvider } from 'styled-components';
import Routes from './routes';
import GlobalStyle from './styles/global';
import { MouseOverProvider } from './context/MouseOver';
import { ActiveTabProvider } from './context/ActiveTab';
import { SoundProvider } from './context/Sound';
import useTheme from './context/Theme';

const Container = styled.div`
  height: 100%;
`;

function App() {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <SoundProvider>
          <ActiveTabProvider>
            <MouseOverProvider>
              <GlobalStyle />
              <Routes />
            </MouseOverProvider>
          </ActiveTabProvider>
        </SoundProvider>
      </Container>
    </ThemeProvider>
  );
}

export default App;
