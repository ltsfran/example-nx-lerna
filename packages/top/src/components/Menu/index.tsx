import React, { useState } from 'react';
import {
  Styled,
  Container,
  TextItem,
  Item,
  ListMenu,
  SubItemContent,
  ListSubItem,
  SubItem,
  TextSubItem,
  TitleSubItem,
  SubItemWrapper,
  TypeCertificateWrapper,
  TypeCategoryContent,
  TitleContent,
  ListTypeCategory,
  ItemTypeCategory,
  TitleTypeCategory,
  FigureTypeCategory,
  CertificateContent,
  ListCertificate,
  ItemContent,
  ContentTag,
  TagNew
} from './styled';
import Image from '../Image';
import { MenuProps, SubMenuProps } from '../../types';
import {  ArrowSubMenu } from '../../icons';

export const Menu: React.FC<MenuProps> = ({
  menuItems,
  responsiveBreakPoint
}) => {
  const [isShow, setIsShow] = useState(false);
  const [idShowMenu, setIdShowMenu] = useState('');

  const handleHoverSubItem = (show: boolean, id: string) => {
    setIsShow(show);
    setIdShowMenu(id);
  };

  const showView = (subItem, indexItem, indexSubItem, subItems) => {
    let result = false;
    const isNotSelect = idShowMenu === '';
    const isOneIndexSubItem = indexSubItem === 0;

    if (isShow && idShowMenu === `subItem-${indexItem}-${indexSubItem}`) {
      if (subItem.categories || subItem.certificates) {
        result = true;
      }
    } else {
      if (isNotSelect && isOneIndexSubItem) {
        result = true;
      }

      if (findCategoriesAndCertificates(subItems)) {
        result = false;
      }
    }
    return result;
  };

  const findCategoriesAndCertificates = (subItems: SubMenuProps[]) => {
    let result = true;
    subItems.map(item => {
      if (item.categories || item.certificates) {
        result = false;
      }
    });
    return result;
  };

  return (
    <Styled responsiveBreakPoint={responsiveBreakPoint}>
      <Container>
        <ListMenu>
          {menuItems.map((item, index) => (
            <Item key={index}>
              {item.content ?
                <ItemContent>
                  {item.link ? (<a target={item.link.target ? item.link.target : '_parent'}
                    href={item.link.url}>
                      {item.content}
                  </a>)
                  : item.content}
                </ItemContent>
                : <TextItem>
                  {item.link ? (
                    <a target={item.link.target ? item.link.target : '_parent'}
                      href={item.link.url}>
                      <ContentTag>
                        { item.isNew && <TagNew>Nuevo</TagNew> }
                        {item.name}
                      </ContentTag>
                    </a>
                  ) : (
                    <ContentTag>
                      { item.isNew && <TagNew>Nuevo</TagNew> }
                      {item.name}
                    </ContentTag>) }
                </TextItem>
              }
              {item.subItems &&
                <SubItemWrapper>
                  <SubItemContent>
                    <ListSubItem
                      isMenuNormal={findCategoriesAndCertificates(item.subItems)}>
                      {item.subItems && item.subItems.map((subItem, indexSubItem) => (
                        <SubItem
                          onMouseEnter={() => handleHoverSubItem(true, `subItem-${index}-${indexSubItem}`)}
                          onMouseLeave={() => handleHoverSubItem(false, '')}
                          key={indexSubItem}>
                          <TitleSubItem active={showView(subItem, index, indexSubItem, item.subItems)}>
                            <TextSubItem>
                              {subItem.link ?
                              (<a target={subItem.link.target ? subItem.link.target : '_parent'}
                                href={subItem.link.url}>
                                  {subItem.name}
                              </a>) :
                              subItem.name }
                            </TextSubItem>
                            {(subItem.categories || subItem.certificates) &&
                              <ArrowSubMenu width={18} height={18} />}
                          </TitleSubItem>
                        </SubItem>
                      ))}
                    </ListSubItem>
                    {item.subItems && item.subItems.map((subItem, indexSubItem) => (
                      showView(subItem, index, indexSubItem, item.subItems) &&
                        <TypeCertificateWrapper
                          onMouseEnter={() => handleHoverSubItem(true, `subItem-${index}-${indexSubItem}`)}
                          onMouseLeave={() => handleHoverSubItem(false, '')}
                          key={indexSubItem}>
                          {subItem.categories &&
                            <TypeCategoryContent>
                              <TitleContent>Categoría</TitleContent>
                              <ListTypeCategory>
                                {subItem.categories && subItem.categories.map((category, indexCategory) => (
                                  <a
                                    target={category.link.target ? category.link.target : '_parent'}
                                    href={category.link && category.link.url}
                                    key={indexCategory}>
                                    <ItemTypeCategory>
                                      <FigureTypeCategory>
                                        <Image src={category.urlImage} fallback="https://cde.dev.neoauto.pe/marca/logo/svg/logo.svg" />
                                      </FigureTypeCategory>
                                      <TitleTypeCategory>{category.name}</TitleTypeCategory>
                                    </ItemTypeCategory>
                                  </a>
                                ))}
                              </ListTypeCategory>
                            </TypeCategoryContent>}
                          {subItem.certificates &&
                            <CertificateContent>
                              <TitleContent>Certificados</TitleContent>
                              <ListCertificate>
                                {subItem.certificates && subItem.certificates.map((certificate, indexCertificate) => (
                                  <a
                                    target={certificate.link.target ? certificate.link.target : '_parent'}
                                    href={certificate.link && certificate.link.url}
                                    key={indexCertificate}>
                                    <ItemTypeCategory>
                                      <FigureTypeCategory>
                                        <Image src={certificate.urlImage} fallback="https://cde.dev.neoauto.pe/marca/logo/svg/logo.svg" />
                                      </FigureTypeCategory>
                                      <TitleTypeCategory>{certificate.name}</TitleTypeCategory>
                                    </ItemTypeCategory>
                                  </a>
                                ))}
                              </ListCertificate>
                            </CertificateContent>}
                        </TypeCertificateWrapper>
                    ))}
                  </SubItemContent>
                </SubItemWrapper>}
            </Item>
          ))}
        </ListMenu>
      </Container>
    </Styled>
  );
};

Menu.displayName = 'Menu';
