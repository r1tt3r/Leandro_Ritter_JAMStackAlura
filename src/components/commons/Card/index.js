import React from 'react';
import PropTypes from 'prop-types';
import { CardItem } from './style';
import { Box } from '../foundation/layout/Box';
import Text from '../foundation/Text';

export default function Card({ projects }) {
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
            <CardItem key={project.id}>
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
Card.defaultProps = {
  projects: [],
};

Card.propTypes = {
  projects: PropTypes.array,
};
