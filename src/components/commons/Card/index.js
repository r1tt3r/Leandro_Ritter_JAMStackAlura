import React from 'react';
import { CardItem } from './style';
import { Box } from '../foundation/layout/Box';
import Text from '../foundation/Text';

export default function Card() {
  const projects = [
    {
      image: 'images/instalura.png',
      title: 'Instalura',
      text:
        'Projeto criado durante o bootcamp JAMStack da Alura. Desenvolvido com Javascript, React e NextJs.',
    },
    {
      image: 'images/instalura.png',
      title: 'Instalura',
      text:
        'Projeto criado durante o bootcamp JAMStack da Alura. Desenvolvido com Javascript, React e NextJs.',
    },
    {
      image: 'images/instalura.png',
      title: 'Instalura',
      text:
        'Projeto criado durante o bootcamp JAMStack da Alura. Desenvolvido com Javascript, React e NextJs.',
    },
    {
      image: 'images/instalura.png',
      title: 'Instalura',
      text:
        'Projeto criado durante o bootcamp JAMStack da Alura. Desenvolvido com Javascript, React e NextJs.',
    },
  ];
  return (
    <>
      <Box
        display="flex"
        flexWrap="wrap"
        alignItems="stretch"
        justifyContent="flex-start"
      >
        {projects.map((project) => {
          return (
            <CardItem>
              <CardItem.Image>
                <img alt="Imagem do projeto" src={project.image} />
              </CardItem.Image>
              <CardItem.Content>
                <Text variant="title" tag="h3">
                  {project.title}
                </Text>
                <Text variant="paragraph1" tag="p" color="tertiary.light">
                  {project.text}
                </Text>
              </CardItem.Content>
            </CardItem>
          );
        })}
      </Box>
    </>
  );
}
