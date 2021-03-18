import React from "react";

export default function SearchArea(props) {
  return (
    <div>
      Search
      <input placeholder="Enter pokemon name" />
      <button onClick={props.onClick}>search pokemon</button>
    </div>
  );
}
