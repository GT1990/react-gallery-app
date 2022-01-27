// React
import React from "react";
// React Router Dom
import { useNavigate } from "react-router-dom";
// App Components
import SearchIcon from "./SearchIcon";

/**
 * Search Form Component
 * @param {object} props
 * @returns - Returns Search Form
 */
const SearchForm = ({ onSearch }) => {
  // Ref on the search input element
  const inputRef = React.createRef();
  // Hook to redirect route
  const navigate = useNavigate();
  /**
   * handleSubmit()
   * 1. Prevents the default submit action
   * 2. Gets input from the form input using its ref
   * 3. Sends the input to the onSearch call back function that was passed down through props
   * 4. Clears the input field
   * 5. Redirects to the /search/:query route
   * @param {object} e - event
   */
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
