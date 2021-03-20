import React from 'react';

function Collection({ pokemons, onClick }) {
    return (
        <div className = "collection">
            {pokemons.map(pokemon => {
                return(
                    <div>
                    <span onClick={onClick}>{pokemon.name}</span>
                    <img src = {pokemon.sprites.front} />
                    </div>
                )
            })}
        </div>
    );
}

export default Collection;