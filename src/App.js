import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import Gerador from './components/gerador';

function App() {
  return (
    <div>

      <Navbar logo={logo} alt="Logo Superlogica" />

      <div className="hero">
        <div className="container">
          <Gerador />
        </div>
      </div>

      <div className="footer">
        <div className="container">
          <p className="text-center text-white m-0">© 2019 Superlógica Tecnologias</p>
        </div>
      </div>

    </div>
  );
}

export default App;
