import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '../foundation/layout/Grid';
import Text from '../foundation/Text';
import Card from '../Card';
import { Wrapper } from '../foundation/layout/Wrapper';
import db from '../../../../db.json';

export default function Projetos({ colorWrapper }) {
  const projectList = db.projects;

  return (
    <Wrapper id="projetos" colorWrapper={colorWrapper} minHeight="1160px">
      <Grid.Container>
        <Grid.Row textAlign="center">
          <Text
            tag="h2"
            variant="title"
            color="tertiary.main"
            fontSize="42px"
            width="100%">
            Projetos
          </Text>
          <Card projects={projectList} />
        </Grid.Row>
      </Grid.Container>
    </Wrapper>
  );
}

Projetos.propTypes = {
  colorWrapper: PropTypes.string.isRequired,
};
