import React from 'react';
import {
  Styled,
  NavBarList,
  ItemNavBarLogo,
  LogoNavBarWrapper,
  NavBarIcon,
  ItemNavBar,
  CheckoutNavBar,
  DropdownNavBar,
  HeaderNavBar,
  HeaderNavBarName,
  HeaderNavBarBox,
  WrapperSubNavBar,
  LinkSubItem,
  AuthWrapper,
  LinkAuth,
  LabelOr,
  ItemNavBarButton,
  LinkItem,
  ContentTag,
  TagNew
} from './styled';

import { NavbarProps } from '../../types';
import { ArrowNavBar, CloseNavBar } from '../../icons';
import { replaceSpace } from '../../utils';

export const Navbar: React.FC<NavbarProps> = ({
  isShow,
  isAuth,
  siteUrl,
  menuItems,
  onSellVehicle,
  onSignUp,
  onSignIn,
  onLogOut,
  isHiddenButtonSellVehicle,
  logoVariant,
  setIsMenuOpen
}) => {
  return (
    <Styled isShow={isShow}>
      <NavBarList>
        <ItemNavBarLogo>
          <LogoNavBarWrapper>
            <a href={siteUrl}>
              <span>NEOAUTO</span>
            </a>
            <NavBarIcon onClick={() => {(setIsMenuOpen !== undefined) && setIsMenuOpen(false)}}>
              <CloseNavBar width={14} height={14}/>
            </NavBarIcon>
          </LogoNavBarWrapper>
        </ItemNavBarLogo>
        { isAuth
          ? <ItemNavBar>
              <CheckoutNavBar type="checkbox" id="checkNavBar"/>
              <DropdownNavBar>
                <HeaderNavBar htmlFor="checkNavBar">
                  <HeaderNavBarName>{ isAuth !== undefined && isAuth.user?.name}</HeaderNavBarName>
                  <ArrowNavBar width={12} height={8}/>
                </HeaderNavBar>
                <WrapperSubNavBar>
                  {isAuth.menu &&
                    isAuth.menu.map((item, index) => (
                      <LinkSubItem
                        key={index}
                        target={item.link !== undefined ? item.link?.target : '_parent'}
                        href={item?.link?.url}>
                          {item.name}
                      </LinkSubItem>
                    ))}
                  <LinkSubItem onClick={onLogOut}>Salir</LinkSubItem>
                </WrapperSubNavBar>
              </DropdownNavBar>
            </ItemNavBar>
          : <ItemNavBar>
              <AuthWrapper>
                <LinkAuth onClick={onSignUp}>Regístrate</LinkAuth>
                <LabelOr color="#000000">o</LabelOr>
                <LinkAuth onClick={onSignIn} color="#FA9300">Ingresa</LinkAuth>
              </AuthWrapper>
            </ItemNavBar>
        }
        {!isHiddenButtonSellVehicle &&
          <ItemNavBarButton>
            <button onClick={onSellVehicle}>
                Vende tu vehículo
            </button>
          </ItemNavBarButton>}

        {menuItems &&
          menuItems.map((item, index) => (
            <ItemNavBar key={index}>
              { item.subItems ?
                <>
                  <CheckoutNavBar
                    type="checkbox"
                    id={`checkNavBar${replaceSpace(item.name || '')}`}/>
                  <DropdownNavBar>
                    <HeaderNavBar
                      htmlFor={`checkNavBar${replaceSpace(item.name || '')}`}>
                      <HeaderNavBarBox>
                        {item.isNew ?
                          <ContentTag>
                            <TagNew>Nuevo</TagNew>
                            {item.content ? item.content : item.name}
                          </ContentTag> :
                          item.content ? item.content : item.name}
                      </HeaderNavBarBox>
                      <ArrowNavBar width={12} height={8}/>
                    </HeaderNavBar>
                    {item.subItems &&
                      <WrapperSubNavBar>
                          {item.subItems.map((subItem, indexSubItem) => (
                              <LinkSubItem
                                key={indexSubItem}
                                target={subItem.link !== undefined ? subItem.link?.target : '_parent'}
                                href={subItem.link !== undefined ? subItem.link?.url : undefined}>
                                  {subItem?.name}
                              </LinkSubItem>
                            ))
                          }
                      </WrapperSubNavBar>
                    }
                  </DropdownNavBar>
                </> :
                <LinkItem
                  target={item.link !== undefined ? item.link.target : '_parent'}
                  href={item.link !== undefined ? item.link?.url : undefined}>
                    {item.isNew ?
                      <ContentTag>
                        <TagNew>Nuevo</TagNew>
                        {item.content ? item.content : item.name}
                      </ContentTag>
                      : item.content ? item.content : item.name
                    }
                </LinkItem>
              }
            </ItemNavBar>
          ))
        }
      </NavBarList>
    </Styled>
  );
};

Navbar.displayName = 'Navbar';
