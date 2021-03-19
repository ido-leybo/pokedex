import React from "react";

export default function Details({ details, renderImage, onOver, onLeave }) {
  return (
    <div className="details">
      <ul>
        <li>Name: {details.name}</li>
        <li>Height: {details.height}</li>
        <li>Weight: {details.weight}</li>
        <li>Types: {details.types}</li>
      </ul>
      <img src={renderImage} onMouseOver={onOver} onMouseLeave={onLeave} />
    </div>
  );
}
