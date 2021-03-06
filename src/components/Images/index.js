import React from 'react';

import useCard from '../../context/Card';

import { Container, Grid, Image } from './styles';

function Images () {
  const { card, setCard } = useCard();

  function importAll (require) {
    return require.keys().reduce((acc, next) => {
      acc[next.replace("./", "")] = require(next);
      return acc;
    }, {});
  }

  const images = importAll(
    require.context("../../assets/card_illus", false, /\.(png|jpe?g|svg)$/)
  );

  function updateCardImage (img) {
    setCard(prevState => ({...prevState, image: img}));
  }
  return (
    <Container>
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
      <Grid>
        {
          Object.keys(images).map((img, index) => (
            <Image
              key={index}
              bg={images[img].default}
              onClick={() => updateCardImage(images[img].default)}
              selected={card.image === images[img].default}
            />
          ))
        }
      </Grid>
    </Container>
  );
}

export default Images;