import React, { SyntheticEvent } from 'react';

interface ImageProps {
  src?: string;
  fallback?: string;
  width?: number;
  height?: number;
}

const Image: React.FC<ImageProps> = ({
  src,
  fallback,
  width,
  height
}) => {
  const handleError = (event: SyntheticEvent<HTMLImageElement>) => {
    const currentTarget = event.currentTarget;
    currentTarget.onerror = null;
    if (fallback) {
      currentTarget.src = fallback;
    }
  };

  return (
    <img
      src={src}
      width={width}
      height={height}
      onError={handleError} />
  );
};

export default Image;
