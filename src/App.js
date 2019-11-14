import React from 'react';
import logo from './logo.svg';
import './App.css';

import Gerador from './components/gerador';

function App() {
  return (
    <div>

      <div className="nav">
        <div className="container">
          <a href="https://superlogica.com" target="_blank">
            <img src="https://recorrencia.superlogica.com/hubfs/%5BGLOBAL%20ASSETS%5D/cards/2927_LP_tarifa_fixa/brand/superlogica.svg" alt="Logo Superlógica" class="logo" />
          </a>
        </div>
      </div>

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
