
import styled from 'styled-components';

interface StyledProps {
  isShow?: boolean;
}

export const Styled = styled.div<StyledProps>`
  max-width: ${(props) => (props.isShow ? '270px' : '0')};
  width: ${(props) => (props.isShow ? '270px' : '0')};
  background: #FFFFFF;
  position: fixed;
  top: 0;
  overflow-y: scroll;
  height: 100%;
  left: 0;
  z-index: 1004;
  transition: .3s all ease;
`;

export const NavBarList = styled.div`
  background: #FFFFFF;
  display: block;
`;

export const ItemNavBarLogo = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ubuntu-regular, Arial;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1rem;
  color: #000000;
  height: 48px;
  box-sizing: border-box;
`;

export const LogoNavBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-right: 5px;
`;

export const NavBarIcon = styled.label.attrs(() => ({
  htmlFor: 'checkMenu'
}))`
  font-size: 0;
  display: flex;
  cursor: pointer;

  @media(min-width: 768px) {
    display: none;
  }
`;

export const CheckoutNavBar = styled.input`
  display: none;
`;

export const DropdownNavBar = styled.div`
  background: #FFFFFF;
  display: block;
  box-sizing: border-box;
`;

export const HeaderNavBar = styled.label`
  border-bottom: 1px solid #ddd;
  padding: 14px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'ubuntu-regular', 'Arial';
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #000000;
  height: 44px;
  box-sizing: border-box;

  .creditSantander{
    color: #EC0000;
  }

  padding-right: 23px;
`;

interface HeaderNavBarNameProps {
  isSantander?: boolean;
}

export const HeaderNavBarName = styled.div<HeaderNavBarNameProps>`
  color: ${(props) => (props.isSantander ? '#EC0000' : '#000000')};
  font-family: 'ubuntu-regular', 'Arial';
  font-style: normal;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1rem;
  max-width: 124px;
  text-overflow: ellipsis;
  white-space: pre;
  position: relative;
  overflow: hidden;
`;

export const HeaderNavBarBox = styled.div<HeaderNavBarNameProps>`
  color: ${(props) => (props.isSantander ? '#EC0000' : '#000000')};
  font-family: 'ubuntu-regular', 'Arial';
  font-style: normal;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1rem;
  max-width: 124px;
  text-overflow: ellipsis;
  white-space: pre;
  position: relative;
`;

export const WrapperSubNavBar = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 450px;
  background: #F5F5F5;
  overflow: hidden;
  transition: .3s all ease;
  box-shadow: inset 0px 10px 8px -12px rgb(0 0 0 / 36%), inset 0px -10px 8px -12px rgb(0 0 0 / 36%);
`;

export const ItemNavBar = styled.div`

  ${CheckoutNavBar}:checked + ${DropdownNavBar} {
    ${HeaderNavBar} {
      svg {
        transform: rotate(180deg);
      }
    }
    ${WrapperSubNavBar} {
      transition: .3s all ease;
      max-height: 0;
    }
  }
`;

export const LinkSubItem = styled.a`
  padding: 14px 30px;
  color: #000;
  display: block;
  font-size: 0.875rem;
  line-height: 1rem;
  border-bottom: 1px solid #DDDDDD;
  text-decoration: none;
  box-sizing: border-box;
  height: 45px;
`;

export const AuthWrapper = styled.div`
  background: #F7F7F7;
  display: block;
  padding: 14px 16px;
  border-bottom: 1px solid #ddd;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  font-family: ubuntu-regular, Arial;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1rem;
  color: #000000;
`;

interface LinkAuthProps {
  color?: string;
}

export const LinkAuth = styled.a<LinkAuthProps>`
  color: ${(props) => (props.color ? props.color : '#000000')};
  font-family: 'ubuntu-regular', 'Arial';
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1rem;
  text-decoration: none;
`;

interface LabelOrProps {
  color?: string;
}

export const LabelOr = styled.span<LabelOrProps>`
  color: ${(props) => (props.color ? props.color : '#FFFFFF')};
  font-family: 'ubuntu-regular', 'Arial';
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1rem;
  padding: 0 4px;
`;

export const ItemNavBarButton = styled.div`
  border-bottom: 1px solid #DDDDDD;
  padding: 10px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000000;
  box-sizing: border-box;

  button {
    font-family: 'ubuntu-medium', 'Arial';
    font-weight: 500;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;

export const LinkItem = styled.a`
  border-bottom: 1px solid #DDDDDD;
  padding: 14px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ubuntu-regular, Arial;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1rem;
  color: #000000;
  text-decoration: none;
  height: 44px;
  box-sizing: border-box;
`;

export const ContentItem = styled.div`
  font-family: ubuntu-regular, Arial;
  color: #BB162B;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 0.875rem;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    padding-right: 5px;
  }
`;

export const ContentTag = styled.span`
  position: relative;
  font-family: ubuntu-regular, Arial;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1rem;
  color: #000000;
  text-decoration: none;
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
  top: -9px;
  width: 32px;
  height: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ROOT = 'Navbar';
Styled.displayName = `${ROOT}/Styled`;
NavBarList.displayName = `${ROOT}/NavBarList`;
ItemNavBarLogo.displayName = `${ROOT}/ItemNavBarLogo`;
NavBarIcon.displayName = `${ROOT}/NavBarIcon`;
LinkAuth.displayName = `${ROOT}/LinkAuth`;
LabelOr.displayName = `${ROOT}/LabelOr`;
LogoNavBarWrapper.displayName = `${ROOT}/LogoNavBarWrapper`;
ItemNavBar.displayName = `${ROOT}/ItemNavBar`;
CheckoutNavBar.displayName = `${ROOT}/CheckoutNavBar`;
DropdownNavBar.displayName = `${ROOT}/DropdownNavBar`;
HeaderNavBar.displayName = `${ROOT}/HeaderNavBar`;
WrapperSubNavBar.displayName = `${ROOT}/WrapperSubNavBar`;
HeaderNavBarName.displayName = `${ROOT}/HeaderNavBarName`;
HeaderNavBarBox.displayName = `${ROOT}/HeaderNavBarBox`;
LinkSubItem.displayName = `${ROOT}/LinkSubItem`;
AuthWrapper.displayName = `${ROOT}/AuthWrapper`;
ItemNavBarButton.displayName = `${ROOT}/ItemNavBarButton`;
LinkItem.displayName = `${ROOT}/LinkItem`;
ContentItem.displayName = `${ROOT}/ContentItem`;
ContentTag.displayName = `${ROOT}/ContentTag`;
TagNew.displayName = `${ROOT}/TagNew`;
