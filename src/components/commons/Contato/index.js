import React, { useState } from 'react';
import FormContato from '../../patterns/FormContato';
import { Grid } from '../foundation/layout/Grid';
import { Wrapper } from '../foundation/layout/Wrapper';
import Text from '../foundation/Text';
import Modal from '../Modal';

export default function Contato() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  return (
    <Wrapper id="contato">
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {(modalProps) => <FormContato modalProps={modalProps} />}
      </Modal>
      <Grid.Container>
        <Grid.Row>
          <Text tag="h2" variant="title" color="tertiary.main" fontSize="42px">
            Contato
          </Text>
        </Grid.Row>
        <Grid.Row>
          <svg
            onClick={() => setIsModalOpen(true)}
            width="50"
            height="50"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M1344 960v-128q0-26-19-45t-45-19h-256v-256q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v256h-256q-26 0-45 19t-19 45v128q0 26 19 45t45 19h256v256q0 26 19 45t45 19h128q26 0 45-19t19-45v-256h256q26 0 45-19t19-45zm320-64q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
          </svg>
        </Grid.Row>
      </Grid.Container>
    </Wrapper>
  );
}
