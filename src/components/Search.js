import React, { useState } from "react";

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  const handleResetInput = () => {
    setSearchValue("");
  };

  const handleSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    handleResetInput();
  };

  return (
    <div className="container p-3">
      <form>
        <input
          className="form-control"
          type="text"
          placeholder="Search Movie/Serie/Actor"
          value={searchValue}
          onChange={handleSearchValue}
        />
        <button type="submit" onClick={handleSearchFunction} value="SEARCH" className="btn btn-dark btn-block">Search</button>
      </form>
    </div>
  );
};

export default Search;
