import React from "react";

export default function ListItem({ item, onClick }) {
  return (
    <li className="list-item clickable" onClick={onClick}>
      {item.name}
    </li>
  );
}
