// React
import React from "react";
// App Components
import SearchForm from "./SearchForm";
import Nav from "./Nav";

/**
 * Header Component
 * @param {object} props - onSearch
 * @returns - Returns Search Form and Default Nav Links
 */
const Header = ({ onSearch }) => {
  return (
    <>
      <SearchForm onSearch={onSearch} />
      <Nav />
    </>
  );
};

export default Header;
