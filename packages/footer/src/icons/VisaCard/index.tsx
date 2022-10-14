import React, { forwardRef } from 'react';

export interface Props {
  width?: number;
  height?: number;
  viewBox?: string;
}

export const VisaCard = forwardRef<SVGSVGElement, Props>(({
  width = '64',
  height = '40',
  viewBox = '0 0 64 40',
  ...nextProps
}, ref) => (
  <svg ref={ref} width={width} height={height} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg" {...nextProps}>
    <path d="M63.949 37.8571C63.949 39.0306 62.9801 40 61.8072 40H2.14183C0.968924 40 0 39.0306 0 37.8571V2.14286C0 0.918367 0.968924 0 2.14183 0H61.8582C63.0311 0 64 0.969388 64 2.14286V37.8571H63.949Z" fill="#F9F9F9"/>
    <path d="M29.4247 26.0713H26.314L28.2518 14.0815H31.4136L29.4247 26.0713Z" fill="#15195A"/>
    <path d="M23.6622 14.0812L20.7045 22.3465L20.3475 20.5608L19.2766 15.1527C19.2766 15.1527 19.1746 14.0812 17.7977 14.0812H12.8511V14.2853C12.8511 14.2853 14.381 14.5914 16.1148 15.6629L18.8176 26.071H22.0814L27.028 14.0812H23.6622Z" fill="#15195A"/>
    <path d="M48.2421 26.0713H51.0979L48.5991 14.0815H46.1003C44.9274 14.0815 44.6724 14.9998 44.6724 14.9998L40.0317 26.1223H43.2955L43.9584 24.3366H47.9361L48.2421 26.0713ZM44.8254 21.8366L46.4572 17.3468L47.3752 21.8366H44.8254Z" fill="#15195A"/>
    <path d="M40.2357 16.9897L40.6947 14.3876C40.6947 14.3876 39.3178 13.8774 37.8899 13.8774C36.36 13.8774 32.6373 14.5407 32.6373 17.857C32.6373 20.9693 36.972 21.0203 36.972 22.6019C36.972 24.2346 33.0963 23.9285 31.8214 22.9081L31.3624 25.6121C31.3624 25.6121 32.7393 26.2754 34.8811 26.2754C37.023 26.2754 40.2357 25.153 40.2357 22.1427C40.2357 19.0305 35.8501 18.7244 35.8501 17.3978C35.9011 16.0713 38.9098 16.2244 40.2357 16.9897Z" fill="#15195A"/>
  </svg>

));

VisaCard.displayName = 'VisaCard';

export default VisaCard;