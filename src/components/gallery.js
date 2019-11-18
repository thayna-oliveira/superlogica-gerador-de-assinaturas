import React, { Component } from 'react';
import GalleryItem from './gallery-item';

class Gallery extends Component {

    constructor(props) {

        super(props);

        this.state = {
            listOfImages: [],
            selectedImage: ''
        }

    }

    importAll(r) {
        return r.keys().map(r);
    }

    componentWillMount() {
        this.setState({
            listOfImages: this.importAll(require.context(
                '/Users/thaynaoliveira/Desktop/Cards/superlogica-gerador-de-assinaturas/public/assets/avatar',
                false,
                /\.(png|jpe?g|svg)$/))
        });
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

                <p>{this.state.selectedImage}</p>
            </div>
        )
    }
}


export default Gallery;