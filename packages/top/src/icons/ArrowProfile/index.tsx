import React from 'react';
import { forwardRef } from 'react';

export interface Props {
  width: number;
  height: number;
  viewBox?: string;
}

export const ArrowProfile = forwardRef<SVGSVGElement, Props>(({
  width = 24,
  height = 24,
  viewBox = '0 0 24 24',
  ...nextProps
}, ref) => (

  <svg ref={ref} width={width} height={height} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg" {...nextProps}>
    <path d="M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z" fill="white"/>
  </svg>
));

ArrowProfile.displayName = 'ArrowProfile';