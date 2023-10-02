import React from "react";

function Carousel(prop) {
    const { images } = prop;
    return (
        <div className="project-gallery">
            {images.map(image => <img className="project-img" alt={images} src={require(`../../../../assets/images/project-images/${image}`)} />)}
        </div>
    )
}

export default Carousel;