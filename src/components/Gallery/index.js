import React, { Component } from "react";

import GalleryItem from "../GalleryItem";
import Button from "../Button";
import SearchField from "../SearchField";
import TypeChecker from "typeco";

const ImageList = props => (
  <div className="list-example">
    <div className="list-header"></div>
    <div className="list-body">
      {props.list.map((item, index) => (
        <ul key={index}>
          <li> {item} </li>
        </ul>
      ))}
    </div>
  </div>
);

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      selectedImage: "",
      result: [],
      teste: ''
    };

    this.submitHandler = this.submitHandler.bind(this);
    this.onSearchImage = this.onSearchImage.bind(this);
    this.getMatchedList = this.getMatchedList.bind(this);
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

  render() {
    return (
      <div className="gallery">
        <div className="gallery-header">
          <div className="react-search-field-demo container">
            <h2>Pesquisa: {this.state.teste}</h2>
            <div>
              <SearchField
                placeholder="Search item"
                onChange={this.onSearchImage}
                onEnter={this.onSearchImage}
                onSearchClick={this.onSearchImage}
              />

            </div>
          </div>
        </div>

        <div className="gallery-body">
          {this.state.result.map((url, index) => (
            <GalleryItem
              key={index}
              src={url}
              alt="Foto"
              clickHandler={e => this.setState({ selectedImage: url })}
            ></GalleryItem>
          ))}
        </div>

        <div className="gallery-footer">
          <Button clickHandler={e => this.submitHandler(e)}>Selecionar</Button>
        </div>
      </div>
    );
  }
}

export default Gallery;
