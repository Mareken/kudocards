import React, { createContext, useContext, useState } from 'react';

const ActiveTabContext = createContext();

export function ActiveTabProvider ({ children }) {
  const [ activeTab, setActiveTab ] = useState('content');

  return (
    <ActiveTabContext.Provider value={{ activeTab, setActiveTab }}>
      { children }
    </ActiveTabContext.Provider>
  )
}

export default function useActiveTab () {
  const context = useContext(ActiveTabContext);

  if (!context)
    throw new Error('useActiveTab must be used within a ActiveTabProvider');

  const { activeTab, setActiveTab } = context;
  return { activeTab, setActiveTab };
}