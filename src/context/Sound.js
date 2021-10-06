import React, { createContext, useContext, useEffect } from 'react';
import usePersistedState from '../utils/hooks/usePersistedState';
import useSoundLib from 'use-sound';
import mainMusic from '../assets/audio/main.mp3';

const SoundContext = createContext();

export function SoundProvider ({ children }) {
  const [ play, { isPlaying, stop }] = useSoundLib(mainMusic, { volume: 0.8, interrupt: true, loop: true });
  const [ playing, setPlaying ] = usePersistedState('audioplaying', false);

  useEffect(() => {
    setPlaying(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function playSound() {
    if (!isPlaying) {
      play();
      setPlaying(true);
    }
  }

  function stopSound() {
    if (isPlaying) {
      stop();
      setPlaying(false);
    }
  }

  return (
    <SoundContext.Provider value={{ playing, playSound, stopSound }}>
      { children }
    </SoundContext.Provider>
  )
}

export default function useSound () {
  const context = useContext(SoundContext);

  if (!context)
    throw new Error('useSound must be used within a SoundProvider');

  const { playing, playSound, stopSound } = context;
  return { playing, playSound, stopSound };
}