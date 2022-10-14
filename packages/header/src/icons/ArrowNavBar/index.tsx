import React from 'react';
import { forwardRef } from 'react';

export interface Props {
  width: number;
  height: number;
  viewBox?: string;
}

export const ArrowNavBar = forwardRef<SVGSVGElement, Props>(({
  width = 12,
  height = 8,
  viewBox = '0 0 12 8',
  ...nextProps
}, ref) => (
  <svg ref={ref} width={width} height={height} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg" {...nextProps}>
    <path d="M10.2875 7.29002L6.4075 3.41002L2.5275 7.29002C2.1375 7.68002 1.5075 7.68002 1.1175 7.29002C0.727499 6.90002 0.727499 6.27002 1.1175 5.88002L5.7075 1.29002C6.0975 0.900019 6.7275 0.900019 7.1175 1.29002L11.7075 5.88002C12.0975 6.27002 12.0975 6.90002 11.7075 7.29002C11.3175 7.67002 10.6775 7.68002 10.2875 7.29002Z" fill="#757575"/>
  </svg>
));

ArrowNavBar.displayName = 'ArrowNavBar';
