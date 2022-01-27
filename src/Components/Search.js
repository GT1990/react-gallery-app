// React
import React from "react";
// App Components
import Header from "./Header";
import PhotosContainer from "./PhotosContainer";

const Search = ({ data, onSearch }) => {
  return (
    <>
      <Header onSearch={onSearch} />
      <PhotosContainer data={data} />
    </>
  );
};

export default Search;
