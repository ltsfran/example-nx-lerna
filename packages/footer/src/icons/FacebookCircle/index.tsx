import React, { forwardRef } from 'react';

export interface Props {
  width?: number;
  height?: number;
  viewBox?: string;
}

export const FacebookCircle = forwardRef<SVGSVGElement, Props>(({
  width = '24',
  height = '24',
  viewBox = '0 0 24 24',
  ...nextProps
}, ref) => (
  <svg ref={ref} width={width} height={height} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg" {...nextProps}>
    <path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z" fill="currentColor"/>
    <path d="M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.80102 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C11.3674 24.0486 12.6326 24.0486 13.875 23.8542V15.4688H16.6711Z" fill="black"/>
  </svg>

));

FacebookCircle.displayName = 'FacebookCircle';

export default FacebookCircle;
