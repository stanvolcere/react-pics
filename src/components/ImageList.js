import React from 'react';
import './imagelist.css';
import ImageCard from './ImageCard'

const ImageList = (props) => {
    // notice usage of object destructuring here
    const images = props.images.map((image) => {
        // image id obtained from the response from unsplash
        // key property important for improved performance of React
        return <ImageCard id={image.id} image={image}/>
    });

    return (
        <div className="image-list">{images}</div>
    )
}

export default ImageList;