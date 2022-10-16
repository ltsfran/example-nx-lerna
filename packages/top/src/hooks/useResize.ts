import { useState, useEffect } from 'react';

export const useResize = (dimension: number): boolean => {
  const [isResize, setIsResize] = useState(true);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isResize]);

  const handleResize = () => {
    window.innerWidth >= dimension
      ? setIsResize(false)
      : setIsResize(true);
  };

  return isResize;
};
