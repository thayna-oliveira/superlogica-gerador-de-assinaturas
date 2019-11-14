import React, { Component } from 'react';


import Input from './input'; 

class GeradorAssinatura extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      nome: 'Daniel Campos',
      empresa: 'Superlogica',
      cargo: 'Head de Design',
      telefone: '11 0000-0000',
      image: 'https://secure.gravatar.com/avatar/8223e756567ed1117c78b33a752f08d2?s=96&d=mm&r=g',
      copiarFonte: 'Copiar Código Fonte',
      copiarAssinatura: 'Copiar Assinatura',
      statusAssinatura: 0,
      statusFonte: 0
    };

    this.getAssinatura = this.getAssinatura.bind(this);
    this.getCodigoFonte = this.getCodigoFonte.bind(this);

  }

  renderBrand() {
    let state = this.state.empresa;

    if (state === 'pjbank')
      return 'https://pjbank.com.br/assinaturas-de-email/logo.jpg';

    return 'https://www.superlogica.com/assinatura-de-email/logo-superlogica.jpg';
  }

  renderLinha() {

    let state = this.state.empresa;

    if (state === 'pjbank')
      return 'https://pjbank.com.br/assinaturas-de-email/linha.jpg';

    return 'https://www.superlogica.com/assinatura-de-email/linha-superlogica.jpg';

  }

  renderURL() {

    let state = this.state.empresa;

    if (state === 'pjbank')
      return 'https://pjbank.com.br/';

    return 'https://www.superlogica.com/';
  }

  getCodigoFonte() {

    let assinatura = document.getElementById('assinatura').innerHTML;

    navigator.clipboard.writeText(assinatura);

    this.setState({
      copiarFonte: "Copiado! ;)",
      statusFonte: 1
    });

    setTimeout(function () {
      this.setState({
        copiarFonte: "Copiar Código Fonte",
        statusFonte: 0
      });
    }.bind(this), 2000);

  }


  getAssinatura() {

    function listener(e) {
      let str = document.getElementById('assinatura').innerHTML;
      e.clipboardData.setData("text/html", str);
      e.clipboardData.setData("text/plain", str);
      e.preventDefault();
    }

    document.addEventListener("copy", listener);
    document.execCommand("copy");
    document.removeEventListener("copy", listener);

    this.setState({
      copiarAssinatura: "Copiado! Agora é só instalar ;)",
      statusAssinatura: 1
    });

    setTimeout(function () {
      this.setState({
        copiarAssinatura: "Copiar Assinatura",
        statusAssinatura: 0
      });
    }.bind(this), 2000);

  };

  render() {

    const importAll = require =>
      require.keys().reduce((acc, next) => {
        acc[next.replace("./", "")] = require(next);
        return acc;
      }, {});

    const images = importAll(
      require.context("/Users/thaynaoliveira/Desktop/Cards/2841 - Criacao de Assinaturas - React Build/superlogica-gerador-de-assinaturas/src/images", false, /\.(png|jpe?g|svg)$/)
    );


    return (

      <div className="row">
        <div className="col-12 col-lg-6">
          <form className="pr-lg-5">
            <h2>Gerador de Assinatura</h2>
            <div className="form-group mb-3">
              <label>Insira seu nome e um sobrenome</label>

              <Input id="name"
                type="text"
                placeholder="Nome Sobrenome"
                clickHandler={(e) => this.setState({ nome: e.target.value })} />

            </div>

            <div className="form-group mb-3">
              <label>Informe sua empresa</label>
              <select className="form-control"
                onChange={(e) => this.setState({ empresa: e.target.value })}>
                <option value="">Selecione sua Empresa</option>
                <option value="superlogica">Superlógica</option>
                <option value="pjbank">PJBank</option>
              </select>
            </div>

            <div className="form-group mb-3">
              <label>Informe seu Cargo/Setor</label>

              <Input id="cargo"
                type="text"
                placeholder="Cargo/Setor"
                clickHandler={(e) => this.setState({ cargo: e.target.value })} />

            </div>

            <div className="form-group mb-3">
              <label>Insira seu Telefone</label>

              <Input id="image"
                type="phone"
                placeholder="Telefone"
                clickHandler={(e) => this.setState({ telefone: e.target.value })} />

              <small id="helper-phone" class="form-text text-muted">Clique aqui e veja como inserir uma imagem.</small>

            </div>

            <div className="form-group mb-5">
              <label>Insira o endereço da sua foto ou avatar</label>

              <Input id="image"
                type="text"
                aria-describedby="helper"
                placeholder="www.endereco.com/imagem.png"
                clickHandler={(e) => this.setState({ image: e.target.value })} />

              <small id="helper-imagem" class="form-text text-muted">Clique aqui e veja como inserir uma imagem.</small>
            </div>

          </form>


          <button type="button" onClick={this.getAssinatura}
            className={this.state.statusAssinatura ? "btn mr-2 btn-success" : "btn mr-2 btn-primary"} >
            {this.state.copiarAssinatura}
          </button>

          <button type="button" onClick={this.getCodigoFonte}
            className={this.state.statusFonte ? "btn mr-2 btn-success" : "btn mr-2 btn-primary"} >
            {this.state.copiarFonte}
          </button>

        </div>

        <div className="col-12 col-lg-6 ml-auto">
          <div className="header-email">Nova Mensagem</div>
          <div className="card-email">
            <div className="destinatario"><span>Para:</span> Carlos Cera</div>
            <div className="assunto"><span>Assunto:</span> Nova assinatura</div>
            <div className="mensagem">
              Olá Carlos,
              <br /><br />
              Esse é um exemplo de e-mail criado no Gerador de Assinaturas de E-mail da Superlógica. Aqui dá para você ter uma ideia de como vai ficar a sua assinatura final.
              <br /><br />
              Abraços!
            </div>
            <div className="assinatura" id="assinatura">

              <table>
                <tbody>
                  <tr>
                    <td width="86"><img src={this.state.image} title={this.state.nome} alt={this.state.nome} width="86" height="105" /></td>
                    <td width="30" align="center"><img src={this.renderLinha()} alt="linha" /></td>
                    <td width="297" valign="top">
                      <p style={{ marginTop: '0px', marginBottom: '5px', lineHeight: '1.0' }}>
                        <strong style={{ fontSize: '22px', color: '#535353' }}>{this.state.nome}</strong></p>
                      <p style={{ margin: '0px', color: '#707070', fontSize: '14px', marginBottom: '13px', lineHeight: '1.2' }}><span style={{ fontSize: '14px', color: '#707070' }}>{this.state.cargo}<br />{this.state.telefone} </span></p>
                      <a href={this.renderURL()} style={{ textDecoration: 'none !important', border: 'none !important' }}>
                        <img src={this.renderBrand()} alt={this.state.empresa} border="0" target="_blank" /></a>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="3" width="415"><p style={{ margin: '0px', marginTop: '12px', color: '#707070', fontSize: '10px', lineHeight: '1.2', textAlign: 'justify' }}>Este e-mail contém informações confidenciais e/ou privilegiadas. Se você não for o destinatário ou a pessoa autorizada a receber este documento, não deve usar, copiar ou divulgar as informações nele contidas ou tomar qualquer ação baseada nessas informações. Caso tenha recepcionado este e-mail por engano, favor informar o remetente e apagar a mensagem imediatamente. </p></td>
                  </tr>
                </tbody>
              </table>

            </div>
          </div>
        </div>


        <div>
          {Object.keys(images).map(function (key) {
            return <img src={images[key]} alt="" />;
          })}
        </div>
      </div>
    )
  }
}


export default GeradorAssinatura;