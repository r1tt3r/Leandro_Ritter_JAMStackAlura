import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Link from '../Link';
import { Grid } from '../foundation/layout/Grid';
import Text from '../foundation/Text';
import { HeaderWrapper } from './styles';

export default function Header() {
  const links = [
    {
      display: 'Sobre mim',
      link: 'sobre',
    },
    {
      display: 'Projetos',
      link: 'projetos',
    },
    {
      display: 'Contato',
      link: 'footer',
    },
  ];

  return (
    <HeaderWrapper id="header">
      <Grid.Container>
        <Grid.Row>
          <Grid.Col
            value={{ xs: 12, md: 4 }}
            display="flex"
            flexDirection="column"
            alignItems={{ xs: 'center', md: 'start' }}
            justifyContent="center">
            <Text tag="h1" fontSize="20px" variant="title">
              <Link href="/">{'<LEANDRO.RITTER />'}</Link>
            </Text>
          </Grid.Col>
          <Grid.Col
            value={{ xs: 12, md: 8 }}
            display="flex"
            flexDirection="column"
            alignItems="flex-end"
            justifyContent="center">
            <HeaderWrapper.Links>
              <HeaderWrapper.Ul>
                {links.map((result) => (
                  <HeaderWrapper.Li key={result.link}>
                    <ScrollLink
                      spy
                      smooth
                      duration={500}
                      variant="smallestException"
                      tag="a"
                      to={result.link}>
                      {result.display}
                    </ScrollLink>
                  </HeaderWrapper.Li>
                ))}
              </HeaderWrapper.Ul>
            </HeaderWrapper.Links>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </HeaderWrapper>
  );
}
