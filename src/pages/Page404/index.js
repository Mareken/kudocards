import React from 'react';

import Lottie from 'react-lottie-player';
import animationData from '../../assets/lotties/404.json';
import { useHistory } from 'react-router-dom';

import { Container, Text, CustomLink } from './styles';

function Page404 () {
  const history = useHistory();

  function goToHome () {
    history.replace('/');
  }

  function goToComposer () {
    history.replace('/composer');
  }

  return (
    <Container>
      <Lottie
        loop
        animationData={animationData}
        play
      />
      <Text>Parece que você se perdeu 😬</Text>
      <CustomLink onMouseDown={goToHome}>
        <span>Voltar à página inicial</span>
        <svg className="link__graphic link__graphic--slide" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
          <path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"></path>
        </svg>
      </CustomLink>
      <CustomLink onMouseDown={goToComposer}>
        <span>Criar Kudo</span>
        <svg className="link__graphic link__graphic--slide" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
          <path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"></path>
        </svg>
      </CustomLink>
    </Container>
  )
}

export default Page404;
