import React from "react";

const SearchBar = ({ search, handleSearch }) => {
  return (
    <div>
      <input type="text"value={search} onChange={handleSearch} placeholder="Rechercher par titre ou genre 🔍"/>
    </div>
  );
};

export default SearchBar;
