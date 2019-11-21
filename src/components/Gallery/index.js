import React, { Component } from "react";

import GalleryItem from "../GalleryItem";
import Button from "../Button";
import SearchField from "../SearchField";
import TypeChecker from "typeco";

let imageList = [];

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
      result: [...imageList],
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
        true,
        /\.(png|jpe?g)$/
      )
    );

    this.setState({
      result: images,
    });

    imageList = images;
  }

  submitHandler(evt) {
    evt.preventDefault();
    this.props.callbackFromParent(this.state.selectedImage);
  }

  getMatchedList = searchText => {
    if (TypeChecker.isEmpty(searchText)) return imageList;
    return imageList.filter(item => item.includes(searchText));
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
            <div>
              <SearchField
                placeholder="Search item"
                onChange={this.onSearchImage}
                onEnter={this.onSearchImage}
                onSearchClick={this.onSearchImage}
              />

              <ImageList list={this.state.result} />
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
