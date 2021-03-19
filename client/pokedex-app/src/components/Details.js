import React from "react";

export default function Details({
  details,
  renderImage,
  onOver,
  onLeave,
  onClick,
}) {
  let types;
  if (details.types) {
    types = details.types;
  } else {
    types = [];
  }

  return (
    <div className="details">
      <ul>
        <li>Name: {details.name}</li>
        <li>Height: {details.height}</li>
        <li>Weight: {details.weight}</li>
        <li>
          Types:
          {types.map((type) => {
            return (
              <span key={type} onClick={onClick}>
                {type}
              </span>
            );
          })}
        </li>
      </ul>
      <img src={renderImage} onMouseOver={onOver} onMouseLeave={onLeave} />
    </div>
  );
}
