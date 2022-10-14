import styled from 'styled-components';
import { FooterTopProps } from '../../types';

export const Styled = styled.div`
  display: flex;
  box-sizing: border-box;
  background-color: #2B2E30;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Top = styled.div<FooterTopProps>`
  background-color: #2B2E30;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;

  @media(min-width: ${({responsiveBreakPoint}) => responsiveBreakPoint }px) {
    flex-direction: row;
    justify-content: center;
    padding: 10px 16px;
  }
`;

export const TextTop = styled.div<FooterTopProps>`
  font-family: ubuntu-regular, Arial, sans-serif;
  font-size: 1rem;
  line-height: 1.125rem;
  color: #FFFFFF;
  margin-bottom: 12px;

  @media(min-width: ${({responsiveBreakPoint}) => responsiveBreakPoint }px) {
    margin-right: 0.75rem;
    margin-bottom: 0;
  }
`;

export const PaymentWrapper = styled.div`
  display: flex;
  column-gap: 10px;
`;

const ROOT = 'FooterTop';
Styled.displayName = `${ROOT}/Styled`;
Content.displayName = `${ROOT}/Content`;
Top.displayName = `${ROOT}/Top`;
TextTop.displayName = `${ROOT}/TextTop`;
PaymentWrapper.displayName = `${ROOT}/PaymentWrapper`;
