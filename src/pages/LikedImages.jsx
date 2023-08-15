import React, { useState } from "react";
import { ContainerInner } from "../components/General/ContainerStyles";
import { HomeIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import { GridWrapper } from "../components/General/GridStyles";
import ImageCard from "../components/ImageCard/ImageCard";
import Modal from "../components/Modal/Modal";

const LikedImages = () => {
  const [modalImage, setModalImage] = useState(null);
  const navigate = useNavigate();
  const likes = JSON.parse(localStorage.getItem("likedImages")) || {};
  const images = [];
  for (const key in likes) {
    const likedImageData = likes[key];
    // console.log(likes);
    images.push({
      id: key,
      webformatURL: likes[key],
      webformatWidth: likes[key],
      webformatHeight: likedImageData.webformatHeight,
    });
  }
  console.log(images);
  return (
    <>
      <ContainerInner>
        <h1>Liked images</h1>
        <HomeIcon width="50px" cursor="pointer" onClick={() => navigate("/")} />
      </ContainerInner>
      <GridWrapper>
        {images.map((image, index) => {
          const imageAspectRatio = image.webformatWidth / image.webformatHeight;
          const imageClassName =
            imageAspectRatio > 1 ? "landscape-image" : "portrait-image";

          return (
            <ImageCard
              key={image.id}
              image={image}
              onExpand={setModalImage}
              className={imageClassName}
            />
          );
        })}
      </GridWrapper>
      {modalImage && <Modal onClose={setModalImage} image={modalImage} />}
    </>
  );
};

export default LikedImages;
