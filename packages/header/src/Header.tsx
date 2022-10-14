import React, { useEffect, useState } from 'react';
import {
  AccountWrapper,
  CheckoutProfile,
  ContainerLeft,
  ContainerRight,
  ContentAuth,
  LabelOr,
  LinkAuth,
  ListItem,
  LogoHref,
  LogoWrapper,
  NavBarIcon,
  Overlay,
  ProfileDropdown,
  ProfileName,
  ProfileWrapper,
  SearchContent,
  SearchWrapper,
  SellVehicleButtonWrapper,
  Styled,
  TopWrapper,
  UserWrapper,
  WrapperLists,
  WrapperName
} from './styled';
import { HeaderProps, MenuItemsProps } from './types';
import { ArrowProfile, TagSantander, NavBar, TagKia, User } from './icons';
import { useResize } from './hooks/useResize';
import { Menu } from './components';
import { Navbar } from './components';

export const Header: React.FC<HeaderProps> = ({
  siteUrl,
  responsiveBreakPoint,
  onSellVehicle,
  onLogOut,
  onSignUp,
  onSignIn,
  onUserProfile,
  isAuth,
  menuItemsDesktop,
  menuItemsMobile,
  renderSearch,
  isHiddenMenuDesktop,
  isHiddenButtonSellVehicle,
  logoVariantDesktop,
  logoVariantResponsive
}) => {
  const DEFAULT_RESPONSIVE_BREAK_POINT = 768;
  const initialResponsiveBreakPoint = responsiveBreakPoint || DEFAULT_RESPONSIVE_BREAK_POINT;

  const isResponsive = useResize(DEFAULT_RESPONSIVE_BREAK_POINT);

  const DEFAULT_SITE_URL = 'http://www.neoauto.com';
  const initialSiteUrl = siteUrl || DEFAULT_SITE_URL;

  const menuItemsDesktopDefault: MenuItemsProps[] = [
    {
      name: 'Usados',
      link: {
        url: initialSiteUrl + '/venta-de-autos-usados'
      },
      subItems: [
        {
          name: 'Autos',
          link: {
            url: initialSiteUrl + '/autos/usados'
          }
        },
        {
          name: 'Motos',
          link: {
            url: initialSiteUrl + '/venta-de-motos-usados'
          }
        },
        {
          name: 'Buses y camiones',
          link: {
            url: initialSiteUrl + '/venta-de-buses-y-camiones-usados'
          }
        }
      ]
    },
    {
      name: 'Nuevos',
      link: {
        url: initialSiteUrl + '/venta-de-autos-nuevos'
      },
      subItems: [
        {
          name: 'Autos',
          link: {
            url: initialSiteUrl + '/venta-de-autos-nuevos-concesionario'
          }
        },
        {
          name: 'Catálogo 0KM',
          link: {
            url: initialSiteUrl + '/0km'
          },
        },
        {
          name: 'Motos',
          link: {
            url: initialSiteUrl + '/venta-de-motos-nuevos'
          },
        },
        {
          name: 'Buses y camiones',
          link: {
            url: initialSiteUrl + '/venta-de-buses-y-camiones-nuevos'
          },
        }
      ]
    },
    {
      name: 'Prestamo santander',
      content: <TagSantander />,
      link: {
        url: initialSiteUrl + '/credito-santander'
      },
    },
    {
      name: 'Seminuevo KIA',
      content: <TagKia />,
      link: {
        url: initialSiteUrl + '/seminuevos/kia'
      },
    },
    {
      name: 'Noticias',
      link: {
        url: initialSiteUrl + '/noticias',
        target: '_blank'
      },
    }
  ];

  const menuItemsMobileDefault: MenuItemsProps[] = [
    {
      name: 'Usados',
      link: {
        url: initialSiteUrl + '/venta-de-autos-usados',
      }
    },
    {
      name: 'Nuevos',
      subItems: [
        {
          name: 'Autos nuevos',
          link: {
            url: initialSiteUrl + '/venta-de-autos-nuevos',
          },
        },
        {
          name: 'Catalogo 0KM',
          link: {
            url: initialSiteUrl +'/0km',
          },
        }
      ]
    },
    {
      name: 'Motos',
      link: {
        url: initialSiteUrl + '/venta-de-motos',
      }
    },
    {
      name: 'Buses y camiones',
      link: {
        url: initialSiteUrl + '/venta-de-buses-y-camiones',
        target: '_blank'
      }
    },
    {
      name: 'Préstamo Santander',
      content: <TagSantander />,
      link: {
        url: '/',
        target: '_blank'
      }
    },
    {
      name: 'Servicios',
      subItems: [
        {
          name: 'Transferencia vehicular',
          link: {
            url: 'https://neoauto.com/promocion/transfiere-tu-auto?utm_source=ti&utm_medium=home&utm_campaign=transferencia_ibr&utm_term=boton',
          },
        },
      ]
    },
    {
      name: 'Noticias',
      link: {
        url: 'https://neoauto.com/noticias/',
        target: '_blank'
      }
    },
  ];

  const initialMenuItemsDesktop = menuItemsDesktop || menuItemsDesktopDefault;
  const initialMenuItemsMobile = menuItemsMobile || menuItemsMobileDefault;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    !isResponsive && setIsMenuOpen(false);
  }, [isResponsive]);

  return (
      <Styled>
        <TopWrapper responsiveBreakPoint={initialResponsiveBreakPoint}>
          <ContainerLeft responsiveBreakPoint={initialResponsiveBreakPoint}>
            <AccountWrapper
              responsiveBreakPoint={initialResponsiveBreakPoint}>
              <LogoWrapper
                responsiveBreakPoint={initialResponsiveBreakPoint}>
                <NavBarIcon
                  onClick={() => setIsMenuOpen(true)}
                  responsiveBreakPoint={initialResponsiveBreakPoint}>
                  <NavBar width={24} height={24} />
                </NavBarIcon>
                <LogoHref
                  responsiveBreakPoint={initialResponsiveBreakPoint}
                  href={initialSiteUrl}
                  title="Neoauto.com">
                    <span>NEOAUTO</span>
                </LogoHref>
              </LogoWrapper>
              <UserWrapper
                responsiveBreakPoint={initialResponsiveBreakPoint}
                onClick={onUserProfile}>
                <User width={24} height={24} />
              </UserWrapper>
            </AccountWrapper>
            { renderSearch &&
              <SearchContent responsiveBreakPoint={initialResponsiveBreakPoint}>
                <SearchWrapper responsiveBreakPoint={initialResponsiveBreakPoint}>
                  {renderSearch}
                </SearchWrapper>
              </SearchContent> }
          </ContainerLeft>
          <ContainerRight responsiveBreakPoint={initialResponsiveBreakPoint}>
            { isAuth
              ? <ProfileWrapper>
                  <CheckoutProfile type="checkbox" id="checkProfile"/>
                  <ProfileDropdown>
                    <WrapperName htmlFor="checkProfile">
                      <ProfileName>
                        {isAuth.user && isAuth.user.name}
                      </ProfileName>
                      <ArrowProfile width={24} height={24}/>
                    </WrapperName>
                    <WrapperLists>
                      {isAuth.menu &&
                        isAuth.menu.map((item, index) => (
                          <ListItem
                            key={index}
                            target={item.link?.target ? item.link.target : '_parent'}
                            href={item.link?.url}>
                              {item.name}
                          </ListItem>
                        ))}
                      <ListItem onClick={onLogOut}>Salir</ListItem>
                    </WrapperLists>
                  </ProfileDropdown>
              </ProfileWrapper>
              : <ContentAuth isHiddenButtonSellVehicle={isHiddenButtonSellVehicle}>
                  <LinkAuth onClick={onSignUp} color="#FFFFFF">Regístrate</LinkAuth>
                  <LabelOr>o</LabelOr>
                  <LinkAuth onClick={onSignIn} color="#FA9300">Ingresa</LinkAuth>
                </ContentAuth>
            }
            {!isHiddenButtonSellVehicle &&
              <SellVehicleButtonWrapper>
                <button onClick={onSellVehicle}>Vende tu vehículo</button>
              </SellVehicleButtonWrapper>}
          </ContainerRight>
        </TopWrapper>
        <Navbar
          isShow={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          onSellVehicle={onSellVehicle}
          onSignIn={onSignIn}
          onSignUp={onSignUp}
          onLogOut={onLogOut}
          siteUrl={initialSiteUrl}
          logoVariant={logoVariantResponsive}
          menuItems={initialMenuItemsMobile}
          isHiddenButtonSellVehicle={isHiddenButtonSellVehicle}
          isAuth={isAuth} />
        {!isHiddenMenuDesktop &&
          <Menu
            responsiveBreakPoint={initialResponsiveBreakPoint}
            menuItems={initialMenuItemsDesktop} />}
        { isMenuOpen && <Overlay onClick={() => setIsMenuOpen(false)} /> }
      </Styled>
  )};

Header.defaultProps = {
  siteUrl: 'http://www.neoauto.com',
  responsiveBreakPoint: 768,
  isHiddenMenuDesktop: false,
  isHiddenButtonSellVehicle: false,
  logoVariantDesktop: 'primary',
  logoVariantResponsive: 'secondary'
};

Header.displayName = 'Header';
