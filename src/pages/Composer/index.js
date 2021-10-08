import React, { useEffect, useRef, useState, useContext } from 'react';

import { AnimatePresence } from 'framer-motion';
import { ThemeContext } from 'styled-components';
import html2canvas from 'html2canvas';
import { Icon } from '@iconify/react';
import roundArrowBack from '@iconify/icons-ic/round-arrow-back';
import roundClose from '@iconify/icons-ic/round-close';
import contentCopy from '@iconify/icons-ic/content-copy';
import roundCheck from '@iconify/icons-ic/round-check';
import { useHistory } from 'react-router-dom';
import useWindowSize from '../../utils/hooks/useWindowSize';

import Buttons from '../../components/Buttons';
import useActiveTab from '../../context/ActiveTab';
import useCard from '../../context/Card';
import Content from '../../components/Content';
import FontNColor from '../../components/FontNColor';
import Images from '../../components/Images';

import { Container, Aside, Heading, Tabs, Tab, Indicator, Preview, CardContainer, ButtonsContainer, ButtonShare, ButtonDownload, CardHeading, CardLeft, CardRight, CardMessage, CardFooter, CardFrom, CardTo, CardImageContainer, CardImage, ButtonGoBack, ButtonMobile, ButtonCloseBottomSheet, ModalOverlay, Modal, ModalHeading, ButtonCloseModal, ButtonCopyLink, ModalLinkContainer, Link, ButtonShareMobile } from './styles';

function Composer () {
  const size = useWindowSize();
  const { activeTab, setActiveTab } = useActiveTab();
  const { card, shareKudo, currentLink } = useCard();
  const currTheme = useContext(ThemeContext);
  const firstTabRef = useRef();
  const secondTabRef = useRef();
  const thirdTabRef = useRef();
  const history = useHistory();
  const cardRef = useRef();
  const [ translateX, setTranslateX ] = useState(0);
  const [ indicatorWidth, setIndicatorWidth ] = useState(100);
  const [ bottomSheetOpen, setBottomSheetOpen ] = useState(false);
  const [ modalOpen, setModalOpen ] = useState(false);
  const [ copying, setCopying ] = useState(false);
  const [ mount, setMount ] = useState(false);

  const captureConfig = {
    backgroundColor: null,
    scale: 2
  }

  useEffect(() => {
    changeIndicator();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);

  function handleShareKudo () {
    setModalOpen(true);

    if (!mount) {
      shareKudo(card);
      setMount(true);
    }
  }

  function downloadKudoCard () {
    html2canvas(cardRef.current, captureConfig)
      .then(canvas => saveAs(canvas.toDataURL(), 'kudocard.png'))
      .catch(err => console.error(err));
  }

  function saveAs(uri, filename) {
    const link = document.createElement('a');

    if (typeof link.download === 'string') {
        link.href = uri;
        link.download = filename;
        //Firefox requires the link to be in the body
        document.body.appendChild(link);
        //simulate click
        link.click();
        //remove the link when done
        document.body.removeChild(link);
    } else {
        window.open(uri);
    }
}

  function changeIndicator() {
    if (size.width < 768) {
      switch (activeTab) {
        case 'content':
          setIndicatorWidth(firstTabRef.current.offsetWidth);
          setTranslateX(0);
          break;
        case 'font&color':
          setIndicatorWidth(secondTabRef.current.offsetWidth);
          setTranslateX(firstTabRef.current.offsetWidth);
          break;
        case 'image':
          setIndicatorWidth(thirdTabRef.current.offsetWidth);
          setTranslateX(firstTabRef.current.offsetWidth + secondTabRef.current.offsetWidth);
          break;
        default:
          return;
      }
    }
    else {
      switch (activeTab) {
        case 'content':
          setIndicatorWidth(firstTabRef.current.offsetWidth);
          setTranslateX(0);
          break;
        case 'font&color':
          setIndicatorWidth(secondTabRef.current.offsetWidth);
          setTranslateX(firstTabRef.current.offsetWidth + 32);
          break;
        case 'image':
          setIndicatorWidth(thirdTabRef.current.offsetWidth);
          setTranslateX(firstTabRef.current.offsetWidth + secondTabRef.current.offsetWidth + 64);
          break;
        default:
          return;
      }
    }
  }

  function handleCopyLink () {
    setCopying(true);

    navigator.clipboard.writeText(currentLink);

    setTimeout(() => {
      setCopying(false);
    }, 1000);
  }
  
  return (
    <Container
      initial={{
        opacity: 0,
        transition: {
          duration: .6
        }
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: .6
        }
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: .6
        }
      }}
    >
      <AnimatePresence>
        {
          modalOpen && (
            <>
              <ModalOverlay
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
                key='overlay'
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
                key='modal'
              >
                <ButtonCloseModal onClick={() => setModalOpen(false)}>
                  <Icon icon={roundClose} style={{ fontSize: '24px', color: currTheme.text.secondary }} />
                </ButtonCloseModal>
                <ModalHeading>Envie esse link para quem quer que veja seu KudoCard 🥳<br/>Ele irá durar até 12 horas</ModalHeading>
                <ModalLinkContainer>
                  <ButtonCopyLink onClick={handleCopyLink} disabled={copying}>
                    <Icon icon={copying ? roundCheck : contentCopy} style={{ color: currTheme.text.primary, fontSize: '24px' }} />
                  </ButtonCopyLink>
                  <Link>{currentLink}</Link>
                </ModalLinkContainer>
              </Modal>
            </>
          )
        }
      </AnimatePresence>

      <Aside>
        <ButtonGoBack onClick={() => history.push('/')}>
          <Icon icon={roundArrowBack} style={{ color: currTheme.text.primary, fontSize: '24px' }} />
        </ButtonGoBack>
        <Heading>Criando novo Kudo</Heading>
        <Tabs>
          <Tab
            active={activeTab === 'content'}
            onClick={() => setActiveTab('content')}
            ref={firstTabRef}
          >
            Conteúdo
          </Tab>
          <Tab
            active={activeTab === 'font&color'}
            onClick={() => setActiveTab('font&color')}
            ref={secondTabRef}
          >
            Fonte &amp; Cor
          </Tab>
          <Tab
            active={activeTab === 'image'}
            onClick={() => setActiveTab('image')}
            ref={thirdTabRef}
          >
            Imagem
          </Tab>
          <Indicator
            width={indicatorWidth}
            x={translateX}
          />
        </Tabs>

        <AnimatePresence exitBeforeEnter={true}>
          { 
            activeTab === 'content' ? <Content /> : (activeTab === 'font&color' ? <FontNColor /> : <Images />)
          }
        </AnimatePresence>
      </Aside>

      {
        size.width < 768 && (
          <>
            <ButtonShareMobile onClick={handleShareKudo} {...{ bottomSheetOpen }}>
              Compartilhar
            </ButtonShareMobile>
            <ButtonMobile onClick={() => bottomSheetOpen ? downloadKudoCard() : setBottomSheetOpen(true)} {...{ bottomSheetOpen }}>
              <span>Download</span>
              <span>Preview</span>
            </ButtonMobile>
          </>
        )
      }

      <Preview bottomSheetOpen={bottomSheetOpen}>
        { size.width > 768 && <Buttons inComposer={true} /> }
        
        <CardContainer className='noSelect' ref={cardRef}>
          <CardLeft>
            <CardHeading font={card.font}>{card.header}</CardHeading>
            <CardMessage font={card.font}>
              {card.message}
            </CardMessage>
            <CardFooter>
              <CardFrom currentColor={card.color === 'rgba(0,0,0,0)' ? currTheme.colors.primary : card.color} font={card.font}>{card.from}</CardFrom>
              <CardTo currentColor={card.color === 'rgba(0,0,0,0)' ? currTheme.colors.primary : card.color} font={card.font}>{card.to}</CardTo>
            </CardFooter>
          </CardLeft>
          <CardRight>
            <CardImageContainer currentColor={card.color}>
              <CardImage image={card.image} />
            </CardImageContainer>
          </CardRight>
        </CardContainer>

        {
          size.width < 768 && (
            <ButtonCloseBottomSheet onClick={() => setBottomSheetOpen(false)} {...{ bottomSheetOpen }}>
              <Icon icon={roundClose} style={{ color: '#fff', fontSize: '24px' }} />
            </ButtonCloseBottomSheet>
          )
        }

        <ButtonsContainer>
          <ButtonShare currentColor={card.color === 'rgba(0,0,0,0)' ? currTheme.colors.primary : card.color} onClick={handleShareKudo}>
            <span>Compartilhar</span>
            
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
              <defs>
                <filter id="squiggly-0">
                  <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="0"/>
                  <feDisplacementMap id="displacement" in="SourceGraphic" in2="noise" scale="6" />
                </filter>
                <filter id="squiggly-1">
                  <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="1"/>
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
                </filter>
                
                <filter id="squiggly-2">
                  <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="2"/>
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
                </filter>
                <filter id="squiggly-3">
                  <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="3"/>
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
                </filter>
                
                <filter id="squiggly-4">
                  <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="4"/>
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
                </filter>
              </defs> 
            </svg>
          </ButtonShare>

          <ButtonDownload currentColor={card.color === 'rgba(0,0,0,0)' ? currTheme.colors.primary : card.color} onClick={downloadKudoCard}>
            <span>Download</span>
            
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
              <defs>
                <filter id="squiggly-0">
                  <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="0"/>
                  <feDisplacementMap id="displacement" in="SourceGraphic" in2="noise" scale="6" />
                </filter>
                <filter id="squiggly-1">
                  <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="1"/>
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
                </filter>
                
                <filter id="squiggly-2">
                  <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="2"/>
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
                </filter>
                <filter id="squiggly-3">
                  <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="3"/>
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
                </filter>
                
                <filter id="squiggly-4">
                  <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="4"/>
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
                </filter>
              </defs> 
            </svg>
          </ButtonDownload>
        </ButtonsContainer>

      </Preview>
    </Container>
  );
}

export default Composer;