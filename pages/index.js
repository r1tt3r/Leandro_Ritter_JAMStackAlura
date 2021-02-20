import React from "react";
import Footer from "../src/components/commons/Footer";
import Header from "../src/components/commons/Header";
import Capa from "../src/components/commons/Capa";
import Projetos from "../src/components/commons/Projetos";

export default function Home() {
  return (
    <>
      <Capa />
      {/* <main> */}
      <Header />
      <Projetos />
    </>
  );
}
