import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import ImageCard from "../components/ImageCard/ImageCard";
import { GridWrapper } from "../components/Grid/GridStyles";
import Spinner from "../components/Spinner/Spinner";
import { getImages } from "../api/images";
import { ContainerInner } from "../styles/ContainerStyles";
import { HeartIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import { debounce } from "../utilities/debounce";
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
    console.log(images);
    setImages(images.hits);

    // function saveInput() {
    //   console.log("Saving data");
    // }
    // const processChange = debounce(() => saveInput(), 2000);
    // processChange();

    // const val = event.target.value;
    // setInput(val);
    // getImages(val)
    //   .then((result) => {
    //     setImages(result.hits);
    //   })
    //   .catch((result) => {
    //     console.log("error");
    //   });
  };

  useEffect(() => {
    document.body.style.overflowY = !!modalImage ? "hidden" : "auto";
  }, [modalImage]);

  return (
    <div>
      <ContainerInner>
        <SearchBar onChange={changeSearchString} value={searchString} />
        <HeartIcon
          width="50px"
          cursor="pointer"
          color="red"
          onClick={() => navigate("/liked-images")}
        />
      </ContainerInner>
      {images && (
        <GridWrapper>
          {images.map((image) => (
            <ImageCard key={image.id} image={image} onExpand={setModalImage} />
          ))}
        </GridWrapper>
      )}
      {isLoading && <Spinner />}
      {modalImage && <Modal onClose={setModalImage} image={modalImage} />}
    </div>
  );
};

export default Home;
