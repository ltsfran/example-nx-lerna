import React from 'react';
import {
  Styled,
  Content,
  Center,
  LeftColumn,
  ListSubItem,
  SubItem,
  Column,
  ClaimsBookContent,
  ClaimsBookImage,
  SocialContent,
  TextSocial,
  SocialList,
  Row
} from './styled';
import { Item } from './components/Item';
import { FacebookCircle, InstagramCircle, LinkedinCircle, TiktokCircle, TwitterCircle, YoutubeCircle } from './icons';
import { FooterProps, HelpUrlProps, ServicesUrlProps, SocialMediaUrlProps } from './types';
import { capitalizeFirstLetter } from './utils';

export const Footer: React.FC<FooterProps> = ({
  siteUrl,
  socialMediaUrl,
  servicesUrl,
  helpUrl,
  claimsBookUrl,
  responsiveBreakPoint
}) => {
  const DEFAULT_RESPONSIVE_BREAK_POINT = 768;
  const initialResponsiveBreakPoint = responsiveBreakPoint || DEFAULT_RESPONSIVE_BREAK_POINT;
  const DEFAULT_SITE_URL = 'http://www.neoauto.com';
  const initialSiteUrl = siteUrl || DEFAULT_SITE_URL;
  const defaultSocialMediaUrl: SocialMediaUrlProps[] = [
    {
      id:  'linkedin',
      url: 'https://www.linkedin.com/company/neoautocom/posts/?feedView=all',
      isHidden: false
    },
    {
      id: 'tiktok',
      url: 'https://www.tiktok.com/@neoautoperu',
      isHidden: false
    },
    {
      id: 'youtube',
      url: 'https://www.youtube.com/c/Neoautocom',
      isHidden: false
    },
    {
      id: 'instagram',
      url: 'https://www.instagram.com/neoautoperu',
      isHidden: false
    },
    {
      id: 'twitter',
      url: 'https://twitter.com/NeoAutocom',
      isHidden: false
    },
    {
      id: 'facebook',
      url: 'https://www.facebook.com/NeoAutocom',
      isHidden: false
    }
  ];

  const iconSocialMedia = {
    'linkedin' : <LinkedinCircle />,
    'tiktok' : <TiktokCircle />,
    'youtube' : <YoutubeCircle />,
    'instagram' : <InstagramCircle />,
    'twitter' : <TwitterCircle />,
    'facebook' : <FacebookCircle />
  };

  const DEFAULT_SERVICES_URL: ServicesUrlProps[] = [
    {
      label: 'Transferencia vehicular',
      url: initialSiteUrl + '/promocion/transfiere-tu-auto',
      target: '_self'
    }
  ];

  const DEFAULT_HELP_URL: HelpUrlProps[] = [
    {
      label: 'Mapa de sitio',
      url: initialSiteUrl + '/mapa-de-sitio',
      target: '_self'
    },
    {
      label: 'Términos y condiciones',
      url: 'https://centraldeayuda.neoauto.com/hc/es/articles/214974063--Condiciones-Generales-de-Uso',
      target: '_blank'
    },
    {
      label: 'Políticas de publicación',
      url: 'https://centraldeayuda.neoauto.com/hc/es/articles/214974103-Pol%C3%ADticas-de-Publicaci%C3%B3n',
      target: '_blank'
    },
    {
      label: 'Políticas de privacidad',
      url: 'https://centraldeayuda.neoauto.com/hc/es/articles/214974083-POL%C3%8DTICA-DE-PRIVACIDAD-DE-NEOAUTO',
      target: '_blank'
    },
    {
      label: 'Política de cookies',
      url: 'https://centraldeayuda.neoauto.com/hc/es/articles/360016235292-Pol%C3%ADtica-de-Cookies',
      target: '_blank'
    },
    {
      label: 'Terminos de uso',
      url: 'https://centraldeayuda.neoauto.com/hc/es/articles/214974063--Condiciones-Generales-de-Uso',
      target: '_blank'
    }
  ];

  const DEFAULT_CLAIMS_BOOK_URL = 'http://ecomedia.pe/libro/inicio/neoauto/';
  const initialClaimsBookUrl = claimsBookUrl || DEFAULT_CLAIMS_BOOK_URL;
  const initialServicesUrl = servicesUrl || DEFAULT_SERVICES_URL;
  const initialHelpUrl = helpUrl || DEFAULT_HELP_URL;
  return (
    <Styled>
      <Content>
        <Center responsiveBreakPoint={initialResponsiveBreakPoint}>
          <Row responsiveBreakPoint={initialResponsiveBreakPoint}>
            <LeftColumn responsiveBreakPoint={initialResponsiveBreakPoint}>
                <Item
                  textHeader='Usados'
                  responsiveBreakPoint={initialResponsiveBreakPoint}>
                  <ListSubItem responsiveBreakPoint={initialResponsiveBreakPoint}>
                    <SubItem>
                      <a href={initialSiteUrl + '/autos/usados'}>Autos</a>
                    </SubItem>
                    <SubItem>
                      <a href={initialSiteUrl + '/venta-de-motos-usados'}>Motos</a>
                    </SubItem>
                    <SubItem>
                      <a href={initialSiteUrl + '/venta-de-buses-y-camiones-usados'}>Buses y camiones</a>
                    </SubItem>
                  </ListSubItem>
                </Item>
                <Item
                  textHeader='Nuevos'
                  responsiveBreakPoint={initialResponsiveBreakPoint}>
                  <ListSubItem responsiveBreakPoint={initialResponsiveBreakPoint}>
                    <SubItem>
                      <a href={initialSiteUrl + '/venta-de-autos-nuevos'}>Autos</a>
                    </SubItem>
                    <SubItem>
                      <a href={initialSiteUrl + '/venta-de-motos-nuevos'}>Motos</a>
                    </SubItem>
                    <SubItem>
                      <a href={initialSiteUrl + '/venta-de-buses-y-camiones-nuevos'}>Buses y camiones</a>
                    </SubItem>
                  </ListSubItem>
                </Item>
                { initialServicesUrl.length > 0 &&
                  <Item
                    textHeader='Servicios'
                    responsiveBreakPoint={initialResponsiveBreakPoint}>
                    <ListSubItem responsiveBreakPoint={initialResponsiveBreakPoint}>
                      { initialServicesUrl.map((item, index) => (
                        <SubItem key={index}>
                          <a target={item.target || '_blank'} href={item.url}>{ item.label }</a>
                        </SubItem>
                      )) }
                    </ListSubItem>
                  </Item> }
            </LeftColumn>
            <Column>
              <Item
                textHeader='Ayuda'
                responsiveBreakPoint={initialResponsiveBreakPoint}>
                <ListSubItem responsiveBreakPoint={initialResponsiveBreakPoint}>
                  { initialHelpUrl.map((item, index) => (
                    <SubItem key={index}>
                      <a target={item.target || '_blank'} href={item.url}>{item.label}</a>
                    </SubItem>
                  )) }
                </ListSubItem>
                <ClaimsBookContent responsiveBreakPoint={initialResponsiveBreakPoint}>
                  <a target="_blank" href={initialClaimsBookUrl}>
                    <ClaimsBookImage />
                  </a>
                </ClaimsBookContent>
              </Item>
            </Column>
            <Column>
              <Item
                textHeader='Sobre Neoauto'
                responsiveBreakPoint={initialResponsiveBreakPoint}>
                <ListSubItem responsiveBreakPoint={initialResponsiveBreakPoint}>
                  <SubItem>
                    <a
                      target="_blank"
                      href={initialSiteUrl + '/noticias'}>
                        Noticias
                    </a>
                  </SubItem>
                  <SubItem>
                    <a
                      target="_blank"
                      href="https://centraldeayuda.neoauto.com/hc/es">
                        Preguntas frecuentes
                    </a>
                  </SubItem>
                  <SubItem>
                    <a
                      target="_blank"
                      href="https://centraldeayuda.neoauto.com/hc/es/requests/new">
                        Ayuda en línea
                    </a>
                  </SubItem>
                </ListSubItem>
              </Item>
              <SocialContent responsiveBreakPoint={initialResponsiveBreakPoint}>
                <TextSocial>Síguenos</TextSocial>
                <SocialList responsiveBreakPoint={initialResponsiveBreakPoint}>
                    { defaultSocialMediaUrl.map((item, index) => {
                      const findSocial = socialMediaUrl ? socialMediaUrl.find( e => e.id == item.id ) : [];
                      const itemSocial = findSocial == undefined ? item : {...item, ...findSocial };
                      return ( !itemSocial.isHidden && <a
                        key={index}
                        href={itemSocial.url}
                        target="_blank"
                        title={capitalizeFirstLetter(itemSocial.id)}>
                        { iconSocialMedia[item.id] }
                      </a>);
                    }) }
                </SocialList>
              </SocialContent>
            </Column>
          </Row>
        </Center>
      </Content>
    </Styled>
  )};

Footer.defaultProps = {
  siteUrl: 'http://www.neoauto.com',
  responsiveBreakPoint: 768
};

Footer.displayName = 'Footer';
