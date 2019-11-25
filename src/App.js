import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Signature from "./components/Signature";

function App() {
  return (
    <div>
      <Header />

      <Signature />

      <Footer year="2019" text="Superlógica Tecnologias" />
    </div>
  );
}

export default App;
