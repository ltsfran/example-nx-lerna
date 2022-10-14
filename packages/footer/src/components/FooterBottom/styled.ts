import styled from 'styled-components';
import { FooterBottomProps } from '../../types';

export const Styled = styled.div`
  display: flex;
  box-sizing: border-box;
  background-color: #000000;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Bottom = styled.div<FooterBottomProps>`
  background-color: #000000;
  border-top: 1px solid #333333;
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(min-width: ${({responsiveBreakPoint}) => responsiveBreakPoint }px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 0;
    padding: 15px 10px;
  }
`;

export const TextBottom = styled.div<FooterBottomProps>`
  font-family: ubuntu-regular, Arial, sans-serif;
  font-size: 0.875rem;
  line-height: 1rem;
  color: #CDCDCD;
  margin-top: 16px;

  @media(min-width: ${({responsiveBreakPoint}) => responsiveBreakPoint }px) {
    margin-top: 0;
  }
`;

const ROOT = 'Footer';
Styled.displayName = `${ROOT}/Styled`;
Content.displayName = `${ROOT}/Content`;
Bottom.displayName = `${ROOT}/Bottom`;
TextBottom.displayName = `${ROOT}/TextBottom`;
