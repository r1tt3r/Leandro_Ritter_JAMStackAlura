import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '../foundation/layout/Grid';
import Text from '../foundation/Text';
import Card from '../Card';
import { Wrapper } from '../foundation/layout/Wrapper';
import db from '../../../../db.json';
import Link from '../Link';

export default function Projetos({ colorWrapper }) {
  const projectList = db.projects;

  return (
    <Wrapper id="projetos" colorWrapper={colorWrapper}>
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
          <Grid.Row>
            {projectList.map((project) => (
              <React.Fragment key={project.slug}>
                <Link href={`/project/${project.slug}`} display="contents">
                  <Card project={project} />
                </Link>
              </React.Fragment>
            ))}
          </Grid.Row>
        </Grid.Row>
      </Grid.Container>
    </Wrapper>
  );
}

Projetos.propTypes = {
  colorWrapper: PropTypes.string.isRequired,
};
