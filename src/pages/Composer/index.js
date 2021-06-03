import React, { useEffect, useRef, useState } from 'react';

import { AnimatePresence } from 'framer-motion';

import Buttons from '../../components/Buttons';
import useActiveTab from '../../context/ActiveTab';
import useCard from '../../context/Card';
import Content from '../../components/Content';
import FontNColor from '../../components/FontNColor';

import { Container, Aside, Heading, Tabs, Tab, Indicator, Preview, CardContainer, ButtonDownload, TiltCustom } from './styles';

function Composer () {
  const { activeTab, setActiveTab } = useActiveTab();
  const { card } = useCard();
  const firstTabRef = useRef();
  const secondTabRef = useRef();
  const thirdTabRef = useRef();
  const [ translateX, setTranslateX ] = useState(0);
  const [ indicatorWidth, setIndicatorWidth ] = useState(100);

  useEffect(() => {
    changeIndicator();
  }, [activeTab]);

  function downloadKudoCard () {
    
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
            color={card.color}
          />
        </Tabs>

        <AnimatePresence exitBeforeEnter={true}>
          { 
            activeTab === 'content' ? <Content /> : (activeTab === 'font&color' ? <FontNColor /> : null)
          }
        </AnimatePresence>
      </Aside>

      <Preview>
        <Buttons inComposer={true} />
        <CardContainer>

        </CardContainer>
        <TiltCustom
          perspective={500}
          scale={1.1}
          className='noSelect'
          onClick={downloadKudoCard}
        >
          <ButtonDownload color={card.color}>
            <span>Download</span>
          </ButtonDownload>
        </TiltCustom>
      </Preview>
    </Container>
  );
}

export default Composer;