import React from 'react';
import Capa from '../src/components/commons/Capa';
import Projetos from '../src/components/commons/Projetos';
import Sobre from '../src/components/commons/Sobre';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

function HomeScreen() {
  return (
    <>
      <Capa colorWrapper="black" />
      <Sobre colorWrapper="white" />
      <Projetos colorWrapper="black" />
    </>
  );
}

export default websitePageHOC(HomeScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Home',
    },
  },
});
