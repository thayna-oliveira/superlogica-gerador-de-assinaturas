import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Gerador from './components/gerador';

function App() {
  return (
    <div>

      <Navbar logo={logo} alt="Logo Superlogica" />

      <Gerador />

      <Footer year="2019" text="Superlógica Tecnologias" />

    </div>
  );
}

export default App;
