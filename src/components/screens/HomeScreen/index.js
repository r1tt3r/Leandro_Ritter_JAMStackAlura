import React from 'react';
import Card from '../../commons/Card';
import { Box } from '../../commons/foundation/layout/Box';
import { Grid } from '../../commons/foundation/layout/Grid';
import { Wrapper } from '../../commons/foundation/layout/Wrapper';
import Text from '../../commons/foundation/Text';
import Link from '../../commons/Link';
import db from '../../../../db.json';
import { Button } from '../../commons/Button';
import Capa from '../../commons/Capa';

export default function HomeScreen() {
  const projectList = db.projects;

  return (
    <>
      <Capa colorWrapper="black" />
      <Wrapper colorWrapper="white" id="sobre">
        <Grid.Container>
          <Grid.Row textAlign="center">
            <Text
              tag="h2"
              variant="title"
              color="tertiary.main"
              fontSize="42px"
              width="100%">
              Sobre mim
            </Text>
          </Grid.Row>
          <Grid.Row>
            <Grid.Col value={{ xs: 12, md: 6 }}>
              {/* <Image
              alt="Leandro Ritter"
              src="/images/avatar2.jpg"
              width="400px"
              height="532px"
            /> */}
            </Grid.Col>
            <Grid.Col value={{ xs: 12, md: 6 }}>
              <Text variant="paragraph1" tag="p" color="tertiary.light">
                Meu nome é Leandro, tenho 32 anos e sou de Belo Horizonte. Sou
                formado em Sistemas de Informação pela UNA, trabalho com
                desenvolvimento desde 2014. Atualmente trabalho na VTIC com
                desenvolvimento de e-commerce na plataforma Magento, venho
                trabalhando nessa área desde 2016 e atualmente desejo aprofundar
                os conhecimentos em JavaScript e suas bibliotecas para me
                dedicar ao front-end.
              </Text>

              <Box margin="40px 0">
                <Button href="/sobremim" variant="secondary.main" ghost>
                  Conhecer mais
                </Button>
              </Box>
            </Grid.Col>
          </Grid.Row>
        </Grid.Container>
      </Wrapper>
      <Wrapper id="projetos" colorWrapper="black">
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
    </>
  );
}
