import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import ImageCard from "../components/ImageCard/ImageCard";
import Spinner from "../components/Spinner/Spinner";
import { GridWrapper } from "../components/General/GridStyles";
import { getImages } from "../api/images";
import {
  ContainerIcon,
  ContainerInner,
  HeartParagraph,
  HearthIcon,
} from "../components/General/ContainerStyles";

import { useNavigate } from "react-router-dom";

import Modal from "../components/Modal/Modal";

const Home = () => {
  const navigate = useNavigate();

  const [images, setImages] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchString, setSearchString] = useState("");
  const [modalImage, setModalImage] = useState(null);

  const changeSearchString = async (event) => {
    setSearchString(event.target.value);
    setIsLoading(true);
    const images = await getImages(searchString);
    setIsLoading(false);
    // console.log(images);
    setImages(images.hits);
  };

  useEffect(() => {
    document.body.style.overflowY = !!modalImage ? "hidden" : "auto";
  }, [modalImage]);

  const likes = JSON.parse(localStorage.getItem("likedImages"));
  // console.log(likes);

  const likedImages = [];
  for (const key in likes) {
    likedImages.push({
      id: key,
      webformatURL: likes[key],
    });
  }
  // console.log(likedImages.length);

  // console.log(images);

  return (
    <div>
      <ContainerInner>
        <SearchBar onChange={changeSearchString} value={searchString} />
        <ContainerIcon onClick={() => navigate("/liked-images")}>
          <HearthIcon />
          <HeartParagraph>{likedImages.length}</HeartParagraph>
        </ContainerIcon>
      </ContainerInner>
      {images && (
        <GridWrapper>
          {images.map((image) => {
            const imageAspectRatio =
              image.webformatWidth / image.webformatHeight;
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
      )}
      {isLoading && <Spinner />}
      {modalImage && <Modal onClose={setModalImage} image={modalImage} />}
    </div>
  );
};

export default Home;
