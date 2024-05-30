import React from "react";

const ImageComponent = ({ src }) => {
  return (
    <div
      className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center "
      data-aos="zoom-in"
    >
      <img src={src} className="img-fluid " alt="" />
    </div>
  );
};

export default ImageComponent;
