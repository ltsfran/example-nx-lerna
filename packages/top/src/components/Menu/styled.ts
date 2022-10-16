import styled, { css } from 'styled-components';

interface StyledProps {
  responsiveBreakPoint?: number;
}

export const Styled = styled.div<StyledProps>`
  background: #000000;
  width: 100%;
  display: none;

  @media(min-width: ${({responsiveBreakPoint}) => responsiveBreakPoint }px) {
    display: block;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
`;

export const TextItem = styled.div`
  padding: 8px 16px;
  font-family: 'ubuntu-medium', 'Arial';
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-align: center;
  color: #FFFFFF;

  a {
    color: #FFFFFF;
    text-decoration:none;
  }
`;

export const ListMenu = styled.div`
  display: flex;
  column-gap: 8px;
  margin: 0 24px;
`;

export const SubItemWrapper = styled.div`
  position: relative;
  z-index: 100;
  transition: .3s all ease;
  max-height: 0;
  overflow: hidden;
  opacity: 0.5;
`;

export const SubItemContent = styled.div`
  background: #FFFFFF;
  position: absolute;
  display: flex;
  box-shadow: 0px 6px 6px rgb(0 0 0 / 12%);
`;

interface ListSubItemProps {
  isMenuNormal?: boolean;
}

export const ListSubItem = styled.div<ListSubItemProps>`
  width: 167px;
  padding: 13px 0 4px 0;
  box-sizing: border-box;

  ${({isMenuNormal}) => isMenuNormal && css`
    width: max-content;
    padding: 10px 10px 10px 0;
  `}
`;

export const SubItem = styled.div`
  padding-left: 20px;
  padding-right: 10px;
`;

export const TextSubItem = styled.div`
  font-family: 'ubuntu-medium', 'Arial';
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1rem;
  color: #000000;

  a {
    text-decoration:none;
    color: #000000;
  }
`;

const HoverTitleSubItemCss = css`
  color: #FA9300;
  cursor: pointer;

  a {
    color: #FA9300;
  }

  ${TextSubItem} {
    color: #FA9300;
  }
`;

interface TitleSubItemProps {
  active?: boolean;
}

export const TitleSubItem = styled.div<TitleSubItemProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 0;
  animation: show 0.5s ease;

  &:hover {
    ${HoverTitleSubItemCss}
  }

  ${({active}) => active && css`
    ${HoverTitleSubItemCss}
  `}
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  &:hover {
    ${TextItem} {
      cursor: pointer;
      background: #FFFFFF;
      color: #000000;

      a {
        color: #000000;
      }

      & + ${SubItemWrapper} {
        animation: show 0.5s ease;
        max-height: 420px;
        overflow: initial;
        opacity: 1;
      }
    }
  }
`;

export const ItemContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
  }
`;

export const TypeCertificateWrapper = styled.div`
  background: #FFFFFF;
  display: flex;
  margin-top: 18px;
  margin-bottom: 18px;
`;

export const TypeCertificateContent = styled.div`
`;

export const TypeCategoryContent = styled.div`
  border-left: 1px solid #EEEEEE;
  flex: 1;
  padding-left: 20px;
  padding-right: 20px;
`;

export const CertificateContent = styled.div`
  border-left: 1px solid #EEEEEE;
  flex: 1;
  padding-left: 20px;
  padding-right: 20px;
`;

export const TitleContent = styled.div`
  font-family: 'ubuntu-regular', 'Arial';
  font-weight: 400;
  font-size: 0.688rem;
  line-height: 1.313rem;
  color: #757575;
  margin-bottom: 5px;
`;

export const ListCertificate = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 64px);
  grid-template-rows: auto auto;
  grid-gap: 5px 5px;

  a {
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: center;
    text-decoration: none;
  }
`;

export const ListTypeCategory = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 74px);
  grid-template-rows: auto auto auto;
  grid-gap: 8px 10px;

  a {
    text-decoration: none;
  }
`;

export const ItemTypeCategory = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background .4s;
  width: 74px;
  height: 56px;
  border-radius: 4px;

  &:hover {
    background: #F6F6F6;
  }
`;

export const ItemCertificate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background .4s;
  width: 64px;
  height: 56px;
  border-radius: 4px;

  &:hover {
    background: #F6F6F6;
  }
`;

export const TitleTypeCategory = styled.span`
  font-family: 'ubuntu-medium', 'Arial';
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #757575;
  margin-top: 2.4px;
  text-decoration: none;
`;

export const TitleCertificate = styled.span`
  font-family: 'ubuntu-medium', 'Arial';
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 0.875rem;
  text-align: center;
  color: #757575;
  margin-top: 2.4px;
  text-decoration: none;
`;

export const FigureTypeCategory = styled.div`
  width: 48px;
  height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 48px;
    max-height: 27px;
    margin: 0 auto;
    display: block;
  }
`;

export const FigureCertificate = styled.div`
  width: 64px;
  height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 64px;
    max-height: 38px;
    margin: 0 auto;
    display: block;
  }
`;

export const ContentTag = styled.span`
  display: inline-flex;
  flex-wrap: wrap;
  position: relative;
`;

export const TagNew = styled.span`
  position: absolute;
  background: #D0021B;
  border-radius: 9px;
  font-family: ubuntu-regular, Arial;
  font-weight: bold;
  font-size: 0.5rem;
  line-height: 0.563rem;
  text-align: center;
  color: #FFFFFF;
  right: 0;
  top: -7px;
  width: 32px;
  height: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ROOT = 'Menu';
Styled.displayName = `${ROOT}/Styled`;
Container.displayName = `${ROOT}/Container`;
Item.displayName = `${ROOT}/Item`;
TextItem.displayName = `${ROOT}/TextItem`;
SubItemContent.displayName = `${ROOT}/SubItemContent`;
SubItemWrapper.displayName = `${ROOT}/SubItemWrapper`;
ListSubItem.displayName = `${ROOT}/ListSubItem`;
SubItem.displayName = `${ROOT}/SubItem`;
TitleSubItem.displayName = `${ROOT}/TitleSubItem`;
TextSubItem.displayName = `${ROOT}/TextSubItem`;
TypeCertificateWrapper.displayName = `${ROOT}/TypeCertificateWrapper`;
TypeCategoryContent.displayName = `${ROOT}/TypeCategoryContent`;
TitleContent.displayName = `${ROOT}/TitleContent`;
ListTypeCategory.displayName = `${ROOT}/ListTypeCategory`;
ItemTypeCategory.displayName = `${ROOT}/ItemTypeCategory`;
TitleTypeCategory.displayName = `${ROOT}/TitleTypeCategory`;
FigureTypeCategory.displayName = `${ROOT}/FigureTypeCategory`;
CertificateContent.displayName = `${ROOT}/CertificateContent`;
ListCertificate.displayName = `${ROOT}/ListCertificate`;
ItemCertificate.displayName = `${ROOT}/ItemCertificate`;
FigureCertificate.displayName = `${ROOT}/FigureCertificate`;
TitleCertificate.displayName = `${ROOT}/TitleCertificate`;
ItemContent.displayName = `${ROOT}/ItemContent`;
ContentTag.displayName = `${ROOT}/ContentTag`;
TagNew.displayName = `${ROOT}/TagNew`;
