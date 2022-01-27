import React from "react";
// App Components
import SearchForm from "./SearchForm";
import Nav from "./Nav";

const Header = ({ onSearch }) => {
  return (
    <>
      <SearchForm onSearch={onSearch} />
      <Nav />
    </>
  );
};

export default Header;
