import React from 'react';
import { forwardRef } from 'react';

export interface Props {
  width: number;
  height: number;
  viewBox?: string;
}

export const User = forwardRef<SVGSVGElement, Props>(({
  width = 24,
  height = 24,
  viewBox = '0 0 24 24',
  ...nextProps
}, ref) => (
  <svg ref={ref} width={width} height={height} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg" {...nextProps}>
    <path fillRule="evenodd" clipRule="evenodd" d="M7.00002 7C7.00002 4.23858 9.2386 2 12 2C14.7614 2 17 4.23858 17 7C17 9.76142 14.7614 12 12 12C9.2386 12 7.00002 9.76142 7.00002 7Z" fill="white"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M5 22C4.44772 22 4 21.5523 4 21V18C4 16.6739 4.52678 15.4021 5.46447 14.4645C6.40215 13.5268 7.67392 13 9 13H15C16.3261 13 17.5979 13.5268 18.5355 14.4645C19.4732 15.4021 20 16.6739 20 18V21C20 21.5523 19.5523 22 19 22H5Z" fill="white"/>
  </svg>
));

User.displayName = 'User';
