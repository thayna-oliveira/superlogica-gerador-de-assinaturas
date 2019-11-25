import React from "react";
import logo from "./logo.svg";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Gerador";

function App() {
  return (
    <div>
      <Header />

      <Main />

      <Footer year="2019" text="Superlógica Tecnologias" />
    </div>
  );
}

export default App;
