import React from 'react';
import FormContato from '../../patterns/FormContato';
import { ContactButton } from './styles';
import { Box } from '../foundation/layout/Box';
import { Grid } from '../foundation/layout/Grid';
import { Wrapper } from '../foundation/layout/Wrapper';
import Modal from '../Modal';

export default function Contato() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  return (
    <Wrapper id="contato" minHeight="initial" noFooter>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {(modalProps) => <FormContato modalProps={modalProps} />}
      </Modal>
      <Grid.Container>
        <Grid.Row>
          <Box display="flex" margin="auto">
            <ContactButton onClick={() => setIsModalOpen(!isModalOpen)}>
              Entrar em contato
            </ContactButton>
          </Box>
        </Grid.Row>
      </Grid.Container>
    </Wrapper>
  );
}
