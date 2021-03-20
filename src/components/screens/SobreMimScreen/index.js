import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NextImage from 'next/image';
import { Wrapper } from '../../commons/foundation/layout/Wrapper';
import { Box } from '../../commons/foundation/layout/Box';
import { Grid } from '../../commons/foundation/layout/Grid';
import Text from '../../commons/foundation/Text';

const Icon = styled(NextImage)`
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
`;

const ProjectName = styled.li`
  list-style: none;
  font-weight: 600;
  margin-bottom: 5px;
  font-size: 18px;
`;
const ProjectUrl = styled.li`
  list-style: none;
  margin-bottom: 20px;
  a {
    color: #fff;
  }
`;

export default function SobreMimScreen({ gitHubData }) {
  return (
    <Wrapper
      colorWrapper="black"
      id="404"
      minHeight="900px"
      display="flex"
      alignItems="center"
      flexDirection="column"
      fullHeight="nao">
      <h1>Sobre Mim</h1>
      <Box opacity="0.5">
        <NextImage
          alt="Leandro Ritter"
          src="/images/avatar2.jpg"
          width="300px"
          height="399px"
        />
      </Box>

      <Grid.Container marginTop="20px">
        <Grid.Row textAlign="left">
          <Grid.Col value={{ xs: 12, md: 3 }} offset={{ xs: 0, md: 3 }}>
            Nulla velit ea eu anim magna ad sunt reprehenderit eiusmod anim.
            Deserunt ea ad excepteur irure esse pariatur ullamco ipsum minim
            ipsum commodo quis fugiat quis. Commodo adipisicing nisi culpa
            commodo ea sunt ullamco ad dolor sint excepteur. Magna deserunt anim
            aliqua pariatur nostrud fugiat reprehenderit dolor fugiat incididunt
            aliqua. Lorem anim eiusmod in adipisicing adipisicing laborum nulla.
          </Grid.Col>
          <Grid.Col value={{ xs: 12, md: 3 }}>
            Nulla velit ea eu anim magna ad sunt reprehenderit eiusmod anim.
            Deserunt ea ad excepteur irure esse pariatur ullamco ipsum minim
            ipsum commodo quis fugiat quis. Commodo adipisicing nisi culpa
            commodo ea sunt ullamco ad dolor sint excepteur. Magna deserunt anim
            aliqua pariatur nostrud fugiat reprehenderit dolor fugiat incididunt
            aliqua. Lorem anim eiusmod in adipisicing adipisicing laborum nulla.
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
      <Box
        margin="40px"
        display="flex"
        justifyContent="space-around"
        minWidth="360px">
        <Icon
          alt="JavaScript"
          src="/images/logo_js.png"
          width="80px"
          height="80px"
        />
        <Icon
          alt="React"
          src="/images/logo_react.png"
          width="80px"
          height="80px"
        />
        <Icon
          alt="Next"
          src="/images/logo_next.png"
          width="80px"
          height="80px"
        />
      </Box>
      <Box textAlign="initial">
        <Text tag="h2" textAlign="center" fontSize="30px">
          Meus Repositórios
        </Text>
        <ul>
          {gitHubData.map((project) => (
            <React.Fragment key={project.node_id}>
              <ProjectName key={project.id}>{project.name}</ProjectName>
              <ProjectUrl key={project.node_id}>
                <a href={project.html_url} target="_blank" rel="noreferrer">
                  {project.html_url}
                </a>
              </ProjectUrl>
            </React.Fragment>
          ))}
        </ul>
      </Box>
    </Wrapper>
  );
}

SobreMimScreen.propTypes = {
  gitHubData: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ).isRequired,
};
