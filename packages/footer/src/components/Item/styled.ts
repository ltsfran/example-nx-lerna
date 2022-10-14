import styled, { css } from 'styled-components';

interface ItemProps {
  textHeader?: string;
  responsiveBreakPoint?: number;
  isOpen?: boolean;
}

export const Wrapper = styled.div<ItemProps>`
  border-bottom: 1px solid #333333;

  @media(min-width: ${({responsiveBreakPoint}) => responsiveBreakPoint }px) {
    border-bottom: none;
  }
`;

export const Header = styled.div<ItemProps>`
  display: flex;
  justify-content: space-between;
  padding: 16px;

  @media(min-width: ${({responsiveBreakPoint}) => responsiveBreakPoint }px) {
    display: block;
    padding: 0;
  }
`;

export const Body = styled.div<ItemProps>`
  max-height: 0;
  transition: .2s all ease;
  opacity: 0;
  overflow: hidden;

  ${({isOpen}) => isOpen && css`
    max-height: 500px;
    opacity: 1;
  `}

  @media(min-width: ${({responsiveBreakPoint}) => responsiveBreakPoint }px) {
    max-height: initial;
    opacity: 1;
  }
`;

export const Title = styled.div<ItemProps>`
  font-family: ubuntu-regular, Arial, sans-serif;
  font-weight: bold;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #FFFFFF;

  @media(min-width: ${({responsiveBreakPoint}) => responsiveBreakPoint }px) {
    padding: 6px 0;
  }
`;

export const IconArrow = styled.div<ItemProps>`
  transition: .3s all ease;

  ${({isOpen}) => isOpen && css`
    transform: rotate(180deg);
  `}

  @media(min-width: ${({responsiveBreakPoint}) => responsiveBreakPoint }px) {
    display: none;
  }
`;

const ROOT = 'Item';
Wrapper.displayName = `${ROOT}/Wrapper`;
Header.displayName = `${ROOT}/Header`;
Body.displayName = `${ROOT}/Body`;
Title.displayName = `${ROOT}/Title`;
IconArrow.displayName = `${ROOT}/IconArrow`;
