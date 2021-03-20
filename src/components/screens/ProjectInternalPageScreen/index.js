import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { Grid } from '../../commons/foundation/layout/Grid';
import { Wrapper } from '../../commons/foundation/layout/Wrapper';
import Text from '../../commons/foundation/Text';
import { Box } from '../../commons/foundation/layout/Box';

export default function ProjectInternalPageScreen({
  title,
  image,
  text,
  link,
}) {
  return (
    <Wrapper
      colorWrapper="black"
      //   minHeight="700px"
      display="flex"
      alignItems="center"
      flexDirection="column"
      height="80vh">
      <Grid.Container>
        <Grid.Row>
          <Text tag="h1" fontSize="42px" textAlign="center" width="100%">
            {title}
          </Text>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col value={{ md: 4, xs: 12 }}>
            <Image src={image} width="335" height="235" />
          </Grid.Col>
          <Grid.Col value={{ md: 8, xs: 12 }}>
            <Box>{text}</Box>
            <Box>
              <Text tag="p" fontWeight="600">
                Visite o Site
              </Text>
              <Text tag="p">
                <a href={link} target="_blank" rel="noreferrer">
                  {link}
                </a>
              </Text>
            </Box>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </Wrapper>
  );
}

ProjectInternalPageScreen.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
