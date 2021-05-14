import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Cursor from '../../components/Cursor';
import useMouseOver from '../../context/MouseOver';

import hand from '../../assets/images/hand.png';
import diamond from '../../assets/images/diamond.png';
import dog from '../../assets/images/dog.png';
import man from '../../assets/images/man.png';
import woman from '../../assets/images/woman.png';
import laptop from '../../assets/images/laptop.png';
import wave from '../../assets/images/wave.png';

import {
  Container,
  Center,
  TitleContainer,
  Title,
  Word,
  Button,
  Label,
  Hand,
  Diamond,
  Dog,
  Man,
  Woman,
  Laptop,
  Wave,
} from './styles';

let timer = null;

function Home() {
  const words = ['JustDoIt', 'YouAreFoda', 'MelhorTime'];
  const history = useHistory();
  const { setIsOver } = useMouseOver();
  const [ chosenWord, setChosenWord ] = useState(words[0]);
  const [ mousePos, setMousePos ] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.addEventListener('mousemove', getMousePos);

    setTimeout(() => {
      setInterval(() => {
        if ((words.indexOf(chosenWord) + 1) === words.length) {
          setChosenWord(words[0]);
        }
        else {
          setChosenWord(prev => words[words.indexOf(prev) + 1]);
        }
      }, 2500);
    }, 500);

    return () => {
      document.removeEventListener('mousemove', getMousePos);
    }
  }, []);

  function getMousePos(evt) {
    setMousePos({ x: evt.clientX, y: evt.clientY });
  }

  function goToComposer() {
    history.push('/composer');
  }

  return (
    <Container className='noSelect'>
      <Cursor />

      <Center>
        <TitleContainer>
          <Title hasWord={chosenWord}>
            <Word>KudoCards</Word>
            <Word>{chosenWord}</Word>
          </Title>
        </TitleContainer>
        <Button
          onClick={goToComposer}
          onMouseOver={() => setIsOver(true)}
          onMouseLeave={() => setIsOver(false)}
        >
          <Label>Criar novo Kudo</Label>
        </Button>
      </Center>

      <Hand src={hand} draggable='false' style={{ transform: `translateX(calc(-50% + ${(mousePos.x * -2) / 500}px)` }} />
      <Diamond src={diamond} draggable='false' style={{ transform: `translate3d(${(mousePos.x * -2) / 500}px, ${(mousePos.y * -2) / 500}px, 0)` }} />
      <Dog src={dog} draggable='false' style={{ transform: `translate3d(${(mousePos.x * 2) / 500}px, ${(mousePos.y * 3) / 500}px, 0)` }} />
      <Man src={man} draggable='false' style={{ transform: `translate3d(${(mousePos.x * -2) / 500}px, ${(mousePos.y * -2) / 500}px, 0)` }} />
      <Woman src={woman} draggable='false' style={{ transform: `translate3d(${(mousePos.x * 1) / 500}px, ${(mousePos.y * 3) / 500}px, 0)` }} />
      <Laptop src={laptop} draggable='false' style={{ transform: `translate3d(${(mousePos.x * -2) / 500}px, ${(mousePos.y) / 500}px, 0)` }} />
      <Wave src={wave} draggable='false' style={{ transform: `translate3d(${(mousePos.x * -1) / 500}px, ${(mousePos.y * 4) / 500}px, 0)` }} />
    </Container>
  );
}

export default Home;
