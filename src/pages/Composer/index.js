import React, { useEffect, useRef, useState } from 'react';

import Buttons from '../../components/Buttons';
import useActiveTab from '../../context/ActiveTab';

import { Container, Aside, Heading, Tabs, Tab, Indicator, Preview, Card, ButtonDownload } from './styles';

function Composer () {
  const { activeTab, setActiveTab } = useActiveTab();
  const firstTabRef = useRef();
  const secondTabRef = useRef();
  const thirdTabRef = useRef();
  const [ translateX, setTranslateX ] = useState(0);
  const [ indicatorWidth, setIndicatorWidth ] = useState(100);

  useEffect(() => {
    changeIndicator();
  }, [activeTab]);

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
      </Aside>
      <Preview>
        <Buttons inComposer={true} />
        <Card>

        </Card>
        <ButtonDownload>
          Download
        </ButtonDownload>
      </Preview>
    </Container>
  );
}

export default Composer;