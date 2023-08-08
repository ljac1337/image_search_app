import React, { useState } from "react";
import { CloseIcon, ModalOverlay, ModalWrapper } from "./ModalStyles";
import { LikeIcon } from "../ImageCard/ImageCardStyles";

const Modal = ({ image, onClose }) => {
  const likes = JSON.parse(localStorage.getItem("likedImages")) || {};
  const [isLiked, setIsLiked] = useState(!!likes[image.id]);
  console.log(isLiked);

  const closeModalHandler = () => {
    onClose("");
  };
  const likeHandler = () => {
    const likes = JSON.parse(localStorage.getItem("likedImages")) || {};
    if (likes[image.id]) {
      delete likes[image.id];
      setIsLiked(false);
    } else {
      likes[image.id] = image.webformatURL;
      setIsLiked(true);
    }
    localStorage.setItem("likedImages", JSON.stringify(likes));
  };
  return (
    <>
      <ModalOverlay onClick={closeModalHandler} />
      <ModalWrapper>
        <CloseIcon onClick={closeModalHandler} />
        <img src={image.webformatURL} />
        <LikeIcon onClick={likeHandler} $isLiked={isLiked} />
      </ModalWrapper>
    </>
  );
};

export default Modal;
