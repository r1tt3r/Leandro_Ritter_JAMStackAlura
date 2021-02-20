import React from 'react';
import { Grid } from '../foundation/layout/Grid';
import Text from '../foundation/Text';
import Card from '../Card';
import { Wrapper } from '../foundation/layout/Wrapper';

export default function Projetos() {
  return (
    <Wrapper id="projetos">
      <Grid.Container>
        <Grid.Row>
          <Text tag="h2" variant="title" color="tertiary.main" fontSize="42px">
            Projetos
          </Text>
          <Card />
        </Grid.Row>
      </Grid.Container>
    </Wrapper>
  );
}
