import React from 'react';

function Collection({ pokemons, onClick }) {
    if(pokemons.length === 0) return <div className = "collection empty">You Have No Pokemons In Your Collection</div>
    return (
        <div className = "collection">
            {
                pokemons.map(pokemon => {
                    return(
                        <div>
                        <span onClick={onClick}>{pokemon.name}</span>
                        <img src = {pokemon.sprites.front} />
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Collection;