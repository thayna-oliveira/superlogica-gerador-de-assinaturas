import React, { Component } from 'react';
import GeradorAssinatura from './components/GeradorAssinatura';


class App extends Component {

  render() {
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
            <GeradorAssinatura />
          </div>
        </div>


        <div className="footer">
          <div className="container">
            <p className="text-center text-white m-0">© 2019 Superlógica Tecnologias</p>
          </div>
        </div>


      </div>
    )
  }
}


export default App;