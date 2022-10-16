import styled, { css } from 'styled-components';

export const Styled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #000000;
`;

interface TopWrapperProps {
  responsiveBreakPoint?: number;
}

export const TopWrapper = styled.div<TopWrapperProps>`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  @media(min-width: ${({responsiveBreakPoint}) => responsiveBreakPoint }px) {
    padding: 10px 24px;
  }
`;

interface LogoWrapperProps {
  responsiveBreakPoint?: number;
}

export const LogoWrapper = styled.div<LogoWrapperProps>`
  display: flex;
  align-items: center;

  svg {
    transition: .3s all ease;
  }

  @media(min-width: ${({responsiveBreakPoint}) => responsiveBreakPoint }px) {
    margin-bottom: 0;
  }
`;

interface LogoHrefProps {
  responsiveBreakPoint?: number;
}

export const LogoHref = styled.a<LogoHrefProps>`
  display: flex;
  flex-wrap: wrap;
  text-decoration: none;
  margin-left: 12px;

  svg {
    width: 122px;
    height: 24px;
  }

  @media(min-width: ${({responsiveBreakPoint}) => responsiveBreakPoint }px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-left: 0;

    svg {
      width: 152px;
      height: 30px;
    }
  }
`;

interface ContainerRightProps {
  responsiveBreakPoint?: number;
}

export const ContainerRight = styled.div<ContainerRightProps>`
  display: none;

  @media(min-width: ${({responsiveBreakPoint}) => responsiveBreakPoint }px) {
    display: flex;
  }
`;

export const WrapperLists = styled.div`
  background: #FFFFFF;
  transition: .3s all ease;
  position: absolute;
  width: 100%;
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.31);
  border-radius: 8px;
  max-height: 0;
  overflow: hidden;
  opacity: 0.5;
  z-index: 10;
`;

export const WrapperName = styled.label`
  width: 160px;
  display: flex;
  border-radius: 4px;
  justify-content: right;
  font-family: 'ubuntu-regular', 'Arial';
  font-style: normal;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1rem;
  padding: 6px 4px;
  box-sizing: border-box;
  align-items: center;
  cursor: pointer;

  svg {
    path {
      fill: #fff;
    }
  }
`;

export const ProfileWrapper = styled.div`
  margin-right: 16px;
  &:hover {
    ${WrapperName} {
      cursor: pointer;
      border-radius: 4px 4px 0 0;

      span {
        color: #FFFFFF;
      }

      & + ${WrapperLists} {
        animation: show 0.5s ease;
        max-height: 420px;
        overflow: initial;
        opacity: 1;
        padding: 8px 0;
      }
    }
  }
`;

export const CheckoutProfile = styled.input`
  width: 0;
  height: 0;
  overflow: hidden;
  opacity: 0;
  display: none;
`;

export const ProfileDropdown = styled.div`
  position: relative;
`;

export const ProfileName = styled.span`
  color: #FFFFFF;
  max-width: 110px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre;
  margin-right: 6px;
  font-family: 'ubuntu-medium', 'Arial';
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

export const ListItem = styled.a`
  display: flex;
  cursor: pointer;
  padding: 8px 16px;
  height: 36px;
  align-items: center;
  justify-content: left;
  box-sizing: border-box;
  text-decoration: none;
  color: #000000;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-family: 'ubuntu-medium', 'Arial';

  &:hover{
    color: #FA9300;
  }
`;

interface ContentAuthProps {
  isHiddenButtonSellVehicle?: boolean;
}

export const ContentAuth = styled.div<ContentAuthProps>`
  padding-left: 20px;
  padding-right: 24px;
  display: flex;
  align-items: center;
  font-family: ubuntu-regular, Arial;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1rem;
  color: #FFFFFF;

  ${({isHiddenButtonSellVehicle}) => isHiddenButtonSellVehicle && css`
    padding-right: 0;
  `}
`;

export const SellVehicleButtonWrapper = styled.div`
  button {
    font-family: 'ubuntu-medium', 'Arial';
    font-weight: 500;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;

export const Overlay = styled.div`
  max-width: 100%;
  overflow: hidden;
  inset: 0px;
  display: flex;
  opacity: 1;
  z-index: 1003;
  position: fixed;
  overflow: hidden auto;
  transition: .3s all ease;
  align-items: center;
  justify-content: center;
  background-color: #00000080;
`;

interface SearchWrapperProps {
  responsiveBreakPoint?: number;
}

export const SearchWrapper = styled.div<SearchWrapperProps>`
  font-family: ubuntu-regular, Arial, sans-serif;
  width: 100%;

  @media(min-width: ${({responsiveBreakPoint}) => responsiveBreakPoint }px) {
    max-width: 400px;
    margin-left: 44px;
    margin-right: 10px;
  }
`;

interface SearchContentProps {
  responsiveBreakPoint?: number;
}

export const SearchContent = styled.div<SearchContentProps>`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 10px 16px;
  box-sizing: border-box;

  @media(min-width: ${({responsiveBreakPoint}) => responsiveBreakPoint }px) {
    padding: 0;
  }
`;

interface ContainerLeftProps {
  responsiveBreakPoint?: number;
}

export const ContainerLeft = styled.div<ContainerLeftProps>`
  width: 100%;

  @media(min-width: ${({responsiveBreakPoint}) => responsiveBreakPoint}px) {
    display: flex;
    align-items: center;
  }
`;

interface AccountWrapperProps {
  responsiveBreakPoint?: number;
}

export const AccountWrapper = styled.div<AccountWrapperProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  box-sizing: border-box;

  @media(min-width: ${({responsiveBreakPoint}) => responsiveBreakPoint}px) {
    padding: 0;
  }
`;

interface UserWrapperProps {
  responsiveBreakPoint?: number;
}

export const UserWrapper = styled.div<UserWrapperProps>`
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;

  @media(min-width: ${({responsiveBreakPoint}) => responsiveBreakPoint }px) {
    display: none;
  }
`;

interface NavBarIconProps {
  responsiveBreakPoint?: number;
}

export const NavBarIcon = styled.label<NavBarIconProps>`
  font-size: 0;
  display: flex;

  @media(min-width: ${({responsiveBreakPoint}) => responsiveBreakPoint }px) {
    display: none;
  }
`;

interface LinkAuthProps {
  color?: string;
}

export const LinkAuth = styled.span<LinkAuthProps>`
  color: ${(props) => (props.color ? props.color : '#000000')};
  font-family: ubuntu-regular, Arial;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1rem;
  text-decoration: none;
  cursor: pointer;
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

const ROOT = 'Header';
Styled.displayName = `${ROOT}/Styled`;
TopWrapper.displayName = `${ROOT}/TopWrapper`;
LogoWrapper.displayName = `${ROOT}/LogoWrapper`;
LogoHref.displayName = `${ROOT}/LogoHref`;
ContainerRight.displayName = `${ROOT}/ContainerRight`;
WrapperName.displayName = `${ROOT}/WrapperName`;
ProfileWrapper.displayName = `${ROOT}/ProfileWrapper`;
WrapperLists.displayName = `${ROOT}/WrapperLists`;
CheckoutProfile.displayName = `${ROOT}/CheckoutProfile`;
ProfileDropdown.displayName = `${ROOT}/ProfileDropdown`;
ProfileName.displayName = `${ROOT}/ProfileName`;
ListItem.displayName = `${ROOT}/ListItem`;
ContentAuth.displayName = `${ROOT}/ContentAuth`;
Overlay.displayName = `${ROOT}/Overlay`;
SearchWrapper.displayName = `${ROOT}/SearchWrapper`;
SearchContent.displayName = `${ROOT}/SearchContent`;
ContainerLeft.displayName = `${ROOT}/ContainerLeft`;
AccountWrapper.displayName = `${ROOT}/AccountWrapper`;
UserWrapper.displayName = `${ROOT}/UserWrapper`;
NavBarIcon.displayName = `${ROOT}/NavBarIcon`;
LinkAuth.displayName = `${ROOT}/LinkAuth`;
LabelOr.displayName = `${ROOT}/LabelOr`;
SellVehicleButtonWrapper.displayName = `${ROOT}/SellVehicleButtonWrapper`;
