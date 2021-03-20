import React from "react";
import ListItem from "./ListItem";

export default function List({ list, onClick }) {
  return (
    <div className="list">
      <h2 className = "list-title">Type List:</h2>
      <ul>
        {list.map((pokemon) => (
          <ListItem
            key={`ListItem-${pokemon.name}`}
            item={pokemon}
            onClick={onClick}
          />
        ))}
      </ul>
    </div>
  );
}
