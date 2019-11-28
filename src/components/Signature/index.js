import React, { Component } from "react";

import ImageSelector from "../ImageSelector";

import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";

class Signature extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: "Daniel Campos",
      empresa: "Superlogica",
      cargo: "Head de Design",
      telefone: "11 0000-0000",
      image:
        "https://secure.gravatar.com/avatar/8223e756567ed1117c78b33a752f08d2?s=96&d=mm&r=g",
      copiarFonte: "Copiar Código Fonte",
      copiarAssinatura: "Copiar Assinatura",
      statusAssinatura: 0,
      statusFonte: 0,
      child: "",
    };

    this.handleData = this.handleData.bind(this);
    this.getAssinatura = this.getAssinatura.bind(this);
    this.getCodigoFonte = this.getCodigoFonte.bind(this);
  }

  handleData(data) {
    this.setState({
      image: data,
    });
  }

  renderBrand() {
    let state = this.state.empresa;

    if (state === "pjbank") return "/assets/img/logo-pjbank.jpg";

    return "/assets/img/logo-superlogica.jpg";
  }

  renderLinha() {
    let state = this.state.empresa;

    if (state === "pjbank") return "/assets/img/linha-pjbank.jpg";

    return "/assets/img/linha-superlogica.jpg";
  }

  renderURL() {
    let state = this.state.empresa;

    if (state === "pjbank") return "https://pjbank.com.br/";

    return "https://www.superlogica.com/";
  }

  getCodigoFonte() {
    let assinatura = document.getElementById("assinatura").innerHTML;

    navigator.clipboard.writeText(assinatura);

    this.setState({
      copiarFonte: "Copiado! ;)",
      statusFonte: 1,
    });

    setTimeout(
      function() {
        this.setState({
          copiarFonte: "Copiar Código Fonte",
          statusFonte: 0,
        });
      }.bind(this),
      2000
    );
  }

  getAssinatura() {
    function listener(e) {
      let str = document.getElementById("assinatura").innerHTML;
      e.clipboardData.setData("text/html", str);
      e.clipboardData.setData("text/plain", str);
      e.preventDefault();
    }

    document.addEventListener("copy", listener);
    document.execCommand("copy");
    document.removeEventListener("copy", listener);

    this.setState({
      copiarAssinatura: "Copiado! Agora é só instalar ;)",
      statusAssinatura: 1,
    });

    setTimeout(
      function() {
        this.setState({
          copiarAssinatura: "Copiar Assinatura",
          statusAssinatura: 0,
        });
      }.bind(this),
      2000
    );
  }

  render() {
    return (
      <div className="hero">
        <Container>
          <Row>
            <Col lg="6" className="mb-5">
              <div className="nav-header mt-4 mb-5">Gerador de Assinaturas</div>
              <Form className="mb-5">
                <FormGroup row className="mb-4">
                  <Label for="name" sm={3}>
                    Nome
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Nome"
                      onChange={e => this.setState({ nome: e.target.value })}
                    />{" "}
                  </Col>
                </FormGroup>

                <FormGroup row className="mb-4">
                  <Label for="exampleSelect" sm={3}>
                    Empresa
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="select"
                      name="select"
                      id="exampleSelect"
                      onChange={e => this.setState({ empresa: e.target.value })}
                    >
                      <option value="">Selecionar...</option>
                      <option value="superlogica">Superlógica</option>
                      <option value="pjbank">PJBank</option>
                    </Input>
                  </Col>
                </FormGroup>

                <FormGroup row className="mb-4">
                  <Label for="cargo" sm={3}>
                    Cargo/Setor
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="text"
                      name="cargo"
                      id="cargo"
                      placeholder="Cargo/Setor"
                      onChange={e => this.setState({ cargo: e.target.value })}
                    />
                  </Col>
                </FormGroup>

                <FormGroup row className="mb-4">
                  <Label for="cargo" sm={3}>
                    Telefone
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="phone"
                      name="cargo"
                      id="cargo"
                      placeholder="Telefone"
                      onChange={e =>
                        this.setState({ telefone: e.target.value })
                      }
                    />
                  </Col>
                </FormGroup>

                <FormGroup row className="mb-4">
                  <Label sm={3}>Avatar</Label>
                  <Col sm={9}>
                    <ImageSelector callbackFromParent={this.handleData} />
                    <FormText color="muted">
                      This is some placeholder block-level help text for the
                      above input.
                    </FormText>
                  </Col>
                </FormGroup>
              </Form>
              <Button color="primary" onClick={this.getAssinatura}>
                <i class="fal fa-copy"></i> {"  "} {this.state.copiarAssinatura}
              </Button>{" "}
              <Button color="primary" onClick={this.getCodigoFonte}>
                <i class="fal fa-copy"></i> {"  "} {this.state.copiarFonte}
              </Button>
            </Col>

            <Col lg="6" className="ml-auto">
              <div className="nav-header mt-4 mb-5">Pré-visualizar</div>

              <div className="header-email">Nova Mensagem</div>
              <div className="card-email">
                <div className="destinatario">
                  <span>Para:</span> Seu destinatário
                </div>
                <div className="assunto">
                  <span>Assunto:</span> Veja minha nova assinatura de e-mail
                </div>
                <div className="mensagem">
                  Olá Carlos,
                  <br />
                  <br />
                  Esse é um exemplo de e-mail criado no Gerador de Assinaturas
                  de E-mail da Superlógica. Aqui dá para você ter uma ideia de
                  como vai ficar a sua assinatura final.
                  <br />
                  <br />
                  Abraços!
                </div>
                <div className="assinatura" id="assinatura">
                  <table>
                    <tbody>
                      <tr>
                        <td width="86">
                          <img
                            src={this.state.image}
                            title={this.state.nome}
                            alt={this.state.nome}
                            width="86"
                            height="105"
                          />
                        </td>
                        <td width="30" align="center">
                          <img src={this.renderLinha()} alt="linha" />
                        </td>
                        <td width="297" valign="top">
                          <p
                            style={{
                              marginTop: "0px",
                              marginBottom: "5px",
                              lineHeight: "1.0",
                            }}
                          >
                            <strong
                              style={{ fontSize: "22px", color: "#535353" }}
                            >
                              {this.state.nome}
                            </strong>
                          </p>
                          <p
                            style={{
                              margin: "0px",
                              color: "#707070",
                              fontSize: "14px",
                              marginBottom: "13px",
                              lineHeight: "1.2",
                            }}
                          >
                            <span
                              style={{ fontSize: "14px", color: "#707070" }}
                            >
                              {this.state.cargo}
                              <br />
                              {this.state.telefone}{" "}
                            </span>
                          </p>
                          <a
                            href={this.renderURL()}
                            style={{
                              textDecoration: "none !important",
                              border: "none !important",
                            }}
                          >
                            <img
                              src={this.renderBrand()}
                              alt={this.state.empresa}
                              border="0"
                              target="_blank"
                            />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="3" width="415">
                          <p
                            style={{
                              margin: "0px",
                              marginTop: "12px",
                              color: "#707070",
                              fontSize: "10px",
                              lineHeight: "1.2",
                              textAlign: "justify",
                            }}
                          >
                            Este e-mail contém informações confidenciais e/ou
                            privilegiadas. Se você não for o destinatário ou a
                            pessoa autorizada a receber este documento, não deve
                            usar, copiar ou divulgar as informações nele
                            contidas ou tomar qualquer ação baseada nessas
                            informações. Caso tenha recepcionado este e-mail por
                            engano, favor informar o remetente e apagar a
                            mensagem imediatamente.{" "}
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Signature;
