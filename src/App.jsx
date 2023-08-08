import React from "react";
import Home from "./pages/Home";
import LikedImages from "./pages/LikedImages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/liked-images" element={<LikedImages />} />
      </Routes>
    </>
  );
}

export default App;
