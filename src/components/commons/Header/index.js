import React from 'react';
import { Link } from 'react-scroll';
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
      link: 'contato',
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
            justifyContent="center"
          >
            <Text tag="h1" fontSize="25px" margin="25px 0 0 0" variant="title">
              {'<LEANDRO.RITTER />'}
            </Text>
          </Grid.Col>
          <Grid.Col
            value={{ xs: 12, md: 8 }}
            display="flex"
            flexDirection="column"
            alignItems="flex-end"
            justifyContent="center"
          >
            <HeaderWrapper.Links>
              <HeaderWrapper.Ul>
                {links.map((result) => (
                  <HeaderWrapper.Li key={result.link}>
                    <Link
                      spy
                      smooth
                      duration={500}
                      variant="smallestException"
                      tag="a"
                      to={result.link}
                    >
                      {result.display}
                    </Link>
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
