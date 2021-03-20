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
        <li><span className = "detail">Name:</span> <span className = "detail">{details.name}</span></li>
        <li><span className = "detail">Height:</span> <span className = "detail">{details.height}</span></li>
        <li><span className = "detail">Weight:</span> <span className = "detail">{details.weight}</span></li>
        <li>
        <span className = "detail">Types:</span>
          {types.map((type) => {
            return (
              <span className = "detail clickable" key={type} onClick={onTypeClick}>
                {type}
              </span>
            );
          })}
        </li>
      </ul>
      <div className = "imgBtn">
      <img src={renderImage} onMouseOver={onOver} onMouseLeave={onLeave} />
      <button className = "btn" onClick={buttonType}>{buttonText}</button>
      </div>
    </div>
  );
}

