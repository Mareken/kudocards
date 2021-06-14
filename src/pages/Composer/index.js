import React, { useEffect, useRef, useState, useContext } from 'react';

import { AnimatePresence } from 'framer-motion';
import { ThemeContext } from 'styled-components';
import html2canvas from 'html2canvas';

import Buttons from '../../components/Buttons';
import useActiveTab from '../../context/ActiveTab';
import useCard from '../../context/Card';
import Content from '../../components/Content';
import FontNColor from '../../components/FontNColor';
import Images from '../../components/Images';

import { Container, Aside, Heading, Tabs, Tab, Indicator, Preview, CardContainer, ButtonDownload, TiltCustom, CardHeading, CardLeft, CardRight, CardMessage, CardFooter, CardFrom, CardTo, CardImageContainer } from './styles';

function Composer () {
  const { activeTab, setActiveTab } = useActiveTab();
  const { card } = useCard();
  const currTheme = useContext(ThemeContext);
  const firstTabRef = useRef();
  const secondTabRef = useRef();
  const thirdTabRef = useRef();
  const cardRef = useRef();
  const [ translateX, setTranslateX ] = useState(0);
  const [ indicatorWidth, setIndicatorWidth ] = useState(100);

  useEffect(() => {
    changeIndicator();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);

  function renderCardHeader () {
    let { header, to } = card;
    header = header.replace('{{TO}}', to);

    return (
      <CardHeading>{header}</CardHeading>
    )
  }

  function downloadKudoCard () {
    html2canvas(cardRef.current)
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

      <Preview>
        <Buttons inComposer={true} />
        <CardContainer className='noSelect' ref={cardRef}>
          <CardLeft>
            { renderCardHeader() }
            <CardMessage>
              {card.message}
            </CardMessage>
            <CardFooter>
              <CardFrom>{card.from}</CardFrom>
              <CardTo>{card.to}</CardTo>
            </CardFooter>
          </CardLeft>
          <CardRight>
            <CardImageContainer color={card.color}>
            </CardImageContainer>
          </CardRight>
        </CardContainer>
        <TiltCustom
          perspective={500}
          scale={1.1}
          className='noSelect'
          onClick={downloadKudoCard}
        >
          <ButtonDownload color={card.color} onClick={downloadKudoCard}>
            <span>Download</span>
          </ButtonDownload>
        </TiltCustom>
      </Preview>
    </Container>
  );
}

export default Composer;