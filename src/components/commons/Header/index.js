import React from "react";
import { Grid } from "../foundation/layout/Grid";
import Text from "../foundation/Text";
import { HeaderWrapper } from "./styles";

export default function Header() {
  const links = [
    {
      display: "Sobre mim",
      link: "/sobre",
    },
    {
      display: "Projetos",
      link: "/projetos",
    },
    {
      display: "Contato",
      link: "/contato",
    },
  ];

  return (
    <HeaderWrapper>
      <Grid.Container>
        <Grid.Row>
          <Grid.Col
            // offset={{ xs: 0, md: 1 }}
            value={{ xs: 12, md: 4 }}
            display="flex"
            flexDirection="column"
            alignItems="start"
            justifyContent="center"
          >
            <Text tag="h1" fontSize="25px" variant="title">
              {"<LEANDRO.RITTER />"}
            </Text>
          </Grid.Col>
          <Grid.Col
            value={{ xs: 12, md: 8 }}
            display="flex"
            flexDirection="column"
            alignItems="flex-end"
            justifyContent="center"
          >
            <HeaderWrapper.Links>
              <HeaderWrapper.Ul>
                {links.map((result) => (
                  <HeaderWrapper.Li key={result.link}>
                    <Text
                      variant="smallestException"
                      tag="a"
                      href={result.link}
                    >
                      {result.display}
                    </Text>
                  </HeaderWrapper.Li>
                ))}
              </HeaderWrapper.Ul>
            </HeaderWrapper.Links>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </HeaderWrapper>
  );
}
