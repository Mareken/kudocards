import React, { useContext, useState } from 'react';

import { AnimatePresence } from 'framer-motion';
import { useHistory } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Icon } from '@iconify/react';
import roundHome from '@iconify/icons-ic/round-home';
import roundNightlight from '@iconify/icons-ic/round-nightlight';
import roundWbSunny from '@iconify/icons-ic/round-wb-sunny';
import roundHeadset from '@iconify/icons-ic/round-headset';
import roundTranslate from '@iconify/icons-ic/round-translate';
import roundClose from '@iconify/icons-ic/round-close';
import useTheme from '../../context/Theme';
import useSound from '../../context/Sound';

import light from '../../styles/themes/light';
import dark from '../../styles/themes/dark';

import { Container, Button, Modal, Overlay, ButtonCloseModal, ModalHeading, ButtonChangeLanguage, Radio, Language } from './styles';

function Buttons({ inComposer = false }) {
  const currTheme = useContext(ThemeContext);
  const { t, i18n } = useTranslation();
  const { playSound, playing, stopSound } = useSound();
  const history = useHistory();
  const { theme, setTheme } = useTheme();
  const [ modalOpen, setModalOpen ] = useState(false);

  function handleChangeLanguage (lng) {
    i18n.changeLanguage(lng);
  }

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
      <AnimatePresence exitBeforeEnter>
        {
          modalOpen && (
            <>
              <Overlay
                initial={{
                  opacity: 0,
                  pointerEvents: 'none'
                }}
                animate={{
                  opacity: .5,
                  pointerEvents: 'auto',
                  transition: {
                    duration: .15
                  }
                }}
                exit={{
                  opacity: 0,
                  pointerEvents: 'none',
                  transition: {
                    duration: .1
                  }
                }} 
                key='languageOverlay'
                onClick={() => setModalOpen(false)}
              />
              <Modal
                initial={{
                  x: '-50%',
                  y: '-50%',
                  pointerEvents: 'none',
                  scale: 1.02,
                  opacity: 0
                }}
                animate={{
                  x: '-50%',
                  y: '-50%',
                  pointerEvents: 'auto',
                  scale: 1,
                  opacity: 1,
                  transition: {
                    duration: .15,
                    delay: .1
                  }
                }}
                exit={{
                  x: '-50%',
                  y: '-50%',
                  pointerEvents: 'none',
                  scale: 1,
                  opacity: 0,
                  transition: {
                    duration: .1
                  }
                }}
                key='languageModal'
              >
                <ButtonCloseModal onClick={() => setModalOpen(false)}>
                  <Icon icon={roundClose} style={{ fontSize: '24px', color: currTheme.text.secondary }} />
                </ButtonCloseModal>
                <ModalHeading>{t('languageModal.heading')}</ModalHeading>
                <ButtonChangeLanguage onClick={() => handleChangeLanguage('es')} selected={i18n.language === 'es'}>
                  <Radio selected={i18n.language === 'es'} />
                  <Language selected={i18n.language === 'es'}>Español</Language>
                </ButtonChangeLanguage>
                <ButtonChangeLanguage onClick={() => handleChangeLanguage('en')} selected={i18n.language === 'en'}>
                  <Radio selected={i18n.language === 'en'} />
                  <Language selected={i18n.language === 'en'}>English</Language>
                </ButtonChangeLanguage>
                <ButtonChangeLanguage onClick={() => handleChangeLanguage('pt-BR')} selected={i18n.language === 'pt-BR'}>
                  <Radio selected={i18n.language === 'pt-BR'} />
                  <Language selected={i18n.language === 'pt-BR'}>Português</Language>
                </ButtonChangeLanguage>
              </Modal>
            </>
          )
        }
      </AnimatePresence>
      <Button {...{ inComposer }} onClick={() => setTheme(theme.title === 'dark' ? light : dark)}>
        <Icon icon={theme.title === 'dark' ? roundWbSunny : roundNightlight} style={{ color: currTheme.text.primary, fontSize: '24px', transform: 'translateY(1px) rotate(-45deg)' }} />
      </Button>
      <Button {...{ inComposer, playing }} audio={true} onClick={toggleAudio}>
        <Icon icon={roundHeadset} style={{ color: currTheme.text.primary, fontSize: '24px' }} />
      </Button>
      <Button {...{ inComposer }} onClick={() => setModalOpen(true)}>
        <Icon icon={roundTranslate} style={{ color: currTheme.text.primary, fontSize: '24px' }} />
      </Button>
    </Container>
  );
}

export default Buttons;