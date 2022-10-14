import React from 'react';
import {
  Styled,
  Content,
  Top,
  TextTop,
  PaymentWrapper,
} from './styled';

import {
  CashPaymentCard,
  MasterCard,
  VisaCard
} from '../../icons';
import { FooterTopProps } from '../../types';

export const FooterTop: React.FC<FooterTopProps> = ({
  responsiveBreakPoint
}) => {
  const DEFAULT_RESPONSIVE_BREAK_POINT = 768;
  const initialResponsiveBreakPoint = responsiveBreakPoint || DEFAULT_RESPONSIVE_BREAK_POINT;

  return (
    <Styled>
      <Content>
        <Top responsiveBreakPoint={initialResponsiveBreakPoint}>
          <TextTop responsiveBreakPoint={initialResponsiveBreakPoint}>Compras 100% seguras con:</TextTop>
          <PaymentWrapper>
            <CashPaymentCard />
            <VisaCard />
            <MasterCard />
          </PaymentWrapper>
        </Top>
      </Content>
    </Styled>
  );
};

FooterTop.defaultProps = {
  responsiveBreakPoint: 768
};

FooterTop.displayName = 'FooterTop';
