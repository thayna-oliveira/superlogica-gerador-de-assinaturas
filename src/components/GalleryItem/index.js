import React from "react";

const GalleryItem = ({ src, alt, clickHandler }) => (
  <div className="col-4" onClick={clickHandler}>
    <img style={{ maxWidth: "100px" }} src={src} alt={alt}></img>
  </div>
);

export default GalleryItem;
