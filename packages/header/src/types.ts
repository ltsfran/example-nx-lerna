import React, { HTMLAttributeAnchorTarget } from "react";

export interface SocialMediaUrlProps {
  id?: 'linkedin' | 'tiktok' | 'youtube' | 'instagram' | 'twitter' | 'facebook';
  url?: string;
  isHidden?: boolean;
}

export interface ServicesUrlProps {
  label?: string;
  url?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
}

export interface HelpUrlProps {
  label?: string;
  url?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
}

export interface MenuProps {
  menuItems: MenuItemsProps[];
  responsiveBreakPoint?: number;
}

export interface UserProps {
  name?: string;
}

export interface UserMenuProps {
  name?: string;
  link?: LinkProps;
}

export interface LinkProps {
  url?: string;
  target?: HTMLAttributeAnchorTarget;
}

export interface AuthProps {
  user?: UserProps;
  menu?: UserMenuProps[];
}

export interface CategoryProps {
  name?: string;
  urlImage?: string;
  link?: LinkProps;
}

export interface CertificateProps {
  name?: string;
  urlImage?: string;
  link?: LinkProps;
}

export interface SubMenuProps {
  name?: string;
  link?: LinkProps;
  categories?: CategoryProps[];
  certificates?: CertificateProps[];
}

export interface MenuItemsProps {
  name?: string;
  content?: any;
  isNew?: boolean;
  link?: LinkProps;
  subItems?: SubMenuProps[];
}

export interface NavbarProps {
  isShow?: boolean;
  isAuth?: AuthProps;
  siteUrl?: string;
  menuItems: MenuItemsProps[];
  onSellVehicle?: () => void;
  onSignUp?: () => void;
  onSignIn?: () => void;
  onLogOut?: () => void;
  isHiddenButtonSellVehicle?: boolean;
  setIsMenuOpen?: (isMenuOpen: boolean) => void;
  logoVariant?: 'primary' | 'secondary' | 'alternate' | 'gray' | 'national-day' | 'christmas' | 'covid';
}

export interface HeaderProps {
  siteUrl?: string;
  responsiveBreakPoint?: number;
  onSellVehicle?: () => void;
  onLogOut?: () => void;
  onSignUp?: () => void;
  onSignIn?: () => void;
  onUserProfile?: () => void;
  isAuth?: AuthProps;
  menuItemsDesktop?: MenuItemsProps[];
  menuItemsMobile?: MenuItemsProps[];
  renderSearch?: React.ReactNode;
  isHiddenMenuDesktop?: boolean;
  isHiddenButtonSellVehicle?: boolean;
  logoVariantDesktop?: 'primary' | 'secondary' | 'alternate' | 'gray' | 'national-day' | 'christmas' | 'covid';
  logoVariantResponsive?: 'primary' | 'secondary' | 'alternate' | 'gray' | 'national-day' | 'christmas' | 'covid';
}
