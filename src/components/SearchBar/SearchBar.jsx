import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { InputContainer, InputField } from "./SearchBarStyles";

const SearchBar = ({ onChange, value }) => {
  return (
    <>
      <InputContainer>
        <MagnifyingGlassIcon width="30px" id="search-icon" />
        <InputField
          placeholder="Start typing..."
          onChange={onChange}
          value={value}
        />
      </InputContainer>
    </>
  );
};

export default SearchBar;
