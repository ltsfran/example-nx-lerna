import React, { forwardRef } from 'react';

export interface Props {
  width?: number;
  height?: number;
  viewBox?: string;
}

export const YoutubeCircle = forwardRef<SVGSVGElement, Props>(({
  width = '24',
  height = '24',
  viewBox = '0 0 24 24',
  ...nextProps
}, ref) => (
  <svg ref={ref} width={width} height={height} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg" {...nextProps}>
    <path d="M10.5682 14.0135L14.2273 11.9318L10.5682 9.85012V14.0135Z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM18.7073 8.54C18.6281 8.24216 18.4721 7.97033 18.2549 7.75172C18.0377 7.5331 17.7669 7.37538 17.4695 7.29432C16.375 7 12 7 12 7C12 7 7.625 7 6.53045 7.29432C6.23313 7.37538 5.9623 7.5331 5.74508 7.75172C5.52787 7.97033 5.37188 8.24216 5.29273 8.54C5 9.63932 5 11.9318 5 11.9318C5 11.9318 5 14.2243 5.29273 15.3236C5.37188 15.6215 5.52787 15.8933 5.74508 16.1119C5.9623 16.3305 6.23313 16.4883 6.53045 16.5693C7.625 16.8636 12 16.8636 12 16.8636C12 16.8636 16.375 16.8636 17.4695 16.5693C17.7669 16.4883 18.0377 16.3305 18.2549 16.1119C18.4721 15.8933 18.6281 15.6215 18.7073 15.3236C19 14.2243 19 11.9318 19 11.9318C19 11.9318 19 9.63932 18.7073 8.54Z" fill="currentColor"/>
  </svg>

));

YoutubeCircle.displayName = 'YoutubeCircle';

export default YoutubeCircle;
