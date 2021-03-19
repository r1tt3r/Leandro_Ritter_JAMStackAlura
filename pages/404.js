import React from 'react';
import styled from 'styled-components';
import { Lottie } from '@crello/react-lottie';
import { Wrapper } from '../src/components/commons/foundation/layout/Wrapper';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';
import NotFoundAnimation from '../src/components/animations/404.json';

const H1 = styled.h1`
  font-size: 30px;
  margin: 0;
`;

function Screen404() {
  return (
    <Wrapper
      colorWrapper="black"
      id="404"
      height="80vh"
      textAlign="center"
      display="flex"
      alignItems="center"
      flexDirection="column"
      justifyContent="center">
      <Lottie
        width="450px"
        height="250px"
        config={{
          loop: true,
          autoplay: true,
          animationData: NotFoundAnimation,
        }}
      />
      <H1>Página não encontrada</H1>
      <p>O pagina que você estava buscando não existe ou foi removida.</p>
    </Wrapper>
  );
}

export default websitePageHOC(Screen404);
