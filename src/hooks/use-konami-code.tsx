import { useEffect, useState } from 'react';

export const useKonamiCode = (sequence: string[]) => {
  const [activated, setActivated] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toUpperCase();
      
      if (key === sequence[currentIndex]) {
        const newIndex = currentIndex + 1;
        
        if (newIndex === sequence.length) {
          setActivated(true);
          setCurrentIndex(0);
          
          // Reset after animation
          setTimeout(() => {
            setActivated(false);
          }, 3000);
        } else {
          setCurrentIndex(newIndex);
        }
      } else {
        setCurrentIndex(0);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, sequence]);

  return activated;
};
