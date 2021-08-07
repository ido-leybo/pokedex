import React from "react";

export default function ListItem({ item, onClick }) {
  return (
    <li className="list-item clickable" onClick={onClick}>
      <span>{item.name}</span>
      <span><img className = "pokeImg" src={item.image} /></span>
    </li>
  );
}
