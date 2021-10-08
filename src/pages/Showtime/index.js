import React, { useEffect, useContext } from "react";

import { useHistory } from 'react-router-dom';
import { ThemeContext } from "styled-components";
import useCard from '../../context/Card';
import confetti from 'canvas-confetti';

import { Container, Heading, CardContainer, CardLeft, CardHeading, CardMessage, CardFooter, CardFrom, CardTo, CardRight, CardImageContainer, CardImage, ButtonGoHome } from './styles';

let duration = 15 * 500;
let animationEnd = Date.now() + duration;
let defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function Showtime() {
  const history = useHistory();
  const currTheme = useContext(ThemeContext);
  const { card, clearKudo, setCurrentLink } = useCard();

  useEffect(() => {
    let msg = '%c Você recebeu um KudoCard 🤩!'; 
    let styles = [ 
      'font-size: 12px',
      'font-family: monospace',
      'background: white',
      'display: inline-block',
      'color: black',
      'padding: 8px 19px',
      'border: 1px dashed;'
    ].join(';') 
    
    console.log(msg, styles);

    let interval = setInterval(function() {
      var timeLeft = animationEnd - Date.now();
    
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }
    
      var particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
  }, []);

  function goToComposer () {
    history.push('/composer');
    confetti.reset();

    setTimeout(() => {
      setCurrentLink('');
      clearKudo();
    }, 1000);
  }

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  return (
    <Container>
      <Heading
        initial={{
          opacity: 0,
          y: -40,
          transition: {
            duration: .6
          }
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: .6
          }
        }}
        exit={{
          opacity: 0,
          y: -20,
          transition: {
            duration: .6
          }
        }}
      >
        <span>{card.from}</span> te enviou um KudoCard 🤩!
      </Heading>
      <CardContainer
        className='noSelect'
        initial={{
          opacity: 0,
          y: 40,
          transition: {
            duration: .6
          }
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: .6
          }
        }}
        exit={{
          opacity: 0,
          y: 20,
          transition: {
            duration: .6
          }
        }}
      >
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

      <ButtonGoHome onClick={goToComposer} currentColor={card.color === 'rgba(0,0,0,0)' ? currTheme.colors.primary : card.color}>
        <span>Criar um Kudo</span>

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
      </ButtonGoHome>
    </Container>
  );
}

export default Showtime;