import { useEffect } from 'react';

interface BarrelRollEffectProps {
  activate: boolean;
}

export const BarrelRollEffect = ({ activate }: BarrelRollEffectProps) => {
  useEffect(() => {
    if (activate) {
      document.body.style.transition = 'transform 1s ease-in-out';
      document.body.style.transform = 'rotate(360deg)';
      
      setTimeout(() => {
        document.body.style.transform = 'rotate(0deg)';
        setTimeout(() => {
          document.body.style.transition = '';
        }, 1000);
      }, 1000);
    }
  }, [activate]);

  return null;
};
