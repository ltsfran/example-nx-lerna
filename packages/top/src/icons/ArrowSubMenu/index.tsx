import React from 'react';
import { forwardRef } from 'react';

export interface Props {
  width: number;
  height: number;
  viewBox?: string;
}

export const ArrowSubMenu = forwardRef<SVGSVGElement, Props>(({
  width = 18,
  height = 18,
  viewBox = '0 0 18 18',
  ...nextProps
}, ref) => (
  <svg ref={ref} width={width} height={height} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg" {...nextProps}>
    <path d="M6.96751 11.9101L9.87751 9.00011L6.96751 6.09011C6.67501 5.79761 6.67501 5.32511 6.96751 5.03261C7.26001 4.74011 7.73251 4.74011 8.02501 5.03261L11.4675 8.47511C11.76 8.76761 11.76 9.24011 11.4675 9.53261L8.02501 12.9751C7.73251 13.2676 7.26001 13.2676 6.96751 12.9751C6.68251 12.6826 6.67501 12.2026 6.96751 11.9101Z" fill="currentColor"/>
  </svg>
));

ArrowSubMenu.displayName = 'ArrowSubMenu';
