import React from 'react';
import { MenuWrapper } from './styles';
import Logo from '../../../theme/Logo';
import Text from '../foundation/Text';

export default function Menu() {
  const links = [
    {
      display: 'Home',
      link: '/',
    },
    {
      display: 'Perguntas frequentes',
      link: '/faq',
    },
    {
      display: 'Sobre',
      link: '/sobre',
    },
  ];

  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide as="ul">
        {links.map((result) => (
          <li key={result.link}>
            <Text variant="smallestException" tag="a" href={result.link}>
              {result.display}
            </Text>
          </li>
        ))}
      </MenuWrapper.CentralSide>
    </MenuWrapper>
  );
}
