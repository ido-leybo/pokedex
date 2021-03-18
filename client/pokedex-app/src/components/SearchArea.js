import React from "react";

export default function SearchArea({ onClick }) {
  return (
    <div className="search">
      Search
      <input placeholder="Enter pokemon name" />
      <button onClick={onClick}>search pokemon</button>
    </div>
  );
}
