import React from "react";
import { Grid } from "../foundation/layout/Grid";
import Text from "../foundation/Text";
import { WrapperProjetos } from "./styles";

export default function Projetos() {
  return (
    <WrapperProjetos>
      <Grid.Container>
        <Grid.Row>
          <Text tag="h2" variant="title" color="tertiary.main" fontSize="42px">
            Projetos
          </Text>
        </Grid.Row>
      </Grid.Container>
    </WrapperProjetos>
  );
}
