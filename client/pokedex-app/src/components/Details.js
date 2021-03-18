import React from "react";

export default function Details(props) {
  return (
    <div className="details">
      <ul>
        <li>Name: {props.details.name}</li>
        <li>Height: {props.details.height}</li>
        <li>Weight: {props.details.height}</li>
        <li>Types: {props.details.types}</li>
      </ul>
    </div>
  );
}
