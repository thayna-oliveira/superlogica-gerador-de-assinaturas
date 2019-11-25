import React, { Component, useState } from "react";

import GalleryItem from "../GalleryItem";
import SearchField from "../SearchField";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import TypeChecker from "typeco";

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      selectedImage: "",
      result: [],
      modal: false,
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
    let images = this.importAll(
      require.context(
        "/Users/thaynaoliveira/Desktop/Cards/superlogica-gerador-de-assinaturas/public/assets/avatar",
        false,
        /\.(png|jpe?g)$/
      )
    );

    this.setState({
      images: images,
      result: images,
    });
  }

  submitHandler(evt) {
    evt.preventDefault();
    this.props.callbackFromParent(this.state.selectedImage);
    this.toggle();
  }

  getMatchedList = searchText => {
    let search = searchText
      .toUpperCase()
      .replace(/(\/?[\w\-_\/]*\/+)/g, "")
      .replace(/(\.[\w-_]+)(\.[\w-_]+)/g, "");

    let imageList = this.state.images;

    if (TypeChecker.isEmpty(search)) return imageList;

    return imageList.filter(item =>
      item
        .toUpperCase()
        .replace(/(\/?[\w\-_\/]*\/+)/g, "")
        .replace(/(\.[\w-_]+)(\.[\w-_]+)/g, "")
        .includes(search)
    );
  };

  onSearchImage(value) {
    this.setState({
      result: this.getMatchedList(value),
    });
  }

  toggle = () => this.setState({ modal: !this.state.modal });

  render() {
    let modal = this.state.modal;

    return (
      <div>
        <Button color="danger" onClick={this.toggle}>
          dfsd
        </Button>
        <Modal isOpen={modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Selecione um avatar</ModalHeader>
          <ModalBody>
            <div className="gallery">
              <div className="gallery-header">
                <SearchField
                  placeholder="Search item"
                  onChange={this.onSearchImage}
                  onEnter={this.onSearchImage}
                  onSearchClick={this.onSearchImage}
                />
              </div>

              <div className="container">
                <div className="gallery-body row">
                  {this.state.result.map((url, index) => (
                    <GalleryItem
                      key={index}
                      src={url}
                      alt="Foto"
                      clickHandler={e => this.setState({ selectedImage: url })}
                    ></GalleryItem>
                  ))}
                </div>
              </div>
            </div>
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

export default Gallery;
