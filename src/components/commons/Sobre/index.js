import React from 'react';
import { Grid } from '../foundation/layout/Grid';
import Text from '../foundation/Text';
import { Wrapper } from '../foundation/layout/Wrapper';

export default function Sobre() {
  return (
    <Wrapper id="sobre">
      <Grid.Container>
        <Grid.Row>
          <Text tag="h2" variant="title" color="tertiary.main" fontSize="42px">
            Sobre mim
          </Text>
          <Text variant="paragraph1" tag="p" color="tertiary.light">
            Meu nome é Leandro, tenho 32 anos e sou de Belo Horizonte. Sou
            formado em Sistemas de Informação pela UNA, trabalho com
            desenvolvimento desde 2014. Atualmente trabalho na VTIC com
            desenvolvimento de e-commerce na plataforma Magento, venho
            trabalhando nessa área desde 2016 e atualmente desejo aprofundar os
            conhecimentos em JavaScript e suas bibliotecas para me dedicar ao
            front-end.
          </Text>
        </Grid.Row>
      </Grid.Container>
    </Wrapper>
  );
}
