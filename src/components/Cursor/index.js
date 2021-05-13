import React, { useState, useEffect } from 'react';

import { getMousePos } from '../../utils/helpers';

import { Container, Circle } from './styles';

function Cursor() {
  const [ mouse, setMouse ] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    window.addEventListener('mousemove', evt => setMouse(getMousePos(evt)));
  }, []);

  return (
    <Container>
      <Circle cx='12.5' cy='12.5' r='6.25' />
    </Container>
  );
}

export default Cursor;