import React, { Component } from 'react';

import GalleryItem from '../GalleryItem';

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
            <div>
                {this.state.listOfImages.map((url, index) =>
                    <GalleryItem
                        key={index}
                        src={url}
                        alt="Foto"
                        clickHandler={(e) => this.setState({ selectedImage: url })}></GalleryItem>

                )}

                <button className="btn btn-primary" type="button" onClick={(e) => this.submitHandler(e)}>clique aqui</button>
                <p>Selected image: {this.state.selectedImage}</p>
            </div>
        )
    }
}


export default Gallery;