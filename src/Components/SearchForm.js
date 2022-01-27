import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
// App Components
import SearchIcon from "./SearchIcon";

const SearchForm = ({ onSearch }) => {
  const inputRef = React.createRef();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const input = inputRef.current.value;
    onSearch(input);
    e.currentTarget.reset();
    navigate(`/search/${input}`);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="search"
        name="search"
        placeholder="Search"
        required
      />
      <button type="submit" className="search-button">
        <SearchIcon />
      </button>
    </form>
  );
};
export default SearchForm;
