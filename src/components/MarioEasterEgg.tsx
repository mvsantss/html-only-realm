import { useEffect, useRef } from 'react';
import marioSound from '@/assets/mario-sound.mp3';

interface MarioEasterEggProps {
  show: boolean;
}

export const MarioEasterEgg = ({ show }: MarioEasterEggProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (show && audioRef.current) {
      audioRef.current.play();
    }
  }, [show]);

  if (!show) return null;

  return <audio ref={audioRef} src={marioSound} />;
};
