import React from "react";
import SearchIcon from "@material-ui/icons/Search";
const Searchbar = () => {
  return (
    <>
      <div className="searchbar">
        <SearchIcon style={{ fontSize: "20px" }} className="searchIcon" />
        <input
          type="text"
          className="searchInput"
          placeholder="Search or start new chat"
        />
      </div>
    </>
  );
};

export default Searchbar;
