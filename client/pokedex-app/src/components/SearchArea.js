import React from "react";

export default function SearchArea({ onClick }) {
  return (
    <div className="search">
      <input className = "search-field" placeholder="Enter pokemon name" />
      <button className = "btn search-button"onClick={onClick}>search pokemon</button>
    </div>
  );
}
