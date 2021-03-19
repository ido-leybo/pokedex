import React from "react";

export default function Details({
  details,
  renderImage,
  onOver,
  onLeave,
  onTypeClick,
  buttonText,
  buttonCatchClick,
  buttonReleaseClick,
}) {
  let types;
  if (details.types) {
    types = details.types;
  } else {
    types = [];
  }

  let buttonType;
  if (buttonText === "catch") {
    buttonType = buttonCatchClick;
  } else {
    buttonType = buttonReleaseClick;
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
              <span key={type} onClick={onTypeClick}>
                {type}
              </span>
            );
          })}
        </li>
      </ul>
      <img src={renderImage} onMouseOver={onOver} onMouseLeave={onLeave} />
      <button onClick={buttonType}>{buttonText}</button>
    </div>
  );
}
