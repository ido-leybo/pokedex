import React from 'react';

function Collection({ pokemons }) {
    return (
        <div className = "collection">
            {pokemons.map(pokemon => {
                return(
                    <div>
                    <span>{pokemon.name}</span>
                    <img src = {pokemon.sprites.front} />
                    </div>
                )
            })}
        </div>
    );
}

export default Collection;