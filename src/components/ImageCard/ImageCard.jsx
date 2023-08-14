import React, { useState } from "react";
import { ImageContainer, Picture } from "./ImageCardStyles";
import { StyledExpand } from "./ImageCardStyles";

const ImageCard = ({ image, onExpand, className }) => {
  const expandClickHandler = () => {
    onExpand(image);
    console.log(image.id, image.webformatURL);
  };

  return (
    <ImageContainer className={className}>
      <StyledExpand onClick={expandClickHandler} />
      <Picture src={image.webformatURL} />
    </ImageContainer>
  );
};

export default ImageCard;
