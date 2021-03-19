import React from "react";
import ListItem from "./ListItem";

export default function List({ list, onClick }) {
  return (
    <div className="list">
      list
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
