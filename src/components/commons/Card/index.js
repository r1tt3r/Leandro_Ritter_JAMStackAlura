/* eslint-disable react/forbid-prop-types */
import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { CardItem } from './style';
import Text from '../foundation/Text';
import { Grid } from '../foundation/layout/Grid';

export default function Card({ project }) {
  return (
    <>
      <Grid.Col value={{ md: 4, xs: 12 }}>
        <CardItem>
          <CardItem.Image>
            <Image
              alt={project.projectImage.alt}
              src={project.projectImage.url}
              width="348px"
              height="245px"
            />
          </CardItem.Image>
          <CardItem.Content>
            <Text variant="title" tag="h3">
              {project.projectTitle}
            </Text>
            <CardItem.Description>
              {project.projectDescription}
            </CardItem.Description>
          </CardItem.Content>
        </CardItem>
      </Grid.Col>
    </>
  );
}

Card.propTypes = {
  project: PropTypes.object.isRequired,
};
