import React from 'react';
import Footer from '../src/components/commons/Footer';
import Header from '../src/components/commons/Header';
import Capa from '../src/components/commons/Capa';
import Projetos from '../src/components/commons/Projetos';
import Sobre from '../src/components/commons/Sobre';

export default function Home() {
  return (
    <>
      <Capa />
      <Header />
      <Sobre />
      <Projetos />
      <Footer />
    </>
  );
}
