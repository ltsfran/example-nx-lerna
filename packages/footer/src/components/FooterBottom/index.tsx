import React from 'react';
import {
  Styled,
  Content,
  Bottom,
  TextBottom,
} from './styled';
import {
  Logo,
} from '../../icons';
import { FooterBottomProps } from '../../types';

export const FooterBottom: React.FC<FooterBottomProps> = ({
  siteUrl,
  responsiveBreakPoint
}) => {
  const date = new Date();
  const year = date.getFullYear();

  const DEFAULT_SITE_URL = 'http://www.neoauto.com';
  const initialSiteUrl = siteUrl || DEFAULT_SITE_URL;

  const DEFAULT_RESPONSIVE_BREAK_POINT = 768;
  const initialResponsiveBreakPoint = responsiveBreakPoint || DEFAULT_RESPONSIVE_BREAK_POINT;

  return (
    <Styled>
      <Content>
        <Bottom responsiveBreakPoint={initialResponsiveBreakPoint}>
          <a href={initialSiteUrl}><Logo /></a>
          <TextBottom responsiveBreakPoint={initialResponsiveBreakPoint}>© {year} NeoAuto</TextBottom>
        </Bottom>
      </Content>
    </Styled>
  )};

FooterBottom.defaultProps = {
  siteUrl: 'http://www.neoauto.com',
  responsiveBreakPoint: 768
};

FooterBottom.displayName = 'FooterBottom';
