import React, { useEffect, useRef, useState, useContext } from 'react';

import { AnimatePresence } from 'framer-motion';
import { ThemeContext } from 'styled-components';
import html2canvas from 'html2canvas';
import { Icon } from '@iconify/react';
import roundArrowBack from '@iconify/icons-ic/round-arrow-back';
import roundClose from '@iconify/icons-ic/round-close';
import { useHistory } from 'react-router-dom';
import useWindowSize from '../../utils/hooks/useWindowSize';

import Buttons from '../../components/Buttons';
import useActiveTab from '../../context/ActiveTab';
import useCard from '../../context/Card';
import Content from '../../components/Content';
import FontNColor from '../../components/FontNColor';
import Images from '../../components/Images';

import { Container, Aside, Heading, Tabs, Tab, Indicator, Preview, CardContainer, ButtonDownload, CardHeading, CardLeft, CardRight, CardMessage, CardFooter, CardFrom, CardTo, CardImageContainer, CardImage, ButtonGoBack, ButtonMobile, ButtonCloseBottomSheet } from './styles';

function Composer () {
  const size = useWindowSize();
  const { activeTab, setActiveTab } = useActiveTab();
  const { card } = useCard();
  const currTheme = useContext(ThemeContext);
  const firstTabRef = useRef();
  const secondTabRef = useRef();
  const thirdTabRef = useRef();
  const history = useHistory();
  const cardRef = useRef();
  const [ translateX, setTranslateX ] = useState(0);
  const [ indicatorWidth, setIndicatorWidth ] = useState(100);
  const [ bottomSheetOpen, setBottomSheetOpen ] = useState(false);

  const captureConfig = {
    allowTaint: true,
    backgroundColor: null
  }

  useEffect(() => {
    changeIndicator();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);

  function renderCardHeader () {
    let { header, to } = card;
    header = header.replace('{{TO}}', to);

    return (
      <CardHeading font={card.font}>{header}</CardHeading>
    )
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
          <ButtonMobile onClick={() => bottomSheetOpen ? downloadKudoCard() : setBottomSheetOpen(true)} {...{ bottomSheetOpen }}>
            <span>Download</span>
            <span>Preview</span>
          </ButtonMobile>
        )
      }

      <Preview bottomSheetOpen={bottomSheetOpen}>
        { size.width > 768 && <Buttons inComposer={true} /> }
        
        <CardContainer className='noSelect' ref={cardRef}>
          <CardLeft>
            { renderCardHeader() }
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
      </Preview>
    </Container>
  );
}

export default Composer;