import React, { createContext, useContext } from 'react';

import light from '../styles/themes/light';
import usePersistedState from '../utils/hooks/usePersistedState';

const ThemeContext = createContext();

export function ThemeProvider ({ children }) {
  const [ theme, setTheme ] = usePersistedState('theme', light);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      { children }
    </ThemeContext.Provider>
  )
}

export default function useTheme () {
  const context = useContext(ThemeContext);

  if (!context)
    throw new Error('useTheme must be used within a ThemeProvider');

  const { theme, setTheme } = context;
  return { theme, setTheme };
}