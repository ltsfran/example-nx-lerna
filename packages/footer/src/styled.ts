import styled from 'styled-components';
import { FooterProps } from './types';

export const Styled = styled.div`
  display: flex;
  box-sizing: border-box;
  background: #000000;
`;

export const Content = styled.footer`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

export const Center = styled.div<FooterProps>`
  background: #000000;
  width: 100%;
  box-sizing: border-box;
  max-width: 1200px;

  @media(min-width: ${({responsiveBreakPoint}) => responsiveBreakPoint }px) {
    padding: 24px;
  }
`;

export const Row = styled.div<FooterProps>`
  display: flex;
  flex-direction: column;

  @media(min-width: ${({responsiveBreakPoint}) => responsiveBreakPoint }px) {
    justify-content: space-between;
    column-gap: 24px;
    flex-direction: initial;
  }
`;

export const LeftColumn = styled.div<FooterProps>`
  display: flex;
  flex-direction: column;

  @media(min-width: ${({responsiveBreakPoint}) => responsiveBreakPoint }px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 24px;
    flex: 2;
    flex-direction: initial;
  }
`;

export const ListSubItem = styled.ul<FooterProps>`
  list-style: none;
  margin: 0;
  padding: 16px;
  padding-top: 10px;

  @media(min-width: ${({responsiveBreakPoint}) => responsiveBreakPoint }px) {
    padding: 0;
    padding-top: 0;
  }
`;

export const SubItem = styled.li`
  font-family: ubuntu-regular, Arial, sans-serif;
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding: 10px 0;

  a {
    text-decoration:none;
    color: #CDCDCD;
    transition: .3s all ease;

    &:hover {
      color: #FFFFFF;
    }
  }
`;

export const Column = styled.div`
  flex: 1;
`;

export const ClaimsBookContent = styled.div<FooterProps>`
  margin-top: 12px;
  margin-bottom: 12px;
  padding-left: 16px;

  a {
    display: inline-flex;
    flex-wrap: wrap;
    text-decoration:none;
  }

  @media(min-width: ${({responsiveBreakPoint}) => responsiveBreakPoint }px) {
    padding-left: 0;
  }
`;

export const ClaimsBookImage = styled.div`
  display: flex-wrap;
  flex-wrap: wrap;
  width: 88px;
  height: 50px;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAAAyCAYAAADY+hwIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA3mSURBVHgB7dvHjmVFEgbg7O6L9957LxBOiAVOtIAFEhJiw44H4C3meRBrFixAGOGF9yC8995DT385+ktBcu6tW123WjPShHRU556TmRHxZ2RkRJysbXffffeu888/v/3555/tv5F27drVtm3b1v7XaPv27e2TTz5ps3POOaddeOGFXZGtJCBVHuPvzYy10fcbbbendPjhh7dZGPz1119t1RTLG5WoisVC/a3WOj5Le/fzgMkz1jM+29srAS+YzqoQqyYMolguz3799dcOwmw2+8f7UcjxPuBOgVx5eBegx757g8JzNk+5zRJF3n///fbhhx+2s846qx1//PGdB3AffPDBdtJJJ7UTTzyxvfHGG+2www7rbfbdd98OTgWxghLARmsPef/bb7+1d999t3311VftzDPPbEcddVRvl7510reSIvts6uUqBDAGJV966aV25JFHtuOOO24NrJ9++qn9+OOP/e/rr7/eQdh///3bAQccsAaIvgHlwAMP7PefffZZ34yNpW3cWsa1qRgXwB9//HE7+uij+/X999+3L774ovM45phj2o4dO/aay5jNe7GK5UTZzz//vAMZ+uOPP9pbb73VrRVQX3/9dW8DHCBcddVV7aKLLmp33XVX78fKr7zyyvbUU0910PXbb7/92g033NDfRdZnn3223XPPPR1AfLXD680332z3339/O+igg9oPP/zQrfqaa67pY+wN2j71cFW+iqXws6yvWsvvv//elc/SPfXUU9ttt93WTjnllPbEE0+0X375pb8/9NBDO7gfffRRe+edd9pNN93Ubr311j4ZANVG/59//rk99thj7Ygjjmi33357E3bibRwT880337TTTz+97+pPPvlke/vttzdkvZtxobP1GiwCe72J8M4yZjlffvnl3yKDGr3U58D3zMVPs7gPPvjgH74ZuDVC8JsLcM+NaO+ZC/HNrNukuUY9Ms4Y+YwRzHr3bRHAI6PsyOPsjeHUPHAtUxb82muvdZBY1RVXXNEOPvjgts8++/S+NjgWyLL4SjF5/HEAO/vss7sFv/LKK90f8+ms1Bjk0+68885rL7zwQnv66ae7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");
`;

export const SocialContent = styled.div<FooterProps>`
  background: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 16px;
  margin-bottom: 24px;
  align-items: center;

  @media(min-width: ${({responsiveBreakPoint}) => responsiveBreakPoint }px) {
    align-items: start;
    margin-bottom: 0;
  }
`;

export const TextSocial = styled.div`
  font-family: ubuntu-regular, Arial, sans-serif;
  font-weight: bold;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #FFFFFF;
  padding: 6px 0;
`;

export const SocialList = styled.div<FooterProps>`
  display: flex;
  justify-content: center;
  column-gap: 12px;
  align-items: center;
  margin-top: 10px;

  a {
    color: #CDCDCD;
    transition: .3s all ease;

    &:hover {
      color: #FFFFFF;
    }
  }

  @media(min-width: ${({responsiveBreakPoint}) => responsiveBreakPoint }px) {
    color: red;
  }
`;

const ROOT = 'Footer';
Styled.displayName = `${ROOT}/Styled`;
Content.displayName = `${ROOT}/Content`;
Center.displayName = `${ROOT}/Center`;
Row.displayName = `${ROOT}/Row`;
LeftColumn.displayName = `${ROOT}/LeftColumn`;
ListSubItem.displayName = `${ROOT}/ListSubItem`;
SubItem.displayName = `${ROOT}/SubItem`;
Column.displayName = `${ROOT}/Column`;
ClaimsBookContent.displayName = `${ROOT}/ClaimsBookContent`;
ClaimsBookImage.displayName = `${ROOT}/ClaimsBookImage`;
SocialContent.displayName = `${ROOT}/SocialContent`;
TextSocial.displayName = `${ROOT}/TextSocial`;
SocialList.displayName = `${ROOT}/SocialList`;
