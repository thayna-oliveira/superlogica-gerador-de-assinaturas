import React, { Component } from "react";

import TypeChecker from "typeco";
import SearchField from "../Search";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Spinner,
} from "reactstrap";

class ImageSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      selectedImage: "",
      result: [],
      modal: false,
      isLoading: true,
    };

    this.submitHandler = this.submitHandler.bind(this);
    this.onSearchImage = this.onSearchImage.bind(this);
    this.getMatchedList = this.getMatchedList.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  importAll(r) {
    return r.keys().map(r);
  }

  componentDidMount() {
    let list = this.importAll(
      require.context(
        "/Users/thaynaoliveira/Desktop/Cards/superlogica-gerador-de-assinaturas/public/assets/avatar",
        false,
        /\.(png|jpe?g)$/
      )
    );

    this.setState({
      images: list,
      result: list.slice(0, 9),
    });

    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 2500);
  }

  submitHandler(evt) {
    evt.preventDefault();
    this.props.callbackFromParent(this.state.selectedImage);
    this.toggle();
  }

  getMatchedList = searchText => {
    let search = searchText
      .toUpperCase()
      .replace(/(\/?[\w\-_/]*\/+)/g, "")
      .replace(/(\.[\w-_]+)(\.[\w-_]+)/g, "");

    let imageList = this.state.images;

    if (TypeChecker.isEmpty(search)) {
      return imageList.slice(0, 6);
    }

    return imageList.filter(item =>
      item
        .toUpperCase()
        .replace(/(\?[\w\-_/]*\/+)/g, "")
        .replace(/(\.[\w-_]+)(\.[\w-_]+)/g, "")
        .includes(search)
    );
  };

  onSearchImage(value) {
    this.setState({
      result: this.getMatchedList(value),
    });
  }

  toggle = () => {
    this.setState({ modal: !this.state.modal });
    this.onSearchImage("");
  };

  render() {
    let modal = this.state.modal;

    return (
      <div>
        <Button
          className="btn-dashed"
          outline
          color="secondary"
          onClick={this.toggle}
        >
          <i class="fal fa-search"></i> Procurar imagem
        </Button>
        <Modal isOpen={modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Selecione seu avatar</ModalHeader>
          <ModalBody>
            {this.state.isLoading ? (
              <Spinner color="secondary" />
            ) : (
              <div className="gallery">
                <div className="gallery-header">
                  <SearchField
                    placeholder="Pesquise seu avatar"
                    onChange={this.onSearchImage}
                    onEnter={this.onSearchImage}
                    onSearchClick={this.onSearchImage}
                  />
                </div>

                <div className="container">
                  <div className="gallery-body row">
                    {this.state.result.length === 0 ? (
                      <h2>Resultado não encontrado!</h2>
                    ) : (
                      this.state.result.map((url, index) => (
                        <div
                          className="col-4 gallery-item"
                          key={index}
                          onClick={e => this.setState({ selectedImage: url })}
                        >
                          <img className="avatar" src={url} alt="Foto"></img>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            )}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={e => this.submitHandler(e)}>
              Selecionar
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ImageSelector;
