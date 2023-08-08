import React from "react";
import { PuffLoader } from "react-spinners";
import { LoaderWrapper } from "./SpinnerStyles";

const Spinner = () => {
  return (
    <LoaderWrapper>
      <PuffLoader color="#3636d7" />
    </LoaderWrapper>
  );
};

export default Spinner;
