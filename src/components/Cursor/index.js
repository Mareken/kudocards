import React, { useEffect } from 'react';

import { useMotionValue } from 'framer-motion';
import useMouseOver from '../../context/MouseOver';

import { Container } from './styles';

function Cursor() {
  const posX = useMotionValue(-100);
  const posY = useMotionValue(-100);
  const { isOver } = useMouseOver();

  useEffect(() => {
    const moveCursor = evt => {
      posX.set(evt.clientX - 8);
      posY.set(evt.clientY - 8);
    }
    
    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    }
  }, []);

  return (
    <Container
      style={{
        translateX: posX,
        translateY: posY,
        scale: isOver ? 3 : 1
      }}
    />
  )
}

export default Cursor;