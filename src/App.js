import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Signature from "./components/Signature";
import logo from "./assets/img/logo-simbolo.svg";

function App() {
  return (
    <div>
      <Header logo={logo}/>

      <Signature />

      <Footer year="2019" text="Superlógica Tecnologias" />
    </div>
  );
}

export default App;
