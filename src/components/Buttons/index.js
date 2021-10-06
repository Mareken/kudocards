import React, { useContext } from 'react';

import { useHistory } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import { Icon } from '@iconify/react';
import roundHome from '@iconify/icons-ic/round-home';
import roundNightlight from '@iconify/icons-ic/round-nightlight';
import roundWbSunny from '@iconify/icons-ic/round-wb-sunny';
import roundHeadset from '@iconify/icons-ic/round-headset';
import useTheme from '../../context/Theme';
import useSound from '../../context/Sound';

import light from '../../styles/themes/light';
import dark from '../../styles/themes/dark';

import { Container, Button } from './styles';

function Buttons({ inComposer = false }) {
  const currTheme = useContext(ThemeContext);
  const { playSound, playing, stopSound } = useSound();
  const history = useHistory();
  const { theme, setTheme } = useTheme();

  function goToHome() {
    history.push('/');
  }

  function toggleAudio() {
    if (!playing) {
      playSound();
    }
    else {
      stopSound();
    }
  }

  return (
    <Container
      initial={{ y: -20, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          ease: [0.6, 0.01, -0.05, 0.95],
          duration: .6
        }
      }}
      exit={{
        y: -20,
        opacity: 0,
        transition: {
          ease: [0.6, 0.01, -0.05, 0.95],
          duration: .6
        }
      }}
    >
      {
        inComposer && (
          <Button {...{ inComposer }} onClick={goToHome}>
            <Icon icon={roundHome} style={{ color: currTheme.text.primary, fontSize: '24px' }} />
          </Button>
        )
      }
      <Button {...{ inComposer }} onClick={() => setTheme(theme.title === 'dark' ? light : dark)}>
        <Icon icon={theme.title === 'dark' ? roundWbSunny : roundNightlight} style={{ color: currTheme.text.primary, fontSize: '24px', transform: 'translateY(1px) rotate(-45deg)' }} />
      </Button>
      <Button {...{ inComposer, playing }} audio={true} onClick={toggleAudio}>
        <Icon icon={roundHeadset} style={{ color: currTheme.text.primary, fontSize: '24px' }} />
      </Button>
    </Container>
  );
}

export default Buttons;