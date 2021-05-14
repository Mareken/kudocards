import React, { createContext, useContext, useState } from 'react';

const MouseOverContext = createContext();

export function MouseOverProvider ({ children }) {
  const [ isOver, setIsOver ] = useState(false);

  return (
    <MouseOverContext.Provider value={{ isOver, setIsOver }}>
      { children }
    </MouseOverContext.Provider>
  )
}

export default function useMouseOver () {
  const context = useContext(MouseOverContext);

  if (!context)
    throw new Error('useMouseOver must be used within a MouseOverProvider');

  const { isOver, setIsOver } = context;
  return { isOver, setIsOver };
}