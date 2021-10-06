import React, { createContext, useContext } from 'react';

import { nanoid } from 'nanoid';
import usePersistedState from '../utils/hooks/usePersistedState';

import jaiminho from '../assets/images/jaiminho.svg';

const CardContext = createContext();

export function CardProvider ({ children }) {
  const [ card, setCard ] = usePersistedState('kudocard', {
    id: nanoid(),
    from: 'Eu',
    to: 'Time',
    header: 'Parabéns {{TO}}! 🥳 ',
    message: 'Escreve uma mensagem aí xovem 🙌',
    font: 'DM Sans',
    color: '#00A9F7',
    image: jaiminho
  });

  return (
    <CardContext.Provider value={{ card, setCard }}>
      { children }
    </CardContext.Provider>
  )
}

export default function useCard () {
  const context = useContext(CardContext);

  if (!context)
    throw new Error('useCard must be used within a CardProvider');

  const { card, setCard } = context;
  return { card, setCard };
}