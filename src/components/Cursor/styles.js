import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #ddd;
  z-index: 1000;
  pointer-events: none;
  transition: all .45s cubic-bezier(.2,1.2,.2,1.3);
  mix-blend-mode: difference;
`;
