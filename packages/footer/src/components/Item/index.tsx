import React, { useEffect, useState } from 'react';
import { Arrow } from '../../icons';
import {
  Body,
  Header,
  IconArrow,
  Title,
  Wrapper
} from './styled';

interface ItemProps {
  textHeader?: string;
  responsiveBreakPoint?: number;
  children: any;
}

export const Item: React.FC<ItemProps> = ({
  children,
  textHeader,
  responsiveBreakPoint
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Wrapper responsiveBreakPoint={responsiveBreakPoint}>
        <Header
          responsiveBreakPoint={responsiveBreakPoint}
          onClick={handleClick}>
          <Title
            responsiveBreakPoint={responsiveBreakPoint}>
              {textHeader}
          </Title>
          <IconArrow
            responsiveBreakPoint={responsiveBreakPoint}
            isOpen={isOpen}>
            <Arrow />
          </IconArrow>
        </Header>
        <Body
          responsiveBreakPoint={responsiveBreakPoint}
          isOpen={isOpen}>
          {children}
        </Body>
    </Wrapper>
  )};

Item.displayName = 'Item';
