import React, { Component } from 'react';
import GeradorAssinatura from './components/GeradorAssinatura';


class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <GeradorAssinatura />
        </div>

        <div className="container">
          footer
        </div>


      </div>
    )
  }
}


export default App;