import React from "react";

export default function ListItem({ item, onClick }) {
  return (
    <li className="item-list clickable" onClick={onClick}>
      {item.name}
    </li>
  );
}
