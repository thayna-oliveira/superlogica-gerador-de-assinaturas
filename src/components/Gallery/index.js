import React, { Component } from 'react';

import GalleryItem from '../GalleryItem';
import Button from '../Button';


class Gallery extends Component {

    constructor(props) {

        super(props);

        this.state = {
            listOfImages: [],
            selectedImage: ''
        }

        this.submitHandler = this.submitHandler.bind(this);

    }

    importAll(r) {
        return r.keys().map(r);
    }

    componentDidMount() {
        this.setState({
            listOfImages: this.importAll(require.context(
                '/Users/thaynaoliveira/Desktop/Cards/superlogica-gerador-de-assinaturas/public/assets/avatar',
                false,
                /\.(png|jpe?g|svg)$/))
        });
    }

    submitHandler(evt) {
        evt.preventDefault();
        this.props.callbackFromParent(this.state.selectedImage);
    }

    render() {

        return (
            <div className="gallery">

                <div className="gallery-header">

                    <form class="form-inline">
                        <input class="form-control mr-sm-2" type="search" placeholder="Pesquisar..." aria-label="Search" />
                    </form>

                </div>

                <div className="gallery-body">

                    {this.state.listOfImages.map((url, index) =>
                        <GalleryItem
                            key={index}
                            src={url}
                            alt="Foto"
                            clickHandler={(e) => this.setState({ selectedImage: url })}></GalleryItem>
                    )}

                </div>

                <div className="gallery-footer">

                    <Button
                        clickHandler={(e) => this.submitHandler(e)}
                        style="btn mr-2 btn-primary">
                        Selecionar
                    </Button>

                </div>

            </div>
        )
    }
}


export default Gallery;