
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

export interface FooterProps {
  siteUrl?: string;
  socialMediaUrl?: SocialMediaUrlProps[];
  servicesUrl?: ServicesUrlProps[];
  helpUrl?: HelpUrlProps[];
  claimsBookUrl?: string;
  responsiveBreakPoint?: number;
}

export interface FooterTopProps {
  responsiveBreakPoint?: number;
}

export interface FooterBottomProps {
  siteUrl?: string;
  responsiveBreakPoint?: number;
}

