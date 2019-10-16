import React, { Component } from 'react';

class GeradorAssinatura extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nome: 'Daniel Campos',
      empresa: 'Superlogica',
      cargo: 'Head of Design',
      email: 'daniel.campos@superlogica.com',
      telefone: '11 0000-0000',
      image: 'https://secure.gravatar.com/avatar/8223e756567ed1117c78b33a752f08d2?s=96&d=mm&r=g'
    };
  }

  render() {
    return (
      <div className="row">
        <div className="col-12 col-lg-5">
          <form>
            <div className="form-group">
              <label>Nome</label>
              <input type="text" id="name" className="form-control"
                onChange={(e) => this.setState({ nome: e.target.value })} />
            </div>

            <div className="form-group">
              <label>Empresa</label>
              <select className="form-control"
                onChange={(e) => this.setState({ empresa: e.target.value })}>
                <option value="">Selecione</option>
                <option value="superlogica">Superlógica</option>
                <option value="pjbank">PJBank</option>
              </select>
            </div>

            <div className="form-group">
              <label>Cargo/Setor</label>
              <input type="text" id="cargo" className="form-control"
                onChange={(e) => this.setState({ cargo: e.target.value })} />
            </div>

            <div className="form-group">
              <label>E-mail</label>
              <input type="email" id="email" className="form-control"
                onChange={(e) => this.setState({ email: e.target.value })} />
            </div>

            <div className="form-group">
              <label>Telefone</label>
              <input type="phone" id="phone" className="form-control"
                onChange={(e) => this.setState({ telefone: e.target.value })} />
            </div>

            <div className="form-group">
              <label>Imagem</label>
              <input type="text" id="image" className="form-control"
                onChange={(e) => this.setState({ image: e.target.value })} />
            </div>

          </form>
        </div>

        <div className="col-12 col-lg-6 ml-auto">
          <div className="header-email">Nova Mensagem</div>
          <div className="card-email">
            <div className="destinatario">Para: Daniel Campos</div>
            <div className="assunto">Assunto: Nova assinatura</div>
            <div className="mensagem">
              Olá Daniel,
            <br></br>
              Esse é um exemplo de e-mail do Gerador de Assinaturas de E-mail da Superlógica. Aqui dá para você ter uma ideia de como vai ficar a sua assinatura final.
            <br></br>
              Abraços!
              <br></br>

            </div>
            <div className="assinatura">

              <table>
                <tbody>
                  <tr>
                    <td width="86"><img src={this.state.image} title={this.state.nome} alt={this.state.nome} width="86" height="105" /></td>
                    <td width="30" align="center"><img src="https://www.superlogica.com/assinatura-de-email/linha-superlogica.jpg" /></td>
                    <td width="297" valign="top">
                      <p style={{ marginTop: '0px', marginBottom: '5px', lineHeight: '1.0' }}>
                        <strong style={{ fontSize: '22px', color: '#535353' }}>{this.state.nome}</strong></p>
                        <p style={{ margin: '0px', color: '#707070', fontSize: '14px', marginBottom: '13px', lineHeight: '1.2' }}><span style={{ fontSize: '14px', color: '#707070' }}>{this.state.cargo}<br/>{this.state.telefone} </span></p>
                        <a href="https://www.superlogica.com" style={{ textDecoration: 'none !important', border: 'none !important'}}><img src="https://www.superlogica.com/assinatura-de-email/logo-superlogica.jpg" border="0" target="_blank"/></a>
                            </td>
                        </tr>
                      <tr>
                        <td colspan="3" width="415"><p style= {{ margin: '0px', marginTop: '12px', color: '#707070', fontSize: '10px', lineHeight: '1.2', textAlign: 'justify' }}>Este e-mail contém informações confidenciais e/ou privilegiadas. Se você não for o destinatário ou a pessoa autorizada a receber este documento, não deve usar, copiar ou divulgar as informações nele contidas ou tomar qualquer ação baseada nessas informações. Caso tenha recepcionado este e-mail por engano, favor informar o remetente e apagar a mensagem imediatamente. </p></td>
                      </tr>
                      </tbody>
                      </table>
                  
            </div>
          </div>
            </div>
          </div>
          )
        }
      }
      
      
export default GeradorAssinatura;