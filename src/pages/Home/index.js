import React from 'react'
import { useHistory } from 'react-router-dom';

import Cursor from '../../components/Cursor';

import hand from '../../assets/images/hand.png';
import diamond from '../../assets/images/diamond.png';
import dog from '../../assets/images/dog.png';
import man from '../../assets/images/man.png';
import woman from '../../assets/images/woman.png';
import laptop from '../../assets/images/laptop.png';
import wave from '../../assets/images/wave.png';

import { Container, Center, Title, Button, Hand, Diamond, Dog, Man, Woman, Laptop, Wave } from './styles';

function Home () {
  const history = useHistory();

  function goToComposer () {
    history.push('/composer');
  }

  return (
    <Container>
      <Cursor />

      <Center>
        <Title>KudoCards<span>.</span></Title>
        <Button onClick={goToComposer}>Criar novo Kudo</Button>
      </Center>

      <Hand src={hand} draggable='false' />
      <Diamond src={diamond} draggable='false' />
      <Dog src={dog} draggable='false' />
      <Man src={man} draggable='false' />
      <Woman src={woman} draggable='false' />
      <Laptop src={laptop} draggable='false' />
      <Wave src={wave} draggable='false' />
    </Container>
  )
}

export default Home;
