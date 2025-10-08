import { createContext, useContext, useEffect, useState } from 'react';
import soundPlayer from '../utils/soundPlayer';

const SoundContext = createContext({ enabled: true, toggle: ()=>{} });

export function SoundProvider({ children }){
  const [enabled, setEnabled] = useState(!soundPlayer.muted);

  useEffect(()=>{
    soundPlayer.setMuted(!enabled);
  },[enabled]);

  const toggle = () => setEnabled(v => !v);

  return (
    <SoundContext.Provider value={{ enabled, toggle }}>
      {children}
    </SoundContext.Provider>
  );
}

export function useSoundConfig(){
  return useContext(SoundContext);
}
