import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import Link from '../Link';
import { WebsitePageContext } from '../../wrappers/WebsitePage';
import { CardItem } from './style';
import { Box } from '../foundation/layout/Box';
import Text from '../foundation/Text';

export default function Card({ projects }) {
  const websitePageContext = React.useContext(WebsitePageContext);

  return (
    <>
      <Box
        display="flex"
        flexWrap="wrap"
        alignItems="stretch"
        justifyContent="flex-start">
        {projects.map((project) => (
          <CardItem key={project.id}>
            <CardItem.Image>
              <Image
                alt={project.title}
                src={project.image}
                width="348px"
                height="245px"
              />
            </CardItem.Image>
            <CardItem.Content
              onClick={() => {
                websitePageContext.setCurrentCardData('setado na home no card');
                // eslint-disable-next-line no-console
                console.log(websitePageContext.getCurrentCardData());
              }}>
              <Text variant="title" tag="h3">
                <Link href="/projeto">{project.title}</Link>
              </Text>
              <Text variant="paragraph1" tag="p" color="tertiary.light">
                {project.text}
              </Text>
            </CardItem.Content>
          </CardItem>
        ))}
      </Box>
    </>
  );
}
Card.defaultProps = {
  projects: [],
};

Card.propTypes = {
  projects: PropTypes.objectOf(PropTypes.object),
};
