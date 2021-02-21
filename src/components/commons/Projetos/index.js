import React from 'react';
import { Grid } from '../foundation/layout/Grid';
import Text from '../foundation/Text';
import Card from '../Card';
import { Wrapper } from '../foundation/layout/Wrapper';

export default function Projetos() {
  const projectList = [
    {
      id: 1,
      image: '/images/instalura.png',
      title: 'Instalura',
      text:
        'Projeto criado durante o bootcamp JAMStack da Alura. Desenvolvido com Javascript, React e NextJs.',
    },
    {
      id: 2,
      image: '/images/instalura.png',
      title: 'Instalura',
      text:
        'Projeto criado durante o bootcamp JAMStack da Alura. Desenvolvido com Javascript, React e NextJs.',
    },
    {
      id: 3,
      image: '/images/instalura.png',
      title: 'Instalura',
      text:
        'Projeto criado durante o bootcamp JAMStack da Alura. Desenvolvido com Javascript, React e NextJs.',
    },
    {
      id: 4,
      image: '/images/instalura.png',
      title: 'Instalura',
      text:
        'Projeto criado durante o bootcamp JAMStack da Alura. Desenvolvido com Javascript, React e NextJs.',
    },
  ];
  return (
    <Wrapper id="projetos">
      <Grid.Container>
        <Grid.Row>
          <Text tag="h2" variant="title" color="tertiary.main" fontSize="42px">
            Projetos
          </Text>
          <Card projects={projectList} />
        </Grid.Row>
      </Grid.Container>
    </Wrapper>
  );
}
