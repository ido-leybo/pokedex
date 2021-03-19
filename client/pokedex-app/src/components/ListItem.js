import React from "react";

export default function ListItem({ item, onClick }) {
  return (
    <li className="item-list" onClick={onClick}>
      {item.name}
    </li>
  );
}
